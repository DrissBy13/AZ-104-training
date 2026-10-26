/* Examen blanc AZ-104 — moteur d'examen
 * Les questions sont dans le dossier /questions (une banque par domaine,
 * plus les séries Oui/Non et les études de cas).
 */
"use strict";

const REPO = "https://github.com/DrissBy13/AZ-104-training";
const EXAM_MIN = 100, PASS = 700;
const KEY = "az104-training-etat-v1", SEEN_KEY = "az104-training-vus-v1";
const DOMS = {1:"Identités et gouvernance",2:"Stockage",3:"Calcul",4:"Réseau virtuel",5:"Supervision et sauvegarde"};
/* Nombre de questions indépendantes tirées par domaine en mode examen (poids officiels) */
const EXAM_MIX = {1:11,2:8,3:11,4:8,5:7};
const YN = ["Oui","Non"];
const L = "ABCDEFGH";
const PORTAL = "Portail Azure (simulation)";
const SERIE_NOTE = `<p><b>Remarque :</b> cette question fait partie d'une série de questions qui présentent le même scénario. Chaque question de la série contient une solution unique qui peut répondre aux objectifs indiqués. Certaines séries de questions peuvent avoir plusieurs solutions correctes, tandis que d'autres peuvent n'en avoir aucune.</p><p>Après avoir répondu à une question de cette section, vous ne pourrez <b>pas</b> y revenir. Par conséquent, ces questions n'apparaîtront pas dans l'écran de révision.</p>`;

/* ---------- Construction de la banque ---------- */
const ITEMS = {};
AZ.questions.forEach(q => { ITEMS[q.id] = {...q, sec:"main"}; });
AZ.series.forEach(s => s.items.forEach((it,i) => {
  const id = `${s.id}-${i+1}`;
  ITEMS[id] = {id, sec:"yn", dom:s.dom, type:"yn", series:s.id, opts:YN, ans:it.ans, expl:it.expl,
    stem: SERIE_NOTE + s.scenario + it.solution, lead: s.scenario + it.solution};
}));
AZ.cases.forEach(c => c.questions.forEach(q => { ITEMS[q.id] = {...q, sec:"case", docs:c.docs, caseId:c.id, caseTitle:c.title}; }));
const byId = id => ITEMS[id];

