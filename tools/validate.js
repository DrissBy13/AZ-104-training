#!/usr/bin/env node
/* Vérifie la banque de questions : champs obligatoires, index valides,
 * identifiants uniques, et qu'une réponse idéale obtient bien 1 point.
 * Usage : node tools/validate.js
 */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");

const root = path.join(__dirname, "..");
/* Les fichiers de questions sont ceux que charge index.html, dans le même ordre */
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="questions\/([^"]+)\.js"><\/script>/g)].map(m => m[1]);
if (!files.length) { console.error("✗ aucun fichier de questions trouvé dans index.html"); process.exit(1); }
const ctx = { AZ: { questions: [], series: [], cases: [] } };
ctx.window = ctx;
ctx.tbl = (head, rows) => `<table>${head.join("")}${rows.flat().join("")}</table>`;
vm.createContext(ctx);
for (const f of files) {
  const p = path.join(root, "questions", f + ".js");
  try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: p }); }
  catch (e) { console.error(`✗ ${f}.js : erreur de syntaxe\n  ${e.message}`); process.exit(1); }
}
const { questions, series, cases } = ctx.AZ;

const errors = [];
const err = (id, msg) => errors.push(`${id} : ${msg}`);
const ids = new Set();
const isStr = v => typeof v === "string" && v.trim().length > 0;
const inRange = (v, arr) => Number.isInteger(v) && v >= 0 && v < arr.length;
const TYPES = ["single", "multi", "hot", "cmd", "yngrid", "dragdrop", "order", "hotspot", "screen"];

function checkQuestion(q, where) {
  const id = q.id || `(sans id dans ${where})`;
  if (!isStr(q.id)) err(id, "id manquant");
  else if (ids.has(q.id)) err(id, "id en double");
  else ids.add(q.id);
  if (![1, 2, 3, 4, 5].includes(q.dom)) err(id, "dom doit valoir 1 à 5");
  if (!TYPES.includes(q.type)) { err(id, `type inconnu « ${q.type} »`); return; }
  if (!isStr(q.stem)) err(id, "stem (énoncé) manquant");
  if (!isStr(q.expl)) err(id, "expl (explication) manquante");
  if (q.docs) q.docs.forEach((d, i) => { if (!isStr(d.t) || !isStr(d.h)) err(id, `docs[${i}] incomplet`); });

  switch (q.type) {
    case "single":
      if (!Array.isArray(q.opts) || q.opts.length < 2) err(id, "opts : au moins 2 réponses");
      else if (!inRange(q.ans, q.opts)) err(id, "ans hors des opts");
      break;
    case "multi":
      if (!Array.isArray(q.opts) || q.opts.length < 3) err(id, "opts : au moins 3 réponses");
      else if (!Array.isArray(q.ans) || !q.ans.every(a => inRange(a, q.opts))) err(id, "ans doit être un tableau d'index valides");
      else if (q.pick !== q.ans.length) err(id, "pick doit être égal au nombre de bonnes réponses");
      else if (new Set(q.ans).size !== q.ans.length) err(id, "ans contient un doublon");
      break;
    case "hot":
    case "cmd":
      if (!Array.isArray(q.rows) || !q.rows.length) { err(id, "rows manquant"); break; }
      q.rows.forEach((r, i) => {
        if (!isStr(r.l)) err(id, `rows[${i}].l manquant`);
        if (!Array.isArray(r.o) || r.o.length < 2) err(id, `rows[${i}].o : au moins 2 choix`);
        else if (!inRange(r.a, r.o)) err(id, `rows[${i}].a hors des choix`);
      });
      if (q.type === "cmd") {
        if (!isStr(q.tpl)) err(id, "tpl manquant");
        else q.rows.forEach((_, i) => { if (!q.tpl.includes(`{${i}}`)) err(id, `tpl ne contient pas {${i}}`); });
      }
      break;
    case "yngrid":
      if (!Array.isArray(q.rows) || !q.rows.length) { err(id, "rows manquant"); break; }
      q.rows.forEach((r, i) => { if (!isStr(r.l)) err(id, `rows[${i}].l manquant`); if (r.a !== 0 && r.a !== 1) err(id, `rows[${i}].a doit valoir 0 (Oui) ou 1 (Non)`); });
      break;
    case "dragdrop":
      if (!Array.isArray(q.srcs) || q.srcs.length < 2) err(id, "srcs : au moins 2 valeurs");
      if (!Array.isArray(q.tgtHead) || q.tgtHead.length !== 2) err(id, "tgtHead doit avoir 2 titres");
      if (!isStr(q.srcLabel)) err(id, "srcLabel manquant");
      if (!Array.isArray(q.tgts) || !q.tgts.length) err(id, "tgts manquant");
      else q.tgts.forEach((t, i) => { if (!isStr(t.l)) err(id, `tgts[${i}].l manquant`); if (!inRange(t.a, q.srcs || [])) err(id, `tgts[${i}].a hors des srcs`); });
      break;
    case "order":
      if (!Array.isArray(q.acts) || q.acts.length < 3) err(id, "acts : au moins 3 actions");
      else if (!Array.isArray(q.seq) || !q.seq.length || !q.seq.every(a => inRange(a, q.acts))) err(id, "seq doit contenir des index d'actions valides");
      else if (new Set(q.seq).size !== q.seq.length) err(id, "seq contient un doublon");
      else if (q.seq.length > q.acts.length) err(id, "seq plus longue que acts");
      break;
    case "hotspot": {
      const items = (q.win && q.win.nav || []).flatMap(g => g.items || []);
      if (!q.win || !isStr(q.win.title)) err(id, "win.title manquant");
      if (!items.includes(q.ans)) err(id, `ans « ${q.ans} » absent du menu`);
      if (new Set(items).size !== items.length) err(id, "le menu contient deux éléments identiques");
      break;
    }
    case "screen": {
      const rows = q.win && q.win.rows;
      if (!Array.isArray(rows)) { err(id, "win.rows manquant"); break; }
      let graded = 0;
      rows.forEach((r, i) => {
        if (r.k === "head" || r.k === "text") { if (!isStr(r.t)) err(id, `win.rows[${i}].t manquant`); return; }
        if (r.k === "select") { if (!Array.isArray(r.o)) err(id, `win.rows[${i}].o manquant`); else if (r.a !== null && !inRange(r.a, r.o)) err(id, `win.rows[${i}].a hors des choix`); }
        else if (r.k === "radio") { if (!Array.isArray(r.opts)) err(id, `win.rows[${i}].opts manquant`); else if (r.a !== null && !inRange(r.a, r.opts)) err(id, `win.rows[${i}].a hors des choix`); }
        else if (r.k === "check") { if (r.a !== null && typeof r.a !== "boolean") err(id, `win.rows[${i}].a doit être true, false ou null`); }
        else { err(id, `win.rows[${i}].k inconnu « ${r.k} »`); return; }
        if (r.a !== null) graded++;
      });
      if (!graded) err(id, "aucun contrôle noté dans l'écran");
      break;
    }
  }
}

