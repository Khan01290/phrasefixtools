/* ============================================================
   PhraseFixTools — New Tools (Encode/Decode + Text Analysis)
   Independent from app.js. First tool area visible via HTML.
   JS only handles tab switching + tool logic.
   ============================================================ */
(function () {
'use strict';

/* ── MORSE CODE ─────────────────────────────────────────────── */
const MORSE = {
  A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',
  K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',
  U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
  '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',
  '.':'.-.-.-',',':'--..--','?':'..--..','/':'-..-.','!':'-.-.--',' ':' '
};
const MORSE_REV = {};
Object.keys(MORSE).forEach(k => { if(k!==' ') MORSE_REV[MORSE[k]] = k; });

/* ── SENTIMENT WORD LISTS ───────────────────────────────────── */
const POS = new Set(['good','great','excellent','amazing','wonderful','fantastic','awesome','love','best','happy','joy','perfect','beautiful','outstanding','superb','positive','nice','pleasant','enjoy','glad','success','helpful','useful','easy','fast','clear','powerful','strong','better','improve','appreciate','grateful','impressive','fun','exciting']);
const NEG = new Set(['bad','terrible','awful','horrible','hate','worst','sad','angry','poor','ugly','slow','useless','hard','difficult','confusing','wrong','broken','fail','error','problem','issue','crash','disappointing','frustrated','annoying','waste','boring','stupid','nasty','inferior','weak','painful','miserable','unhappy','depressed','upset','worried','anxious','fear','scared','dreadful']);

/* ── LANGUAGE DETECTION WORDS ──────────────────────────────── */
const LANG_WORDS = {
  'English':    ['the','and','that','have','for','not','with','you','this','but'],
  'Spanish':    ['que','de','no','la','el','es','y','en','un','por'],
  'French':     ['le','de','un','et','à','il','je','son','que','ce'],
  'German':     ['der','die','und','in','den','von','zu','das','mit','nicht'],
  'Italian':    ['di','e','il','che','non','la','un','a','per','in'],
  'Portuguese': ['de','a','o','que','e','do','da','em','um','para'],
  'Dutch':      ['de','en','van','het','een','in','is','dat','op','te'],
  'Turkish':    ['bir','bu','da','de','ve','ne','ben','ile','için','var']
};

/* ── SYLLABLE COUNTER ───────────────────────────────────────── */
function syllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g,'');
  if (!word.length) return 0;
  if (word.length <= 2) return 1;
  word = word.replace(/(?:[^laeiouy]es|[^laeiouy]ed|[^laeiouy]e)$/,'');
  word = word.replace(/^y/,'');
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

/* ── TEXT DIFF ──────────────────────────────────────────────── */
function diffLines(a, b) {
  const A = a.split('\n'), B = b.split('\n');
  const m = A.length, n = B.length;
  const dp = Array.from({length:m+1}, ()=>new Array(n+1).fill(0));
  for (let i=1;i<=m;i++) for (let j=1;j<=n;j++)
    dp[i][j] = A[i-1]===B[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j],dp[i][j-1]);
  const out=[]; let i=m,j=n;
  while(i>0||j>0){
    if(i>0&&j>0&&A[i-1]===B[j-1]){out.unshift({t:'same',v:A[i-1]});i--;j--;}
    else if(j>0&&(i===0||dp[i][j-1]>=dp[i-1][j])){out.unshift({t:'add',v:B[j-1]});j--;}
    else{out.unshift({t:'del',v:A[i-1]});i--;}
  }
  return out;
}

/* ── COPY HELPER ────────────────────────────────────────────── */
function cp(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const txt = el.tagName==='TEXTAREA'||el.tagName==='INPUT' ? el.value : el.innerText;
  navigator.clipboard.writeText(txt).catch(()=>{});
}