/* ---------- Utilitaires ---------- */
let S=null,tick=null,ui={tab:0,pick:null},showT=true,showP=true,resF="all",revF="all";
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip=h=>String(h).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
function store(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function read(k){try{return JSON.parse(localStorage.getItem(k));}catch(e){return null;}}
const save=()=>store(KEY,S);
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const seenMap=()=>read(SEEN_KEY)||{};
/* Tire n éléments en privilégiant ceux vus le moins souvent */
function pickLeastSeen(ids,n){const sm=seenMap();return shuffle(ids).sort((a,b)=>(sm[a]||0)-(sm[b]||0)).slice(0,n);}
const ctrls=q=>q.win.rows.filter(r=>["select","check","radio"].includes(r.k));
const reportLink=q=>`<a class="report" href="${REPO}/issues/new?template=erreur.md&title=${encodeURIComponent("Erreur question "+q.id)}" target="_blank" rel="noopener">Signaler une erreur sur cette question</a>`;

/* ---------- Correction ---------- */
function ideal(q){
  switch(q.type){
    case "single":case "yn":case "multi":case "hotspot":return q.ans;
    case "hot":case "cmd":case "yngrid":return q.rows.map(r=>r.a);
    case "dragdrop":return q.tgts.map(t=>t.a);
    case "order":return q.seq;
    case "screen":return ctrls(q).map(c=>c.a);
  }
}
function curAns(q){
  const a=S.ans[q.id];
  if(q.type==="screen"&&a==null) return ctrls(q).map(c=>c.d!==undefined?c.d:(c.k==="check"?false:null));
  return a;
}
function answered(q,a){
  if(a==null) return false;
  switch(q.type){
    case "multi":return a.length===q.pick;
    case "hot":case "cmd":case "yngrid":case "dragdrop":return a.every(x=>x!=null);
    case "order":return a.length===q.seq.length;
    case "screen":return ctrls(q).every((c,i)=>c.k==="check"||a[i]!=null);
    default:return true;
  }
}
function score(q,a){
  if(a==null) return 0;
  switch(q.type){
    case "single":case "yn":case "hotspot":return a===q.ans?1:0;
    case "multi":{const g=a.filter(x=>q.ans.includes(x)).length,b=a.length-g;return Math.max(0,g-b)/q.ans.length;}
    case "hot":case "cmd":case "yngrid":return q.rows.filter((r,i)=>a[i]===r.a).length/q.rows.length;
    case "dragdrop":return q.tgts.filter((t,i)=>a[i]===t.a).length/q.tgts.length;
    case "order":return a.length===q.seq.length&&a.every((v,i)=>v===q.seq[i])?1:0;
    case "screen":{let n=0,ok=0;ctrls(q).forEach((c,i)=>{if(c.a===null)return;n++;const v=c.k==="check"?!!a[i]:a[i];if(v===c.a)ok++;});return n?ok/n:0;}
  }
  return 0;
}
const scoreOf=id=>score(byId(id),S.ans[id]);

/* ---------- Démarrage d'une session ---------- */
function prepOrders(ids){const o={};ids.forEach(id=>{const q=byId(id);if(q.type==="order")o[id]=shuffle(q.acts.map((_,i)=>i));});return o;}
function startExam(){
  const main=[];
  [1,2,3,4,5].forEach(d=>main.push(...pickLeastSeen(AZ.questions.filter(q=>q.dom===d).map(q=>q.id),EXAM_MIX[d])));
  const sections=[{key:"main",name:"Questions indépendantes",review:true,back:true}],lists={main:shuffle(main)};
  if(AZ.series.length){const s=AZ.series[Math.floor(Math.random()*AZ.series.length)];sections.push({key:"yn",name:"Série de questions",review:false,back:false});lists.yn=s.items.map((_,i)=>`${s.id}-${i+1}`);}
  if(AZ.cases.length){const c=AZ.cases[Math.floor(Math.random()*AZ.cases.length)];sections.push({key:"case",name:`Étude de cas : ${c.title}`,review:true,back:true});lists.case=c.questions.map(q=>q.id);}
  begin("exam",sections,lists,Date.now()+EXAM_MIN*60000);
}
function startPractice(doms,n,withCases){
  let pool=AZ.questions.filter(q=>doms.includes(q.dom)).map(q=>q.id);
  if(withCases) pool=pool.concat(AZ.cases.flatMap(c=>c.questions.filter(q=>doms.includes(q.dom)).map(q=>q.id)));
  const ids=pickLeastSeen(pool,n==="all"?pool.length:+n);
  begin("practice",[{key:"main",name:"Entraînement",review:true,back:true}],{main:ids},null);
}
function begin(mode,sections,lists,deadline){
  const all=Object.values(lists).flat();
  S={mode,view:"secIntro",sec:0,idx:0,sections,lists,acts:prepOrders(all),ans:{},marks:{},checked:{},seen:{},deadline,finished:false};
  ui={tab:0,pick:null};revF="all";resF="all";save();startTimer();render();window.scrollTo(0,0);
}
const SEC=()=>S.sections[S.sec];
const list=()=>S.lists[SEC().key];
function gnum(id){let n=0;for(const s of S.sections){const i=S.lists[s.key].indexOf(id);if(i>=0)return n+i+1;n+=S.lists[s.key].length;}return 0;}
const total=()=>S.sections.reduce((n,s)=>n+S.lists[s.key].length,0);

/* ---------- Chronomètre ---------- */
function startTimer(){
  clearInterval(tick);
  $("#tim").hidden=!S||!S.deadline;
  if(!S||!S.deadline) return;
  const up=()=>{if(!S||S.finished||!S.deadline){clearInterval(tick);return;}
    const ms=Math.max(0,S.deadline-Date.now()),s=Math.floor(ms/1000);
    const t=[Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(v=>String(v).padStart(2,"0")).join(" : ");
    $("#timer").textContent=showT?t:"";$("#tim").classList.toggle("low",s<600);
    if(ms<=0){clearInterval(tick);finish(true);}};
  up();tick=setInterval(up,1000);
}
$("#togT").onclick=e=>{showT=!showT;e.currentTarget.setAttribute("aria-pressed",String(showT));if(S&&!S.finished)startTimer();};
$("#togP").onclick=e=>{showP=!showP;e.currentTarget.setAttribute("aria-pressed",String(showP));$("#progRow").hidden=!showP;};

function modal(html,btns){
  $("#modalBox").innerHTML=html+`<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap">${btns.map((b,i)=>`<button type="button" class="btn ${b.pri?"pri":""}" data-i="${i}">${b.l}</button>`).join("")}</div>`;
  $("#modal").hidden=false;
  $("#modalBox").querySelectorAll("[data-i]").forEach(el=>el.onclick=()=>{$("#modal").hidden=true;const f=btns[+el.dataset.i].on;if(f)f();});
  const p=$("#modalBox").querySelector(".pri");if(p)p.focus();
}
function setHead(title,lbl,pct,rev){
  $("#head").hidden=false;$("#qtitle").textContent=title;
  $("#progLbl").textContent=lbl;$("#progBar").style.width=pct+"%";$("#revBar").classList.toggle("on",!!rev);
}

/* ---------- Rendu ---------- */
function render(){
  if(!S){renderHome();return;}
  if(S.view==="results"){renderResults();return;}
  if(S.view==="secIntro"){renderSecIntro();return;}
  if(S.view==="review"){renderReview();return;}
  renderQuestion();
}

function renderQuestion(){
  const sec=SEC(),id=list()[S.idx],q=byId(id),ck=!!S.checked[id];
  S.seen[id]=true;
  setHead(`Question ${gnum(id)}`,`${sec.name}  (${S.idx+1}/${list().length})`,Math.round((S.idx+1)/list().length*100),false);
  const docs=q.docs||[];
  const tabs=docs.length?`<div class="tabs" role="tablist"><button type="button" role="tab" data-t="0" class="${ui.tab===0?"on":""}">Question</button>${docs.map((d,i)=>`<button type="button" role="tab" data-t="${i+1}" class="${ui.tab===i+1?"on":""}">${d.t}</button>`).join("")}</div>`:"";
  const onDoc=docs.length&&ui.tab>0;
  let body;
  if(onDoc){body=`<div class="qtop">${docs[ui.tab-1].h}</div>`;}
  else{
    const plain=["single","multi","yn"].includes(q.type);
    body=`<div class="qtop">${q.stem}</div>`+(plain?answerUI(q,ck):`<div class="divider"><span>•••••</span></div><div class="zone"><h3>Zone de réponse</h3>${answerUI(q,ck)}</div>`)+feedback(q)+
    `<div class="qtools"><button type="button" class="pillbtn" id="clr" ${(ck||S.ans[id]==null)?"disabled":""}>⟲ Effacer la réponse</button>${sec.review?`<label class="later"><input type="checkbox" id="later" ${S.marks[id]?"checked":""}> Revoir cette question plus tard</label>`:""}<span class="qid">ID ${q.id}</span></div>`;
  }
  $("#main").innerHTML=`<div class="qbox">${tabs}<div class="${docs.length?"tabbody":""}" style="display:flex;flex-direction:column;flex:1">${body}</div></div>`;
  $("#main").querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{ui.tab=+b.dataset.t;ui.pick=null;render();});
  if(!onDoc){
    if(!ck) bind(q);
    const c=$("#clr");if(c)c.onclick=()=>{delete S.ans[id];ui.pick=null;save();render();};
    const lt=$("#later");if(lt)lt.onchange=e=>{S.marks[id]=e.target.checked;save();};
  }
  const last=S.idx===list().length-1,f=$("#foot");f.hidden=false;
  f.innerHTML=`<div class="g">${sec.review?`<button type="button" class="btn" id="rv">Écran de révision</button>`:`<span class="note">Pas de retour possible dans cette section</span>`}</div>
   <div class="g"><button type="button" class="btn" id="chk" ${(ck||!answered(q,curAns(q))||(q.type==="screen"&&S.ans[id]==null))?"disabled":""}>Vérifier ma réponse</button><button type="button" class="btn" id="prev" ${(!sec.back||S.idx===0)?"disabled":""}>‹ Précédent</button><button type="button" class="btn pri" id="next">${last?(sec.review?"Révision ›":"Terminer la section ›"):"Suivant ›"}</button></div>`;
  const rv=$("#rv");if(rv)rv.onclick=()=>{S.view="review";save();render();window.scrollTo(0,0);};
  $("#chk").onclick=()=>{S.checked[id]=true;ui.tab=0;ui.pick=null;save();render();};
  $("#prev").onclick=()=>{S.idx--;ui={tab:0,pick:null};save();render();window.scrollTo(0,0);};
  $("#next").onclick=()=>{
    if(!sec.back&&S.ans[id]==null){modal(`<h1 style="font-size:19px">Question sans réponse</h1><p>Vous ne pourrez pas revenir à cette question. Continuer sans répondre ?</p>`,[{l:"Annuler"},{l:"Continuer",pri:true,on:goNext}]);return;}
    goNext();
  };
}
function goNext(){
  ui={tab:0,pick:null};
  if(S.idx<list().length-1){S.idx++;save();render();window.scrollTo(0,0);return;}
  if(SEC().review){S.view="review";save();render();window.scrollTo(0,0);return;}
  endSection();
}
function endSection(){
  if(S.sec===S.sections.length-1){finish(false);return;}
  S.sec++;S.idx=0;S.view="secIntro";ui={tab:0,pick:null};revF="all";save();render();window.scrollTo(0,0);
}

function isGood(q,i){return Array.isArray(q.ans)?q.ans.includes(i):q.ans===i;}
function mark(ok,txt){return ok?`<span class="mk-ok">✓</span>`:`<span class="mk-bad">✗ ${txt}</span>`;}
function sel(i,opts,val,dis,extra){return `<select class="sel" data-i="${i}" ${dis?"disabled":""} ${extra||""}><option value=""></option>${opts.map((o,j)=>`<option value="${j}" ${val===j?"selected":""}>${o}</option>`).join("")}</select>`;}

function answerUI(q,ck){
  const a=curAns(q);
  switch(q.type){
  case "single":case "yn":case "multi":{
    const multi=q.type==="multi",s=multi?(a||[]):a;
    return `<div class="opts">${q.opts.map((o,i)=>{const on=multi?s.includes(i):s===i;
      const cls=ck?(isGood(q,i)?"good":on?"wrong":""):"";
      const tag=ck?(isGood(q,i)?"<small>✓ Bonne réponse</small>":on?"<small>Cette réponse est incorrecte</small>":""):"";
      return `<label class="opt ${cls}"><input type="${multi?"checkbox":"radio"}" name="o" value="${i}" ${on?"checked":""} ${ck?"disabled":""}><span class="lt">${L[i]}.</span><span class="tx">${o}${tag}</span></label>`;}).join("")}</div>`;}
  case "hot":{const s=a||q.rows.map(()=>null);
    return `<div class="hotrows">${q.rows.map((r,i)=>`<label for="h${i}">${r.l}</label><span>${sel(i,r.o,s[i],ck,`id="h${i}"`)}${ck?mark(s[i]===r.a,r.o[r.a]):""}</span>`).join("")}</div>`;}
  case "cmd":{const s=a||q.rows.map(()=>null);
    return `<div class="cmd">${q.tpl.replace(/\{(\d)\}/g,(m,n)=>{const i=+n,r=q.rows[i];return sel(i,r.o,s[i],ck,`aria-label="${esc(r.l)}"`)+(ck?mark(s[i]===r.a,r.o[r.a]):"");})}</div>`;}
  case "yngrid":{const s=a||q.rows.map(()=>null);
    return `<div class="tw"><table class="yng"><tr><th></th><th>Oui</th><th>Non</th></tr>${q.rows.map((r,i)=>`<tr><td>${r.l}${ck?mark(s[i]===r.a,"Bonne réponse : "+YN[r.a]):""}</td>${[0,1].map(v=>`<td><input type="radio" name="g${i}" data-i="${i}" value="${v}" ${s[i]===v?"checked":""} ${ck?"disabled":""} aria-label="${YN[v]}"></td>`).join("")}</tr>`).join("")}</table></div>`;}
  case "dragdrop":{const s=a||q.tgts.map(()=>null);
    return `<div class="dd"><div><h4>${q.srcLabel}</h4><div class="srcs">${q.srcs.map((t,i)=>`<div class="src ${ui.pick===i?"picked":""} ${ck?"lock":""}" ${ck?"":`draggable="true" tabindex="0" role="button"`} data-s="${i}">${t}</div>`).join("")}</div><p class="hint" style="margin-top:12px">Faites glisser une valeur vers une zone, ou cliquez sur une valeur puis sur une zone. Cliquez sur une zone remplie pour la vider.</p></div><div class="vsep"></div>
    <div><div class="tgts"><span>${q.tgtHead[0]}</span><span>${q.tgtHead[1]}</span>${q.tgts.map((t,i)=>{const v=s[i];const st=ck?(v===t.a?"good":"bad"):"";
      return `<span>${t.l}</span><div class="drop ${v!=null?"filled":""} ${st}" data-z="${i}" ${ck?"":`tabindex="0" role="button"`}>${v!=null?q.srcs[v]:"Zone où déposer les réponses"}${ck&&v!==t.a?`<span class="mk-bad">→ ${q.srcs[t.a]}</span>`:""}</div>`;}).join("")}</div></div></div>`;}
  case "order":{const s=a||[];const left=S.acts[q.id].filter(i=>!s.includes(i));
    const slots=[];for(let p=0;p<q.seq.length;p++){const it=s[p];
      slots.push(it!=null?`<div class="aitem" ${ck?"":`draggable="true"`} data-p="${p}"><span class="n">${p+1}</span><span class="tx">${q.acts[it]}</span>${ck?"":`<button type="button" data-u="${p}" ${p===0?"disabled":""} aria-label="Monter">↑</button><button type="button" data-d="${p}" ${p===s.length-1?"disabled":""} aria-label="Descendre">↓</button><button type="button" data-x="${p}" aria-label="Retirer">✕</button>`}</div>`:`<div class="slot"><span class="n">${p+1}</span></div>`);}
    return `<div class="ord"><div><h4>Actions</h4><div class="alist" id="aleft">${left.map(i=>`<div class="aitem" ${ck?"":`draggable="true" tabindex="0" role="button"`} data-a="${i}"><span class="tx">${q.acts[i]}</span></div>`).join("")}</div><p class="hint" style="margin-top:10px">Faites glisser les actions vers la zone de réponse, ou cliquez sur une action pour l'ajouter. Utilisez ↑ ↓ pour réordonner.</p></div><div class="vsep"></div><div><h4>&nbsp;</h4><div class="alist ans" id="aright">${slots.join("")}</div></div></div>`;}
  case "hotspot":{const s=a;
    return `<div class="win"><div class="wt"><span>${PORTAL}</span><span>${q.win.title}</span></div><div class="wb"><div class="nav">${q.win.nav.map(g=>`${g.g?`<div class="grp">${g.g}</div>`:""}${g.items.map(it=>{let c=s===it?"on":"";if(ck)c=it===q.ans?"good":(s===it?"bad":"");return `<button type="button" class="${c}" data-h="${esc(it)}" ${ck?"disabled":""}>${it}${ck&&it===q.ans?" ✓":""}</button>`;}).join("")}`).join("")}</div><div class="pane"><h5>${q.win.title.split(" | ")[0]}</h5><p class="sub">${s?`Sélection : <b>${s}</b>`:"Sélectionnez un élément dans le menu de gauche."}</p></div></div></div>`;}
  case "screen":{const s=a;let ci=-1;
    const rows=q.win.rows.map(r=>{
      if(r.k==="head")return `<div class="fh">${r.t}</div>`;
      if(r.k==="text")return `<div class="fr"><span>${r.l}</span><span class="ft">${r.t}</span></div>`;
      ci++;const i=ci,v=s[i];
      const m=ck&&r.a!==null?mark((r.k==="check"?!!v:v)===r.a,r.k==="check"?(r.a?"À cocher":"À décocher"):"Bonne réponse : "+(r.k==="select"?r.o[r.a]:r.opts[r.a])):"";
      if(r.k==="select")return `<div class="fr"><span>${r.l}</span><span>${sel(i,r.o,v,ck,`data-c="${i}" aria-label="${esc(r.l)}"`)}${m}</span></div>`;
      if(r.k==="check")return `<label class="chk"><input type="checkbox" data-c="${i}" ${v?"checked":""} ${ck?"disabled":""}><span>${r.l}${m}</span></label>`;
      return `<div class="fr" style="align-items:start"><span>${r.l||""}</span><span>${r.opts.map((o,j)=>`<label class="rad"><input type="radio" name="sr${i}" data-c="${i}" value="${j}" ${v===j?"checked":""} ${ck?"disabled":""}><span>${o}</span></label>`).join("")}${m}</span></div>`;
    }).join("");
    return `<div class="win single"><div class="wt"><span>${PORTAL}</span><span>${q.win.sub||""}</span></div><div class="wb"><div class="pane"><h5>${q.win.title}</h5><p class="sub">${q.win.sub||""}</p><div class="form">${rows}</div></div></div></div>`;}
  }
  return "";
}

function bind(q){
  const m=$("#main"),id=q.id;
  const setA=v=>{S.ans[id]=v;save();render();};
  switch(q.type){
  case "single":case "yn":m.querySelectorAll('input[name=o]').forEach(el=>el.onchange=()=>setA(+el.value));break;
  case "multi":m.querySelectorAll('input[name=o]').forEach(el=>el.onchange=()=>{let s=(S.ans[id]||[]).slice();const v=+el.value;
    if(el.checked){if(s.length>=q.pick){el.checked=false;modal(`<p>Vous ne pouvez sélectionner que ${q.pick} réponses. Désélectionnez une réponse avant d'en choisir une autre.</p>`,[{l:"OK",pri:true}]);return;}s.push(v);}else s=s.filter(x=>x!==v);
    setA(s.length?s.sort():null);});break;
  case "hot":case "cmd":m.querySelectorAll("select.sel").forEach(el=>el.onchange=()=>{const s=(S.ans[id]||q.rows.map(()=>null)).slice();s[+el.dataset.i]=el.value===""?null:+el.value;setA(s.every(x=>x==null)?null:s);});break;
  case "yngrid":m.querySelectorAll(".yng input[type=radio]").forEach(el=>el.onchange=()=>{const s=(S.ans[id]||q.rows.map(()=>null)).slice();s[+el.dataset.i]=+el.value;setA(s);});break;
  case "hotspot":m.querySelectorAll("[data-h]").forEach(el=>el.onclick=()=>setA(el.dataset.h));break;
  case "screen":m.querySelectorAll("[data-c]").forEach(el=>{el.onchange=()=>{const s=curAns(q).slice();const i=+el.dataset.c;
      if(el.type==="checkbox")s[i]=el.checked;else if(el.type==="radio")s[i]=+el.value;else s[i]=el.value===""?null:+el.value;setA(s);};});break;
  case "dragdrop":{
    const put=(z,src)=>{const s=(S.ans[id]||q.tgts.map(()=>null)).slice();s[z]=src;ui.pick=null;setA(s.every(x=>x==null)?null:s);};
    m.querySelectorAll(".src").forEach(el=>{const i=+el.dataset.s;
      el.ondragstart=e=>{e.dataTransfer.setData("text/plain","s:"+i);e.dataTransfer.effectAllowed="copy";};
      const pick=()=>{ui.pick=ui.pick===i?null:i;render();};
      el.onclick=pick;el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();pick();}};});
    m.querySelectorAll(".drop").forEach(el=>{const z=+el.dataset.z;
      el.ondragover=e=>{e.preventDefault();el.classList.add("over");};
      el.ondragleave=()=>el.classList.remove("over");
      el.ondrop=e=>{e.preventDefault();const d=e.dataTransfer.getData("text/plain");if(d.startsWith("s:"))put(z,+d.slice(2));};
      const act=()=>{const cur=(S.ans[id]||[])[z];if(ui.pick!=null)put(z,ui.pick);else if(cur!=null)put(z,null);};
      el.onclick=act;el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();act();}};});
    break;}
  case "order":{
    const get=()=>(S.ans[id]||[]).slice();
    const put=s=>setA(s.length?s:null);
    const add=(i,pos)=>{const s=get();if(s.includes(i)||s.length>=q.seq.length)return;if(pos==null||pos>s.length)s.push(i);else s.splice(pos,0,i);put(s);};
    m.querySelectorAll("#aleft .aitem").forEach(el=>{const i=+el.dataset.a;
      el.ondragstart=e=>e.dataTransfer.setData("text/plain","a:"+i);
      el.onclick=()=>add(i);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();add(i);}};});
    m.querySelectorAll("#aright .aitem").forEach(el=>{const p=+el.dataset.p;el.ondragstart=e=>e.dataTransfer.setData("text/plain","p:"+p);});
    const R=$("#aright"),Lf=$("#aleft");
    R.ondragover=e=>{e.preventDefault();R.classList.add("over");};R.ondragleave=()=>R.classList.remove("over");
    R.ondrop=e=>{e.preventDefault();const d=e.dataTransfer.getData("text/plain");const tgt=e.target.closest("[data-p]");const pos=tgt?+tgt.dataset.p:null;
      if(d.startsWith("a:"))add(+d.slice(2),pos);
      else if(d.startsWith("p:")){const s=get();const from=+d.slice(2);const it=s.splice(from,1)[0];s.splice(pos==null?s.length:pos,0,it);put(s);}};
    Lf.ondragover=e=>e.preventDefault();
    Lf.ondrop=e=>{e.preventDefault();const d=e.dataTransfer.getData("text/plain");if(d.startsWith("p:")){const s=get();s.splice(+d.slice(2),1);put(s);}};
    m.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>{const s=get(),p=+b.dataset.u;[s[p-1],s[p]]=[s[p],s[p-1]];put(s);});
    m.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{const s=get(),p=+b.dataset.d;[s[p+1],s[p]]=[s[p],s[p+1]];put(s);});
    m.querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{const s=get();s.splice(+b.dataset.x,1);put(s);});
    break;}
  }
}