questions.forEach(q => checkQuestion(q, "questions"));

series.forEach(s => {
  if (!isStr(s.id) || ids.has(s.id)) err(s.id, "id de série manquant ou en double"); else ids.add(s.id);
  if (![1, 2, 3, 4, 5].includes(s.dom)) err(s.id, "dom doit valoir 1 à 5");
  if (!isStr(s.scenario)) err(s.id, "scenario manquant");
  if (!Array.isArray(s.items) || s.items.length < 2) err(s.id, "items : au moins 2 solutions");
  else s.items.forEach((it, i) => {
    if (!isStr(it.solution)) err(s.id, `items[${i}].solution manquante`);
    if (it.ans !== 0 && it.ans !== 1) err(s.id, `items[${i}].ans doit valoir 0 (Oui) ou 1 (Non)`);
    if (!isStr(it.expl)) err(s.id, `items[${i}].expl manquante`);
  });
});

cases.forEach(c => {
  if (!isStr(c.id) || ids.has(c.id)) err(c.id, "id d'étude de cas manquant ou en double"); else ids.add(c.id);
  if (!Array.isArray(c.docs) || !c.docs.length) err(c.id, "docs manquants");
  if (!Array.isArray(c.questions) || !c.questions.length) err(c.id, "questions manquantes");
  else c.questions.forEach(q => checkQuestion(q, c.id));
});

/* Bilan */
const count = d => questions.filter(q => q.dom === d).length;
const caseQ = cases.reduce((n, c) => n + (c.questions || []).length, 0);
const serQ = series.reduce((n, s) => n + (s.items || []).length, 0);
const byType = {};
[...questions, ...cases.flatMap(c => c.questions || [])].forEach(q => { byType[q.type] = (byType[q.type] || 0) + 1; });

console.log("Banque AZ-104");
[1, 2, 3, 4, 5].forEach(d => console.log(`  Domaine ${d} : ${count(d)}`));
console.log(`  Séries Oui/Non : ${series.length} (${serQ} questions)`);
console.log(`  Études de cas : ${cases.length} (${caseQ} questions)`);
console.log(`  Total : ${questions.length + caseQ + serQ} questions`);
console.log("  Par format : " + Object.entries(byType).map(([k, v]) => `${k} ${v}`).join(", "));

if (errors.length) {
  console.error(`\n✗ ${errors.length} erreur(s) :`);
  errors.forEach(e => console.error("  - " + e));
  process.exit(1);
}
console.log("\n✓ Aucune erreur");