/* ── WIRE CLEAR+COPY FOR IO TOOLS ──────────────────────────── */
function wire(toolId) {
  const btnClear = document.getElementById('btn-clear-'+toolId);
  const btnCopy  = document.getElementById('btn-copy-'+toolId);
  if (btnClear) btnClear.onclick = () => {
    const inp = document.getElementById('in-'+toolId);
    const out = document.getElementById('out-'+toolId);
    if(inp) inp.value=''; if(out) out.value='';
  };
  if (btnCopy) btnCopy.onclick = () => cp('out-'+toolId);
}

/* ============================================================
   ENCODE / DECODE TOOLS
   ============================================================ */
function initEncodeTools() {

  /* Hex → Text */
  const btnH2T = document.getElementById('btn-hex-to-text');
  if (btnH2T) btnH2T.onclick = () => {
    try {
      const clean = document.getElementById('in-hex-to-text').value.replace(/\s+/g,'');
      if (!/^[0-9a-fA-F]*$/.test(clean)) throw new Error('Invalid hex input');
      document.getElementById('out-hex-to-text').value =
        clean.match(/.{1,2}/g).map(b=>String.fromCharCode(parseInt(b,16))).join('');
    } catch(e) { document.getElementById('out-hex-to-text').value='❌ '+e.message; }
  };
  wire('hex-to-text');

  /* Text → Hex */
  const btnT2H = document.getElementById('btn-text-to-hex');
  if (btnT2H) btnT2H.onclick = () => {
    document.getElementById('out-text-to-hex').value =
      document.getElementById('in-text-to-hex').value
        .split('').map(c=>c.charCodeAt(0).toString(16).padStart(2,'0').toUpperCase()).join(' ');
  };
  wire('text-to-hex');

  /* ASCII → Text */
  const btnA2T = document.getElementById('btn-ascii-to-text');
  if (btnA2T) btnA2T.onclick = () => {
    try {
      document.getElementById('out-ascii-to-text').value =
        document.getElementById('in-ascii-to-text').value
          .split(/[\s,;]+/).filter(Boolean).map(n=>String.fromCharCode(+n)).join('');
    } catch(e) { document.getElementById('out-ascii-to-text').value='❌ '+e.message; }
  };
  wire('ascii-to-text');

  /* Text → ASCII */
  const btnT2A = document.getElementById('btn-text-to-ascii');
  if (btnT2A) btnT2A.onclick = () => {
    document.getElementById('out-text-to-ascii').value =
      document.getElementById('in-text-to-ascii').value
        .split('').map(c=>c.charCodeAt(0)).join(' ');
  };
  wire('text-to-ascii');

  /* Morse Code */
  const btnTM = document.getElementById('btn-text-to-morse');
  const btnMT = document.getElementById('btn-morse-to-text');
  const btnCM = document.getElementById('btn-clear-morse');
  const btnCpM= document.getElementById('btn-copy-morse');
  if (btnTM) btnTM.onclick = () => {
    document.getElementById('out-morse').value =
      document.getElementById('in-morse').value.toUpperCase()
        .split('').map(c=>MORSE[c]!==undefined?(c===' '?'/ ':MORSE[c]):'?').join(' ').trim();
  };
  if (btnMT) btnMT.onclick = () => {
    document.getElementById('out-morse').value =
      document.getElementById('in-morse').value.trim()
        .split(' / ').map(w=>w.split(' ').map(c=>MORSE_REV[c]||'?').join('')).join(' ');
  };
  if (btnCM) btnCM.onclick = ()=>{
    document.getElementById('in-morse').value='';
    document.getElementById('out-morse').value='';
  };
  if (btnCpM) btnCpM.onclick = ()=>cp('out-morse');

  /* Caesar / ROT13 */
  const slider = document.getElementById('caesar-shift');
  const label  = document.getElementById('caesar-shift-label');
  if (slider && label) slider.oninput = () => label.textContent = slider.value;
  const shift = () => parseInt((slider||{value:'13'}).value, 10);
  const caesarFn = (txt, s) => txt.replace(/[a-zA-Z]/g, c => {
    const b = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0)-b+s)%26)+b);
  });
  const btnCE = document.getElementById('btn-caesar-encode');
  const btnCD = document.getElementById('btn-caesar-decode');
  const btnCC = document.getElementById('btn-clear-caesar');
  const btnCpC= document.getElementById('btn-copy-caesar');
  if (btnCE) btnCE.onclick = () => {
    document.getElementById('out-caesar').value = caesarFn(document.getElementById('in-caesar').value, shift());
  };
  if (btnCD) btnCD.onclick = () => {
    document.getElementById('out-caesar').value = caesarFn(document.getElementById('in-caesar').value, 26-shift());
  };
  if (btnCC) btnCC.onclick = ()=>{
    document.getElementById('in-caesar').value='';
    document.getElementById('out-caesar').value='';
  };
  if (btnCpC) btnCpC.onclick = ()=>cp('out-caesar');

  /* QR Code */
  const btnQR = document.getElementById('btn-gen-qr');
  const btnDL = document.getElementById('btn-dl-qr');
  const btnCQR= document.getElementById('btn-clear-qr');
  if (btnQR) btnQR.onclick = () => {
    const txt = (document.getElementById('in-qr')||{}).value||'';
    if (!txt.trim()) return;
    const container = document.getElementById('qr-output');
    const status    = document.getElementById('qr-status');
    container.innerHTML = '';
    if (window.QRCode) {
      new QRCode(container, {text:txt, width:220, height:220, colorDark:'#7c3aed', colorLight:'#1e293b'});
    } else {
      const img = document.createElement('img');
      img.src = 'https://chart.googleapis.com/chart?chs=220x220&cht=qr&chl='+encodeURIComponent(txt);
      img.alt = 'QR Code'; img.style.borderRadius='8px';
      container.appendChild(img);
    }
    if (status) status.textContent = '✅ QR generated for: '+txt.substring(0,50)+(txt.length>50?'...':'');
  };
  if (btnDL) btnDL.onclick = () => {
    const canvas = document.querySelector('#qr-output canvas');
    const img    = document.querySelector('#qr-output img');
    if (canvas) { const a=document.createElement('a'); a.download='qr.png'; a.href=canvas.toDataURL(); a.click(); }
    else if (img) { window.open(img.src,'_blank'); }
  };
  if (btnCQR) btnCQR.onclick = () => {
    const inp = document.getElementById('in-qr');
    const out = document.getElementById('qr-output');
    const st  = document.getElementById('qr-status');
    if(inp) inp.value=''; if(out) out.innerHTML=''; if(st) st.textContent='';
  };
}