function feedback(q){
  if(!S.checked[q.id]) return "";
  const sc=score(q,curAns(q)),st=sc>=1?"":sc>0?"part":"bad";
  const v=sc>=1?"Bonne réponse.":sc>0?"Réponse partiellement correcte.":"Cette réponse est incorrecte.";
  const showIdeal=["order","dragdrop","screen","hot","cmd"].includes(q.type)&&sc<1;
  return `<div class="fb ${st}" role="status"><b>${v}</b>${showIdeal?`<div class="ideal"><b style="display:block;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)">Réponse attendue</b>${descr(q,ideal(q),true)}</div>`:""}<div>${q.expl}</div><p style="margin:10px 0 0">${reportLink(q)}</p></div>`;
}

function descr(q,a,isIdeal){
  const none="<i>Pas de réponse</i>";
  if(a==null) return none;
  switch(q.type){
    case "single":case "yn":return `${L[a]}. ${q.opts[a]}`;
    case "multi":return a.map(i=>`${L[i]}. ${q.opts[i]}`).join("<br>");
    case "hotspot":return a;
    case "hot":case "cmd":return q.rows.map((r,i)=>`${strip(r.l)} <b>${a[i]==null?"—":r.o[a[i]]}</b>`).join("<br>");
    case "yngrid":return q.rows.map((r,i)=>`${r.l} <b>${a[i]==null?"—":YN[a[i]]}</b>`).join("<br>");
    case "dragdrop":return q.tgts.map((t,i)=>`${t.l} → <b>${a[i]==null?"—":q.srcs[a[i]]}</b>`).join("<br>");
    case "order":return a.length?a.map((it,i)=>`${i+1}. ${q.acts[it]}`).join("<br>"):none;
    case "screen":return ctrls(q).map((c,i)=>{if(isIdeal&&c.a===null)return "";const v=a[i];const lab=c.l||c.name||"Option";
      const val=c.k==="check"?(v?"Coché":"Non coché"):(v==null?"—":(c.k==="select"?c.o[v]:c.opts[v]));return `${lab} : <b>${val}</b>`;}).filter(Boolean).join("<br>");
  }
  return none;
}

