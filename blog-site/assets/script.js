// Simple i18n toggler using data attributes
(function(){
  const btn = document.querySelector('.lang-toggle');
  const stored = localStorage.getItem('lang') || 'it';
  setLang(stored);
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = document.documentElement.lang === 'it' ? 'en' : 'it';
      setLang(next);
      localStorage.setItem('lang', next);
    });
  }
  function setLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const text = el.getAttribute(`data-${lang}`);
      if(text){ el.textContent = text; }
    });
    document.querySelectorAll('[data-show-lang]').forEach(el=>{
      const show = el.getAttribute('data-show-lang');
      el.style.display = (show===lang || show==='both') ? '' : 'none';
    });
  }
})();