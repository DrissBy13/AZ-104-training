#!/usr/bin/env node
/* Vérifie la banque de questions de chaque langue : champs obligatoires, index valides,
 * identifiants uniques, vues du portail, et que les langues sont alignées
 * (mêmes questions, mêmes formats, mêmes bonnes réponses).
 * Usage : node tools/validate.js
 */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");

const root = path.join(__dirname, "..");
const man = { window: {} };
vm.createContext(man);
vm.runInContext(fs.readFileSync(path.join(root, "questions", "manifest.js"), "utf8"), man);
const FILES = man.window.AZ_FILES, LANGS = man.window.AZ_LANGS;

const errors = [];
const isStr = v => typeof v === "string" && v.trim().length > 0;
const inRange = (v, arr) => Number.isInteger(v) && v >= 0 && v < arr.length;
const TYPES = ["single", "multi", "hot", "cmd", "yngrid", "dragdrop", "order", "hotspot", "screen"];

function load(lang) {
  const ctx = { AZ: { questions: [], series: [], cases: [], extras: {} } };
  ctx.window = ctx;
  ctx.tbl = (head, rows) => `<table>${head.join("")}${rows.flat().join("")}</table>`;
  vm.createContext(ctx);
  for (const f of FILES) {
    const p = path.join(root, "questions", lang, f);
    if (!fs.existsSync(p)) { errors.push(`[${lang}] fichier manquant : questions/${lang}/${f}`); continue; }
    try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: p }); }
    catch (e) { errors.push(`[${lang}] ${f} : erreur de syntaxe — ${e.message}`); }
  }
  return ctx.AZ;
}

function checkPortal(err, id, p) {
  if (p === undefined) return;
  if (!p || !Array.isArray(p.path) || !p.path.every(isStr)) return err(id, "portal.path doit être une liste de textes");
  if (!isStr(p.title)) err(id, "portal.title manquant");
  if (p.menu && (!Array.isArray(p.menu) || !p.menu.every(isStr))) err(id, "portal.menu invalide");
  if (p.rows && (!Array.isArray(p.rows) || !p.rows.every(r => Array.isArray(r) && isStr(r[0])))) err(id, "portal.rows invalide");
  const marked = (p.menu || []).some(m => m.startsWith("*")) || (p.rows || []).some(r => r[0].startsWith("*")) || isStr(p.btn);
  if (!marked) err(id, "portal : aucun élément surligné (préfixe *) ni bouton");
}