/* ---------- Écrans ---------- */
function renderSecIntro(){
  const sec=SEC(),n=list().length;
  setHead(sec.name,`${sec.name}  (0/${n})`,0,false);
  const txt={
    main:S.mode==="practice"
      ?`<p>Cette session d'entraînement contient ${n} questions, sans limite de temps. Utilisez <b>Vérifier ma réponse</b> pour voir la correction de chaque question.</p>`
      :`<p>Cette section contient ${n} questions indépendantes. Vous pouvez passer d'une question à l'autre, cocher « Revoir cette question plus tard » et revenir sur vos réponses depuis l'écran de révision, tant que la section n'est pas terminée.</p><p>Elle contient plusieurs types de questions : choix unique ou multiple, glisser-déplacer, réorganiser l'ordre de la liste, écran actif, zone réactive, listes déroulantes, et des questions avec des onglets Document.</p>`,
    yn:`<p>Cette section contient une série de ${n} questions qui présentent le même scénario, chacune avec une solution différente.</p><p>Après avoir répondu à une question de cette section, vous ne pourrez <b>pas</b> y revenir. Ces questions n'apparaissent pas dans l'écran de révision.</p>`,
    case:`<p>Cette section contient une étude de cas suivie de ${n} questions.</p><p>Pour afficher les informations de l'étude de cas, utilisez les onglets en haut de chaque question. Revenez à l'onglet Question pour répondre.</p><p>Vous pouvez revenir aux questions de l'étude de cas jusqu'à ce que vous terminiez la section.</p>`}[sec.key];
  $("#main").innerHTML=`<div class="panel"><p class="note" style="margin:0 0 6px;text-transform:uppercase;letter-spacing:.06em">Section ${S.sec+1} sur ${S.sections.length}</p><h1>${sec.name}</h1>${txt}</div>`;
  const f=$("#foot");f.hidden=false;f.innerHTML=`<div class="g"><button type="button" class="btn" id="quit">Abandonner</button></div><div class="g"><button type="button" class="btn pri" id="go">Commencer la section ›</button></div>`;
  $("#go").onclick=()=>{S.view="q";S.idx=0;ui={tab:0,pick:null};save();render();};
  $("#quit").onclick=confirmQuit;
}
function confirmQuit(){modal(`<h1 style="font-size:19px">Abandonner la session ?</h1><p>Vos réponses de cette session seront perdues.</p>`,[{l:"Annuler"},{l:"Abandonner",pri:true,on:()=>{S=null;store(KEY,null);clearInterval(tick);render();}}]);}

