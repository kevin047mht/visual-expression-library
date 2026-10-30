(() => {
  'use strict';
  const data = window.ATLAS || {cases:[],categories:[],methods:[]};
  const byId = Object.fromEntries(data.cases.map(c => [c.id,c]));
  const categoryName = Object.fromEntries(data.categories.map(c => [c.id,c.name]));
  const storageKey = 'visual-expression-atlas-v1';
  let notes = {};
  try { notes = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) {}
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify(notes)); return true; }
    catch (_) { return false; }
  }
  const form = document.querySelector('#filters');
  if (form) {
    const keys = ['search','type-filter','subject-filter','method-filter','source-filter','role-filter'];
    const controls = Object.fromEntries(keys.map(k => [k,document.getElementById(k)]));
    const cards = [...document.querySelectorAll('#case-grid .case-card')];
    const params = new URLSearchParams(location.search);
    for (const [param,key] of [['type','type-filter'],['subject','subject-filter'],['method','method-filter']]) {
      const v = params.get(param); if(v) controls[key].value = v;
    }
    function filter() {
      const q = controls.search.value.trim().toLocaleLowerCase();
      let count=0;
      cards.forEach(card => {
        const type = controls['type-filter'].value;
        const subject = controls['subject-filter'].value;
        const method = controls['method-filter'].value;
        const source = controls['source-filter'].value;
        const role = controls['role-filter'].value;
        const matched=(!q || card.dataset.search.toLocaleLowerCase().includes(q)) &&
          (!type || card.dataset.type.split(' ').includes(type)) &&
          (!subject || card.dataset.subject.split('|').includes(subject)) &&
          (!method || card.dataset.method.split(' ').includes(method)) &&
          (!source || card.dataset.source===source) && (!role || card.dataset.role===role);
        card.hidden = !matched; if(matched) count++;
      });
      document.getElementById('result-count').textContent=`显示 ${count} / 100 个案例`;
      document.getElementById('no-results').hidden = count!==0;
    }
    form.addEventListener('input',filter);
    form.addEventListener('change',filter);
    form.addEventListener('reset',() => setTimeout(filter,0));
    filter();
  }
  document.querySelectorAll('.save-case').forEach(button => {
    const key=button.dataset.case;
    function render(){const read=!!notes[key]?.read;button.setAttribute('aria-pressed',String(read));button.textContent=read?'已读 · 再次点击取消':'标记为已读';}
    button.addEventListener('click',() => {notes[key]={...notes[key],read:!notes[key]?.read,updated:new Date().toISOString()};save();render();});
    render();
  });
  document.querySelectorAll('.case-note').forEach(field => {
    const key=field.dataset.case;
    if(typeof notes[key]?.text==='string') field.value=notes[key].text;
    let timer;
    field.addEventListener('input',() => {
      clearTimeout(timer);
      timer=setTimeout(() => {
        notes[key]={...notes[key],text:field.value,updated:new Date().toISOString()};
        const ok=save();const status=field.closest('.notebook')?.querySelector('.note-status');
        if(status) status.textContent=ok?'已保存在本机':'浏览器未允许保存，请导出备份';
      },350);
    });
  });
  document.querySelectorAll('.export-notes').forEach(button => button.addEventListener('click',() => {
    document.querySelectorAll('.case-note').forEach(field => {const key=field.dataset.case;notes[key]={...notes[key],text:field.value};});
    const lines=['# 视觉表达学习笔记','',`导出时间：${new Date().toLocaleString()}`,''];
    for(const [key,value] of Object.entries(notes)) {
      lines.push(`## ${key} ${byId[key]?.title || '创作简报'}`,'',`已读：${value.read?'是':'否'}`,'',value.text || '（尚无笔记）','');
    }
    const blob=new Blob([lines.join('\n')],{type:'text/markdown;charset=utf-8'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');
    link.href=url;link.download='视觉表达学习笔记.md';document.body.append(link);link.click();link.remove();setTimeout(() => URL.revokeObjectURL(url),1000);
  }));
  const left=document.getElementById('compare-left');
  const right=document.getElementById('compare-right');
  function snippet(c){
    const article=document.createElement('article');article.className='compare-snippet';
    const image=document.createElement('img');image.src=c.hero.path;image.alt=`${c.id} ${c.title}：代表帧`;image.width=c.hero.width;image.height=c.hero.height;
    const title=document.createElement('h3');const link=document.createElement('a');link.href=c.reader_url;link.textContent=`${c.id} · ${c.title}`;title.append(link);
    const type=document.createElement('p');type.className='small';type.textContent=c.types.map(t => categoryName[t]).join(' / ');
    const focus=document.createElement('p');focus.textContent=c.focus;
    article.append(image,title,type,focus);return article;
  }
  if(left && right){
    left.value='H02';right.value='H43';
    const render=() => document.getElementById('compare-output').replaceChildren(snippet(byId[left.value]),snippet(byId[right.value]));
    left.addEventListener('change',render);right.addEventListener('change',render);render();
  }
  // No autoplay. Pause existing playback when the user starts another excerpt.
  const videos=[...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play',() => videos.forEach(other => {if(other!==video)other.pause();})));
  document.addEventListener('visibilitychange',() => {if(document.hidden)videos.forEach(v => v.pause());});
})();