/* ============================================================
   TEXT ANALYSIS TOOLS
   ============================================================ */
function initAnalysisTools() {

  /* Word Frequency */
  const btnWF = document.getElementById('btn-word-freq');
  if (btnWF) btnWF.onclick = () => {
    const txt  = document.getElementById('in-word-freq').value;
    const stop = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by','is','are','was','were','be','been','have','has','had','do','did','does','this','that','it','its','not']);
    const freq = {};
    (txt.toLowerCase().match(/\b[a-z']+\b/g)||[]).forEach(w=>{if(!stop.has(w)&&w.length>1)freq[w]=(freq[w]||0)+1;});
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,50);
    const out = document.getElementById('out-word-freq');
    out.innerHTML = sorted.length ? sorted.map(([w,c],i)=>`
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:14px">
        <span style="width:24px;color:var(--text-muted);text-align:right">${i+1}</span>
        <span style="min-width:140px;font-weight:500">${w}</span>
        <div style="flex:1;height:10px;background:var(--border);border-radius:5px;overflow:hidden">
          <div style="height:100%;width:${Math.round(c/sorted[0][1]*100)}%;background:var(--primary);border-radius:5px"></div>
        </div>
        <span style="min-width:30px;color:var(--primary-light);text-align:right">${c}</span>
      </div>`).join('') : '<p style="color:var(--text-muted)">No words found.</p>';
  };
  const btnCWF = document.getElementById('btn-clear-word-freq');
  if (btnCWF) btnCWF.onclick = ()=>{
    document.getElementById('in-word-freq').value='';
    document.getElementById('out-word-freq').innerHTML='';
  };

  /* Keyword Density */
  const btnKD = document.getElementById('btn-keyword-density');
  if (btnKD) btnKD.onclick = () => {
    const txt   = document.getElementById('in-kd').value;
    const words = (txt.toLowerCase().match(/\b[a-z]+\b/g)||[]);
    const total = words.length||1;
    const freq  = {};
    words.forEach(w=>{if(w.length>2)freq[w]=(freq[w]||0)+1;});
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,30);
    document.getElementById('out-kd').innerHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <thead><tr style="border-bottom:1px solid var(--border)">
          <th style="text-align:left;padding:8px;color:var(--text-light)">Keyword</th>
          <th style="text-align:center;padding:8px;color:var(--text-light)">Count</th>
          <th style="text-align:center;padding:8px;color:var(--text-light)">Density</th>
        </tr></thead>
        <tbody>${sorted.map(([w,c])=>`<tr style="border-bottom:1px solid var(--border)">
          <td style="padding:8px">${w}</td>
          <td style="padding:8px;text-align:center">${c}</td>
          <td style="padding:8px;text-align:center;color:var(--primary-light)">${(c/total*100).toFixed(2)}%</td>
        </tr>`).join('')}</tbody>
      </table>`;
  };
  const btnCKD = document.getElementById('btn-clear-kd');
  if (btnCKD) btnCKD.onclick = ()=>{
    document.getElementById('in-kd').value='';
    document.getElementById('out-kd').innerHTML='';
  };

  /* Readability */
  const btnRD = document.getElementById('btn-readability');
  if (btnRD) btnRD.onclick = () => {
    const txt  = document.getElementById('in-readability').value;
    const words= (txt.match(/\b\w+\b/g)||[]).length||1;
    const sents= (txt.split(/[.!?]+/).filter(s=>s.trim()).length)||1;
    const syls = (txt.match(/\b\w+\b/g)||[]).reduce((s,w)=>s+syllables(w),0)||1;
    const fre  = Math.max(0,Math.min(100,Math.round(206.835-1.015*(words/sents)-84.6*(syls/words))));
    const fkgl = Math.max(1,Math.round(0.39*(words/sents)+11.8*(syls/words)-15.59));
    const lvl  = fre>=90?'Very Easy (5th grade)':fre>=70?'Easy (7th grade)':fre>=60?'Standard (8-9th grade)':fre>=50?'Hard (10-12th grade)':fre>=30?'Difficult (College)':'Very Difficult (Professional)';
    document.getElementById('out-readability').innerHTML = [
      ['Words',words],['Sentences',sents],['Syllables',syls],
      ['Avg Words/Sentence',(words/sents).toFixed(1)],
      ['Flesch Score',fre+'/100'],['Grade Level','Grade '+fkgl],['Reading Level',lvl]
    ].map(([l,v])=>`<div style="background:var(--bg-input);border:1px solid var(--border-light);border-radius:8px;padding:14px;text-align:center;display:inline-block;margin:6px;min-width:140px">
      <div style="font-size:20px;font-weight:700;color:var(--primary-light)">${v}</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${l}</div>
    </div>`).join('');
  };
  const btnCRD = document.getElementById('btn-clear-readability');
  if (btnCRD) btnCRD.onclick = ()=>{
    document.getElementById('in-readability').value='';
    document.getElementById('out-readability').innerHTML='';
  };

  /* Text Diff */
  const btnDF = document.getElementById('btn-diff');
  if (btnDF) btnDF.onclick = () => {
    const diffs = diffLines(document.getElementById('in-diff-a').value, document.getElementById('in-diff-b').value);
    const out = document.getElementById('out-diff');
    let adds=0,dels=0,same=0;
    out.innerHTML = diffs.map(d=>{
      if(d.t==='add'){adds++;return`<div style="padding:3px 10px;background:rgba(16,185,129,.12);color:#10b981;font-family:monospace;font-size:13px;border-radius:2px;margin-bottom:1px">+ ${d.v}</div>`;}
      if(d.t==='del'){dels++;return`<div style="padding:3px 10px;background:rgba(239,68,68,.1);color:#ef4444;font-family:monospace;font-size:13px;border-radius:2px;margin-bottom:1px">- ${d.v}</div>`;}
      same++;return`<div style="padding:3px 10px;color:var(--text-light);font-family:monospace;font-size:13px;margin-bottom:1px">  ${d.v}</div>`;
    }).join('');
    const st = document.getElementById('diff-stats');
    if(st) st.textContent=`✅ ${adds} added | ❌ ${dels} removed | ${same} unchanged`;
  };
  const btnCDF = document.getElementById('btn-clear-diff');
  if (btnCDF) btnCDF.onclick = ()=>{
    ['in-diff-a','in-diff-b'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
    const o=document.getElementById('out-diff'); if(o)o.innerHTML='';
    const s=document.getElementById('diff-stats'); if(s)s.textContent='';
  };

  /* Reading Time — live */
  const inRT = document.getElementById('in-reading-time');
  if (inRT) {
    const calcRT = () => {
      const txt   = inRT.value;
      const words = (txt.match(/\b\w+\b/g)||[]).length;
      const sents = (txt.split(/[.!?]+/).filter(s=>s.trim())||[]).length;
      const fmt   = m => m<1?'< 1 min':Math.floor(m)+'m '+Math.round((m%1)*60)+'s';
      document.getElementById('out-reading-time').innerHTML = [
        ['Words',words],['Characters',txt.length],['Sentences',sents],
        ['Reading Time',fmt(words/238)],['Speaking Time',fmt(words/130)]
      ].map(([l,v])=>`<div style="background:var(--bg-input);border:1px solid var(--border-light);border-radius:8px;padding:14px;text-align:center;display:inline-block;margin:6px;min-width:130px">
        <div style="font-size:20px;font-weight:700;color:var(--primary-light)">${v}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${l}</div>
      </div>`).join('');
    };
    inRT.oninput = calcRT;
  }
  const btnCRT = document.getElementById('btn-clear-reading-time');
  if (btnCRT) btnCRT.onclick = ()=>{
    if(inRT) inRT.value='';
    const o=document.getElementById('out-reading-time'); if(o)o.innerHTML='';
  };

  /* Syllable Counter */
  const btnSY = document.getElementById('btn-syllable');
  if (btnSY) btnSY.onclick = () => {
    const words = (document.getElementById('in-syllable').value.match(/\b[a-zA-Z]+\b/g)||[]);
    const res   = words.map(w=>({w,s:syllables(w)}));
    const total = res.reduce((t,r)=>t+r.s,0);
    const st    = document.getElementById('out-syllable-stats');
    if(st) st.textContent = `Words: ${words.length} | Syllables: ${total} | Avg: ${words.length?(total/words.length).toFixed(2):0}`;
    const out = document.getElementById('out-syllable');
    out.innerHTML = res.slice(0,100).map(r=>
      `<span style="display:inline-block;margin:3px;padding:4px 10px;border-radius:20px;font-size:13px;background:var(--bg-input);border:1px solid var(--border-light)">${r.w} <strong style="color:var(--primary-light)">${r.s}</strong></span>`
    ).join('') + (res.length>100?`<p style="color:var(--text-muted);font-size:12px;margin-top:8px">...and ${res.length-100} more</p>`:'');
  };
  const btnCSY = document.getElementById('btn-clear-syllable');
  if (btnCSY) btnCSY.onclick = ()=>{
    const i=document.getElementById('in-syllable'); if(i)i.value='';
    const o=document.getElementById('out-syllable'); if(o)o.innerHTML='';
    const s=document.getElementById('out-syllable-stats'); if(s)s.textContent='';
  };

  /* Sentiment */
  const btnST = document.getElementById('btn-sentiment');
  if (btnST) btnST.onclick = () => {
    const words = (document.getElementById('in-sentiment').value.toLowerCase().match(/\b[a-z]+\b/g)||[]);
    let pos=0,neg=0; const pf=[],nf=[];
    words.forEach(w=>{if(POS.has(w)){pos++;pf.push(w);}else if(NEG.has(w)){neg++;nf.push(w);}});
    const total=pos+neg||1;
    const score=Math.round((pos-neg)/total*100);
    const emoji=score>20?'😊':score<-20?'😢':'😐';
    const label=score>20?'Positive':score<-20?'Negative':'Neutral';
    const color=score>20?'#10b981':score<-20?'#ef4444':'#f59e0b';
    document.getElementById('out-sentiment').innerHTML=`
      <div style="text-align:center;padding:20px">
        <div style="font-size:48px">${emoji}</div>
        <div style="font-size:28px;font-weight:700;color:${color};margin:8px 0">${label} (${score>0?'+':''}${score}%)</div>
        <div style="display:flex;gap:20px;justify-content:center;font-size:14px;margin:10px 0">
          <span style="color:#10b981">✅ Positive: ${pos}</span>
          <span style="color:#ef4444">❌ Negative: ${neg}</span>
          <span style="color:var(--text-muted)">⬜ Neutral: ${words.length-pos-neg}</span>
        </div>
        ${pf.length?`<p style="font-size:12px;color:#10b981">Positive words: ${[...new Set(pf)].join(', ')}</p>`:''}
        ${nf.length?`<p style="font-size:12px;color:#ef4444">Negative words: ${[...new Set(nf)].join(', ')}</p>`:''}
      </div>`;
  };
  const btnCST = document.getElementById('btn-clear-sentiment');
  if (btnCST) btnCST.onclick = ()=>{
    const i=document.getElementById('in-sentiment'); if(i)i.value='';
    const o=document.getElementById('out-sentiment'); if(o)o.innerHTML='';
  };

  /* Language Detector */
  const btnLD = document.getElementById('btn-detect-lang');
  if (btnLD) btnLD.onclick = () => {
    const words = new Set((document.getElementById('in-lang').value.toLowerCase().match(/\b\w+\b/g)||[]));
    const scores = {};
    Object.entries(LANG_WORDS).forEach(([l,common])=>{ scores[l]=common.filter(w=>words.has(w)).length; });
    const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
    const total  = sorted.reduce((s,[,v])=>s+v,0)||1;
    document.getElementById('out-lang').innerHTML=`
      <div style="font-size:22px;font-weight:700;color:var(--primary-light);margin-bottom:16px">
        🌐 Detected: ${sorted[0][1]>0?sorted[0][0]:'Unknown'}
      </div>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px">Based on common stop words. Works best with 20+ words.</p>
      ${sorted.filter(([,v])=>v>0).map(([l,v])=>`
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <span style="min-width:90px;font-size:14px">${l}</span>
          <div style="flex:1;height:10px;background:var(--border);border-radius:5px;overflow:hidden">
            <div style="height:100%;width:${Math.round(v/total*100)}%;background:var(--primary);border-radius:5px"></div>
          </div>
          <span style="font-size:13px;color:var(--primary-light)">${v}</span>
        </div>`).join('')}`;
  };
  const btnCLD = document.getElementById('btn-clear-lang');
  if (btnCLD) btnCLD.onclick = ()=>{
    const i=document.getElementById('in-lang'); if(i)i.value='';
    const o=document.getElementById('out-lang'); if(o)o.innerHTML='';
  };

  /* Text Similarity */
  const btnSIM = document.getElementById('btn-similarity');
  if (btnSIM) btnSIM.onclick = () => {
    const a = new Set((document.getElementById('in-sim-a').value.toLowerCase().match(/\b[a-z]+\b/g)||[]));
    const b = new Set((document.getElementById('in-sim-b').value.toLowerCase().match(/\b[a-z]+\b/g)||[]));
    const inter = new Set([...a].filter(w=>b.has(w)));
    const union = new Set([...a,...b]);
    const jac   = union.size?(inter.size/union.size*100).toFixed(1):0;
    const all   = [...union];
    const vA    = all.map(w=>a.has(w)?1:0), vB=all.map(w=>b.has(w)?1:0);
    const dot   = vA.reduce((s,v,i)=>s+v*vB[i],0);
    const cos   = (Math.sqrt(vA.reduce((s,v)=>s+v*v,0))*Math.sqrt(vB.reduce((s,v)=>s+v*v,0)));
    const cosS  = cos?(dot/cos*100).toFixed(1):0;
    document.getElementById('out-similarity').innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
        <div style="background:var(--bg-input);border:1px solid var(--border-light);border-radius:8px;padding:20px;text-align:center">
          <div style="font-size:36px;font-weight:700;color:var(--primary-light)">${jac}%</div>
          <div style="font-size:13px;color:var(--text-muted)">Jaccard Similarity</div>
        </div>
        <div style="background:var(--bg-input);border:1px solid var(--border-light);border-radius:8px;padding:20px;text-align:center">
          <div style="font-size:36px;font-weight:700;color:var(--primary-light)">${cosS}%</div>
          <div style="font-size:13px;color:var(--text-muted)">Cosine Similarity</div>
        </div>
      </div>
      <p style="font-size:13px;color:var(--text-light)">Unique: Text1=${a.size} | Text2=${b.size} | Common=${inter.size}</p>
      ${inter.size?`<p style="font-size:12px;color:var(--text-muted);margin-top:6px">Shared: ${[...inter].slice(0,20).join(', ')}${inter.size>20?'...':''}</p>`:''}`;
  };
  const btnCSIM = document.getElementById('btn-clear-sim');
  if (btnCSIM) btnCSIM.onclick = ()=>{
    ['in-sim-a','in-sim-b'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
    const o=document.getElementById('out-similarity'); if(o)o.innerHTML='';
  };
}

/* ============================================================
   TAB SWITCHING
   The first tool area has display:block set directly in HTML.
   JS only needs to handle switching when tabs are clicked.
   ============================================================ */
function initNewTabs(pageId) {
  const page = document.getElementById('page-' + pageId);
  if (!page) return;
  page.querySelectorAll('.new-tab-btn').forEach(function(btn) {
    btn.onclick = function() {
      page.querySelectorAll('.new-tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      page.querySelectorAll('.ntool-area').forEach(a => a.style.setProperty('display','none','important'));
      const area = document.getElementById('ntool-' + pageId + '-' + this.dataset.ntool);
      if (area) area.style.setProperty('display','block','important');
    };
  });
}

/* ============================================================
   TAB SWITCHING — Single delegated listener, most reliable
   ============================================================ */
document.addEventListener('click', function(e) {
  var btn = e.target.closest('.new-tab-btn');
  if (!btn) return;
  var page = btn.closest('.page-container');
  if (!page) return;
  var pageId = page.id.replace('page-', '');

  // Update active tab styling
  page.querySelectorAll('.new-tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Hide all tool areas in this page
  page.querySelectorAll('.ntool-area').forEach(function(a) {
    a.style.cssText += '; display: none !important;';
  });

  // Show the selected tool area
  var toolId = btn.getAttribute('data-ntool');
  var areaId = 'ntool-' + pageId + '-' + toolId;
  var area = document.getElementById(areaId);
  if (area) {
    area.style.cssText += '; display: block !important;';
  }
}, true); // useCapture=true — fires before any other handler

/* ── BOOT ─────────────────────────────────────────────────── */
initEncodeTools();
initAnalysisTools();

})();