function renderReview(){
  const sec=SEC(),l=list();
  setHead("Écran de révision",`${sec.name}  (${l.length}/${l.length})`,100,true);
  const stat=id=>{const q=byId(id);if(answered(q,curAns(q))&&!(q.type==="screen"&&S.ans[id]==null))return ["c","Complète"];if(S.ans[id]!=null)return ["i","Incomplète"];return S.seen[id]?["i","Non répondue"]:["n","Non vue"];};
  const rows=l.map((id,i)=>({id,i,st:stat(id)})).filter(r=>revF==="all"||(revF==="inc"&&r.st[0]!=="c")||(revF==="mk"&&S.marks[r.id]));
  const inc=l.filter(id=>stat(id)[0]!=="c").length,mk=l.filter(id=>S.marks[id]).length;
  $("#main").innerHTML=`<div class="panel"><h1>Écran de révision</h1><p class="lead">${sec.name} : ${l.length} questions, ${inc} incomplète${inc>1?"s":""} ou non répondue${inc>1?"s":""}, ${mk} à revoir. Cliquez sur une question pour y revenir.</p>
  <div class="flt"><button type="button" class="btn ${revF==="all"?"on":""}" data-f="all">Toutes (${l.length})</button><button type="button" class="btn ${revF==="inc"?"on":""}" data-f="inc">Incomplètes (${inc})</button><button type="button" class="btn ${revF==="mk"?"on":""}" data-f="mk">À revoir (${mk})</button></div>
  <div class="tw"><table class="rtable"><tr><th>Question</th><th>État</th><th>À revoir</th><th>Vérifiée</th></tr>${rows.map(r=>`<tr class="go" data-i="${r.i}" tabindex="0"><td>Question ${gnum(r.id)}</td><td><span class="st ${r.st[0]}">${r.st[1]}</span></td><td>${S.marks[r.id]?"⚑ Oui":""}</td><td>${S.checked[r.id]?"Oui":""}</td></tr>`).join("")}</table></div>
  <p class="note">Une fois la section terminée, vous ne pourrez plus revenir à ses questions.</p></div>`;
  $("#main").querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{revF=b.dataset.f;render();});
  $("#main").querySelectorAll("tr.go").forEach(t=>{const go=()=>{S.idx=+t.dataset.i;S.view="q";ui={tab:0,pick:null};save();render();window.scrollTo(0,0);};t.onclick=go;t.onkeydown=e=>{if(e.key==="Enter")go();};});
  const isLast=S.sec===S.sections.length-1,f=$("#foot");f.hidden=false;
  f.innerHTML=`<div class="g"><button type="button" class="btn" id="back">‹ Revenir à la question</button></div><div class="g"><button type="button" class="btn pri" id="end">${isLast?(S.mode==="practice"?"Terminer l'entraînement":"Terminer l'examen"):"Terminer la révision"}</button></div>`;
  $("#back").onclick=()=>{S.view="q";save();render();};
  $("#end").onclick=()=>modal(`<h1 style="font-size:19px">${isLast?"Terminer la session ?":"Terminer cette section ?"}</h1><p>${inc?`Il reste ${inc} question${inc>1?"s":""} incomplète${inc>1?"s":""} ou non répondue${inc>1?"s":""}. `:""}Vous ne pourrez plus revenir à cette section.</p>`,[{l:"Annuler"},{l:"Terminer",pri:true,on:endSection}]);
}

