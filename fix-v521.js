(()=>{
  const STORAGE_KEYS=['reliquary-fi072-v520','reliquary-fi072-v511','reliquary-fi072-v510','reliquary-fi072-v5'];
  function currentView(){
    for(const key of STORAGE_KEYS){
      try{const raw=localStorage.getItem(key);if(raw)return JSON.parse(raw).view||'';}catch{}
    }
    return '';
  }
  function patchHardwareMemoryRoute(){
    document.querySelectorAll('#nav .nav-btn').forEach(btn=>{
      if(btn.textContent.trim()==='Hardware Memory'){
        btn.dataset.view='memoryView';
        if(currentView()==='memoryView')btn.classList.add('active');
      }
    });
  }
  document.addEventListener('click',event=>{
    const btn=event.target.closest&&event.target.closest('#nav .nav-btn');
    if(btn&&btn.textContent.trim()==='Hardware Memory')btn.dataset.view='memoryView';
  },true);
  const nav=document.getElementById('nav');
  if(nav)new MutationObserver(patchHardwareMemoryRoute).observe(nav,{childList:true,subtree:true});
  patchHardwareMemoryRoute();
  setTimeout(patchHardwareMemoryRoute,50);
})();