function validate(lang, AZ) {
  const err = (id, msg) => errors.push(`[${lang}] ${id} : ${msg}`);
  const ids = new Set();
  function checkQuestion(q, where) {
    const id = q.id || `(sans id dans ${where})`;
    if (!isStr(q.id)) err(id, "id manquant");
    else if (ids.has(q.id)) err(id, "id en double");
    else ids.add(q.id);
    if (![1, 2, 3, 4, 5].includes(q.dom)) err(id, "dom doit valoir 1 à 5");
    if (!TYPES.includes(q.type)) { err(id, `type inconnu « ${q.type} »`); return; }
    if (!isStr(q.stem)) err(id, "stem (énoncé) manquant");
    if (!isStr(q.expl)) err(id, "expl (explication) manquante");
    if (q.keep !== undefined && !isStr(q.keep)) err(id, "keep doit être un texte");
    checkPortal(err, id, q.portal);
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
  AZ.questions.forEach(q => checkQuestion(q, "questions"));
  AZ.series.forEach(s => {
    if (!isStr(s.id) || ids.has(s.id)) err(s.id, "id de série manquant ou en double"); else ids.add(s.id);
    if (![1, 2, 3, 4, 5].includes(s.dom)) err(s.id, "dom doit valoir 1 à 5");
    if (!isStr(s.scenario)) err(s.id, "scenario manquant");
    if (!Array.isArray(s.items) || s.items.length < 2) err(s.id, "items : au moins 2 solutions");
    else s.items.forEach((it, i) => {
      if (!isStr(it.solution)) err(s.id, `items[${i}].solution manquante`);
      if (it.ans !== 0 && it.ans !== 1) err(s.id, `items[${i}].ans doit valoir 0 (Oui) ou 1 (Non)`);
      if (!isStr(it.expl)) err(s.id, `items[${i}].expl manquante`);
      checkPortal(err, `${s.id}-${i + 1}`, it.portal);
    });
  });
  AZ.cases.forEach(c => {
    if (!isStr(c.id) || ids.has(c.id)) err(c.id, "id d'étude de cas manquant ou en double"); else ids.add(c.id);
    if (!Array.isArray(c.docs) || !c.docs.length) err(c.id, "docs manquants");
    if (!Array.isArray(c.questions) || !c.questions.length) err(c.id, "questions manquantes");
    else c.questions.forEach(q => checkQuestion(q, c.id));
  });
}

/* Ce qui doit être identique d'une langue à l'autre (structure et bonnes réponses) */
function signature(AZ) {
  const sig = {};
  const qs = q => JSON.stringify({ d: q.dom, t: q.type, ans: q.type === "hotspot" ? undefined : q.ans, pick: q.pick, no: q.opts && q.opts.length,
    rows: q.rows && q.rows.map(r => [r.a, r.o && r.o.length]), tg: q.tgts && q.tgts.map(t => t.a), ns: q.srcs && q.srcs.length,
    seq: q.seq, na: q.acts && q.acts.length, win: q.type === "screen" ? q.win.rows.map(r => [r.k, r.a, (r.o || r.opts || []).length]) : undefined,
    hs: q.type === "hotspot" ? (q.win.nav.flatMap(g => g.items).indexOf(q.ans)) : undefined, nd: (q.docs || []).length });
  AZ.questions.forEach(q => sig[q.id] = qs(q));
  AZ.series.forEach(s => s.items.forEach((it, i) => sig[`${s.id}-${i + 1}`] = JSON.stringify({ d: s.dom, a: it.ans })));
  AZ.cases.forEach(c => { sig[c.id] = String(c.docs.length); c.questions.forEach(q => sig[q.id] = qs(q)); });
  return sig;
}

const banks = {};
for (const l of LANGS) { banks[l] = load(l); validate(l, banks[l]); }
const ref = LANGS[0], refSig = signature(banks[ref]);
for (const l of LANGS.slice(1)) {
  const sig = signature(banks[l]);
  for (const id of Object.keys(refSig)) {
    if (!(id in sig)) errors.push(`[${l}] ${id} : absente (présente en ${ref})`);
    else if (sig[id] !== refSig[id]) errors.push(`[${l}] ${id} : structure ou bonne réponse différente de la version ${ref}`);
  }
  for (const id of Object.keys(sig)) if (!(id in refSig)) errors.push(`[${l}] ${id} : en trop (absente en ${ref})`);
}

/* Bilan */
const AZ = banks[ref];
const count = d => AZ.questions.filter(q => q.dom === d).length;
const caseQ = AZ.cases.reduce((n, c) => n + (c.questions || []).length, 0);
const serQ = AZ.series.reduce((n, s) => n + (s.items || []).length, 0);
const all = [...AZ.questions, ...AZ.cases.flatMap(c => c.questions || [])];
const byType = {};
all.forEach(q => { byType[q.type] = (byType[q.type] || 0) + 1; });
console.log(`Banque AZ-104 (langues : ${LANGS.join(", ")})`);
[1, 2, 3, 4, 5].forEach(d => console.log(`  Domaine ${d} : ${count(d)}`));
console.log(`  Séries Oui/Non : ${AZ.series.length} (${serQ} questions)`);
console.log(`  Études de cas : ${AZ.cases.length} (${caseQ} questions)`);
console.log(`  Total : ${AZ.questions.length + caseQ + serQ} questions`);
console.log("  Par format : " + Object.entries(byType).map(([k, v]) => `${k} ${v}`).join(", "));
const withPortal = all.filter(q => q.portal).length + AZ.series.reduce((n, s) => n + s.items.filter(i => i.portal).length, 0);
const withKeep = all.filter(q => q.keep).length + AZ.series.reduce((n, s) => n + s.items.filter(i => i.keep).length, 0);
console.log(`  Vues du portail : ${withPortal} · « À retenir » : ${withKeep}`);

if (errors.length) {
  console.error(`\n✗ ${errors.length} erreur(s) :`);
  errors.slice(0, 60).forEach(e => console.error("  - " + e));
  if (errors.length > 60) console.error(`  … et ${errors.length - 60} autres`);
  process.exit(1);
}
console.log("\n✓ Aucune erreur");