function renderHome(){
  $("#head").hidden=true;
  const prev=read(KEY),sm=seenMap();
  const nQ=AZ.questions.length,nCase=AZ.cases.reduce((n,c)=>n+c.questions.length,0),nSer=AZ.series.reduce((n,s)=>n+s.items.length,0);
  const per=d=>AZ.questions.filter(q=>q.dom===d).length;
  const seen=Object.keys(ITEMS).filter(id=>sm[id]).length;
  $("#main").innerHTML=`<div class="panel"><p class="note" style="margin:0 0 6px;text-transform:uppercase;letter-spacing:.06em">Projet open source · non affilié à Microsoft</p><h1>Examen blanc AZ-104 : Microsoft Azure Administrator</h1>
  <p class="lead">Entraînez-vous en français, dans une interface qui reproduit l'examen réel : glisser-déplacer, écrans actifs, zones réactives, séries Oui/Non et études de cas. Les questions sont tirées au hasard dans la banque, en privilégiant celles que vous n'avez pas encore vues.</p>
  <div class="bankbar"><span><b>${nQ+nCase+nSer}</b> questions dans la banque</span>${[1,2,3,4,5].map(d=>`<span>${DOMS[d]} : ${per(d)}</span>`).join("")}<span>Séries : ${AZ.series.length}</span><span>Études de cas : ${AZ.cases.length}</span><span>Déjà vues : ${seen}</span></div>
  <div class="modes">
    <section class="mode"><h2>Examen blanc</h2><p>Environ ${Object.values(EXAM_MIX).reduce((a,b)=>a+b,0)} questions indépendantes réparties selon les poids officiels, une série Oui/Non et une étude de cas. ${EXAM_MIN} minutes, score sur 1 000, réussite à ${PASS}.</p><button type="button" class="btn pri" id="exam">Commencer l'examen ›</button></section>
    <section class="mode"><h2>Entraînement</h2><p>Choisissez les domaines et le nombre de questions. Pas de chronomètre.</p>
      <div class="opts2">${[1,2,3,4,5].map(d=>`<label><input type="checkbox" class="pd" value="${d}" checked> ${DOMS[d]}</label>`).join("")}
      <label><input type="checkbox" id="pcase"> Inclure les questions d'études de cas</label>
      <label>Nombre de questions <select class="sel" id="pn"><option>10</option><option selected>20</option><option>40</option><option value="all">Toutes</option></select></label></div>
      <button type="button" class="btn pri" id="prac">Commencer l'entraînement ›</button></section>
  </div>
  <p class="note">Le bouton <b>Vérifier ma réponse</b> affiche la correction d'une question (il n'existe pas à l'examen réel). Votre progression est gardée dans ce navigateur. Une erreur dans une question ? <a href="${REPO}/issues/new?template=erreur.md" target="_blank" rel="noopener">Signalez-la sur GitHub</a>.</p>
  <p class="note"><button type="button" class="btn" id="reset" style="padding:3px 10px;font-size:12px">Réinitialiser l'historique des questions vues</button></p></div>`;
  const f=$("#foot");f.hidden=false;
  f.innerHTML=`<div class="g">${prev&&!prev.finished?`<button type="button" class="btn" id="resume">Reprendre la session en cours</button>`:""}${prev&&prev.finished?`<button type="button" class="btn" id="last">Voir mes derniers résultats</button>`:""}</div><div class="g"><a class="btn" href="${REPO}" target="_blank" rel="noopener" style="text-decoration:none">Projet sur GitHub</a></div>`;
  const guard=fn=>()=>{if(prev&&!prev.finished)modal(`<h1 style="font-size:19px">Commencer une nouvelle session ?</h1><p>Une session est en cours. En commencer une nouvelle efface ses réponses.</p>`,[{l:"Annuler"},{l:"Continuer",pri:true,on:fn}]);else fn();};
  $("#exam").onclick=guard(startExam);
  $("#prac").onclick=()=>{const doms=[...document.querySelectorAll(".pd:checked")].map(e=>+e.value);
    if(!doms.length){modal(`<p>Sélectionnez au moins un domaine.</p>`,[{l:"OK",pri:true}]);return;}
    guard(()=>startPractice(doms,$("#pn").value,$("#pcase").checked))();};
  $("#reset").onclick=()=>modal(`<p>Effacer l'historique des questions déjà vues ? Le tirage repartira de zéro.</p>`,[{l:"Annuler"},{l:"Effacer",pri:true,on:()=>{store(SEEN_KEY,{});render();}}]);
  const valid=p=>p&&p.lists&&Object.values(p.lists).flat().every(id=>ITEMS[id]);
  const r=$("#resume");if(r)r.onclick=()=>{if(!valid(prev)){modal(`<p>Cette session utilise des questions qui n'existent plus dans la banque. Commencez une nouvelle session.</p>`,[{l:"OK",pri:true}]);return;}S=prev;startTimer();render();};
  const ls=$("#last");if(ls)ls.onclick=()=>{if(!valid(prev))return;S=prev;render();};
}

function finish(timeout){
  S.finished=true;S.view="results";S.timeout=!!timeout;
  const sm=seenMap();Object.values(S.lists).flat().forEach(id=>{if(S.seen[id])sm[id]=(sm[id]||0)+1;});store(SEEN_KEY,sm);
  save();clearInterval(tick);render();window.scrollTo(0,0);
}

function renderResults(){
  $("#head").hidden=true;
  const all=S.sections.flatMap(s=>S.lists[s.key]);let pts=0;const dom={1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]};
  const rows=all.map(id=>{const q=byId(id),sc=(q.type==="screen"&&S.ans[id]==null)?0:scoreOf(id);pts+=sc;dom[q.dom][0]+=sc;dom[q.dom][1]++;return {q,sc};});
  const scr=Math.round(pts/all.length*1000),ok=scr>=PASS,nW=rows.filter(r=>r.sc<1).length;
  const filt=rows.filter(r=>resF==="all"||(resF==="w"&&r.sc<1)||(resF==="m"&&S.marks[r.q.id]));
  $("#main").innerHTML=`<div class="panel" style="margin-bottom:16px"><p class="note" style="margin:0 0 8px;text-transform:uppercase;letter-spacing:.06em">${S.timeout?"Temps écoulé":(S.mode==="practice"?"Entraînement terminé":"Examen terminé")}</p>
  <div class="score"><div class="big">${scr}<small> / 1 000</small></div><div>${S.mode==="exam"?`<span class="verdict ${ok?"ok":"bad"}">${ok?"Réussi":"Non réussi"}</span>`:""}<p class="note" style="margin:8px 0 0">${S.mode==="exam"?`Score de réussite : ${PASS}. `:""}${pts.toFixed(1).replace(".",",")} points sur ${all.length}.</p></div></div>
  <h2>Résultats par domaine</h2><div class="doms">${[1,2,3,4,5].filter(d=>dom[d][1]).map(d=>{const p=Math.round(dom[d][0]/dom[d][1]*100);return `<div class="dom"><span>${DOMS[d]} (${dom[d][1]})</span><span class="bar"><i class="${p<70?"low":""}" style="width:${p}%"></i></span><span class="pct">${p} %</span></div>`;}).join("")}</div>
  <p class="note">Score estimé, proportionnel aux points obtenus ; Microsoft utilise une échelle propre à chaque examen. Les questions à plusieurs éléments donnent des points partiels.</p></div>
  <div class="panel"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px"><h2 style="margin:0">Correction détaillée</h2><div class="flt"><button type="button" class="btn ${resF==="all"?"on":""}" data-f="all">Toutes (${rows.length})</button><button type="button" class="btn ${resF==="w"?"on":""}" data-f="w">Erreurs (${nW})</button><button type="button" class="btn ${resF==="m"?"on":""}" data-f="m">À revoir</button></div></div>
  ${filt.length?filt.map(({q,sc})=>{const st=sc>=1?["c","Juste"]:sc>0?["part","Partiel"]:["bad","Faux"];const stem=q.lead||q.stem;
    return `<details class="res"><summary><span class="st ${st[0]}">${st[1]}</span><span class="qt">${gnum(q.id)}. ${esc(strip(stem).slice(0,150))}…</span><span class="meta">${DOMS[q.dom]} · ${q.id}</span></summary><div class="body">${(q.docs||[]).map(d=>`<details style="margin-bottom:8px"><summary class="note" style="cursor:pointer">Document : ${d.t}</summary><div class="qtop" style="padding:10px 0">${d.h}</div></details>`).join("")}<div class="qtop" style="padding:0">${stem}</div><div class="cmp"><div><b class="k">Votre réponse</b>${(q.type==="screen"&&S.ans[q.id]==null)?"<i>Pas de réponse</i>":descr(q,S.ans[q.id])}</div><div class="g"><b class="k">Bonne réponse</b>${descr(q,ideal(q),true)}</div></div><div>${q.expl}</div><p style="margin:10px 0 0">${reportLink(q)}</p></div></details>`;}).join(""):`<p class="note">Aucune question dans ce filtre.</p>`}</div>`;
  $("#main").querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{resF=b.dataset.f;render();});
  const f=$("#foot");f.hidden=false;
  f.innerHTML=`<div class="g"><button type="button" class="btn" id="home">Accueil</button></div><div class="g"><button type="button" class="btn pri" id="again">${S.mode==="practice"?"Nouvel entraînement":"Nouvel examen blanc"}</button></div>`;
  $("#home").onclick=()=>{S=null;render();};
  $("#again").onclick=()=>{if(S.mode==="practice"){S=null;render();}else startExam();};
}

render();
