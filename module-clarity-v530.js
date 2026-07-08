(()=>{
  const VERSION='v5.3.1';
  const GUIDES={
    library:{title:'Project Library',display:'PROJECT\nLIBRARY',tag:'Choose or create a project archive',answers:'Which hardware project am I preserving right now?',use:'Use this module to create a new RELIQUARY project, switch between archives, and compare archive completeness across projects.',not:'Do not use it for individual files, parts, suppliers, or build lessons. Those belong in the more specific modules.',prompts:['Create one archive per real project','Use a clear project name and code','Open the project before adding evidence']},
    archive:{title:'Archive Readiness',display:'ARCHIVE\nREADINESS',tag:'The health dashboard',answers:'Can this project be understood, rebuilt, repaired, published, or resumed later?',use:'Use this module to see what is missing and decide the next best preservation action.',not:'Do not treat this as a task board. It is a readiness gauge based on evidence already stored elsewhere.',prompts:['Start with the highest-impact missing gate','Use gaps to decide what artifact to add next','Recheck after adding files, snapshots, and memory']},
    artifacts:{title:'Artifact Cabinet',display:'ARTIFACT\nCABINET',tag:'Formal project files',answers:'What files define this project?',use:'Use this module for CAD, Gerbers, firmware, BOMs, drawings, manuals, images, and other formal artifacts.',not:'Do not use it for informal build wisdom, supplier opinions, or shop settings unless they are attached to a real document. Those belong in Hardware Memory.',prompts:['Add files by real path or filename','Use Set Source / Parent for generated files','Keep notes focused on what the file is and why it matters']},
    snapshots:{title:'Design Snapshots',display:'DESIGN\nSNAPSHOTS',tag:'Preserved design states',answers:'What did the project look like at a specific moment in time?',use:'Use this module when a project reaches a meaningful state: concept, prototype, test build, release candidate, repair revision, or final archive.',not:'Do not use snapshots for every tiny file change. Use them for moments worth returning to later.',prompts:['Name the design state','Summarize what changed','Capture known issues before moving on']},
    scanner:{title:'Repo Scanner',display:'REPO\nSCANNER',tag:'Bulk artifact intake',answers:'What project files already exist in a repository or file tree?',use:'Use this module to paste or import a file tree and quickly populate the Artifact Cabinet with classified artifacts.',not:'Do not use it as the final source of truth. Review imported artifacts afterward in the Artifact Cabinet.',prompts:['Import a repo tree','Review categories and roles','Set parent/source relationships after import']},
    lineage:{title:'Artifact Lineage',display:'ARTIFACT\nLINEAGE',tag:'File relationships',answers:'Which files came from which source files?',use:'Use this module to confirm generated files are traceable back to editable sources. For example, Gerbers to PCB, STL to CAD, and G-code to CAM or geometry.',not:'Do not create relationships here if the Artifact Cabinet needs editing. Set relationships from the Artifact Cabinet first.',prompts:['Find orphan manufacturing outputs','Link exports to editable sources','Use lineage to improve rebuild confidence']},
    memoryView:{title:'Hardware Memory',display:'HARDWARE\nMEMORY',tag:'Shop wisdom',answers:'What did we learn while building, testing, repairing, sourcing, and using this project?',use:'Use this module for parts, tools, suppliers, settings, failures, repairs, substitutions, and notes that future builders should remember.',not:'Do not use it for source files or formal documents. Put those in the Artifact Cabinet.',prompts:['Rate what worked or failed','Record whether you would use it again','Capture settings and substitutions before they are forgotten']},
    reports:{title:'Reports',display:'REPORTS',tag:'Exportable project knowledge',answers:'What can I hand to another builder or commit to a repository?',use:'Use this module to export README text, manifests, readiness reports, hardware memory, and machine-readable project JSON.',not:'Do not edit project facts here. Update the source modules, then regenerate the report.',prompts:['Export after major project changes','Commit generated reports with releases','Use JSON for backups and migration']},
    diagnostics:{title:'Diagnostics',display:'DIAGNOSTICS',tag:'Archive integrity checks',answers:'Is RELIQUARY storing clean, connected, recoverable data?',use:'Use this module to find duplicate paths, broken parent links, missing references, and storage issues.',not:'Do not use it to judge project quality. It checks archive data integrity, not engineering correctness.',prompts:['Run after imports','Repair data before exporting','Investigate warnings before publishing']},
    templates:{title:'Templates / Demos',display:'TEMPLATES\nDEMOS',tag:'Starter archives',answers:'What structure should a new project start with?',use:'Use this module to create starter archives for common project types or reset the demo data.',not:'Do not use templates as finished evidence. Replace template placeholders with real project artifacts.',prompts:['Pick the closest project type','Replace placeholders with real files','Use templates to teach the workflow']}
  };
  const ROUTE_ALIASES={memory:'memoryView'};
  function currentView(){
    const active=document.querySelector('#nav .nav-btn.active');
    if(active)return ROUTE_ALIASES[active.dataset.view]||active.dataset.view;
    const heading=document.querySelector('#app h2');
    const text=(heading&&heading.textContent||'').toLowerCase();
    if(text.includes('archive readiness'))return'archive';
    if(text.includes('artifact cabinet'))return'artifacts';
    if(text.includes('design snapshots'))return'snapshots';
    if(text.includes('repo scanner'))return'scanner';
    if(text.includes('artifact lineage'))return'lineage';
    if(text.includes('shop')||text.includes('hardware memory'))return'memoryView';
    if(text.includes('reports'))return'reports';
    if(text.includes('diagnostics'))return'diagnostics';
    if(text.includes('templates'))return'templates';
    if(text.includes('complete'))return'library';
    return'archive';
  }
  function bigTitle(t){return String(t||'').split('\n').map(x=>`<span>${x}</span>`).join('');}
  function guideHtml(g){
    return `<section class="panel module-guide module-hero" data-module-guide="1"><div class="module-hero-left"><span class="tag">${g.tag}</span><h2 class="module-title">${bigTitle(g.display||g.title)}</h2><p class="lede">This module answers: <b>${g.answers}</b></p></div><div class="module-hero-right"><div class="cards"><div class="card good"><h3>Use this for</h3><p>${g.use}</p></div><div class="card gap"><h3>Do not use this for</h3><p>${g.not}</p></div><div class="card"><h3>Good next actions</h3><ul>${g.prompts.map(p=>`<li>${p}</li>`).join('')}</ul></div></div></div></section>`;
  }
  function patchNav(){
    document.querySelectorAll('#nav .nav-btn').forEach(btn=>{
      if(btn.textContent.trim()==='Hardware Memory')btn.dataset.view='memoryView';
    });
  }
  function patchVersionLabels(){
    document.querySelectorAll('.tag,.pill').forEach(el=>{
      el.textContent=el.textContent.replace(/v5\.2\.[01]|v5\.2\.0|v5\.3\.0/g,VERSION);
    });
  }
  function demoteOldHeroes(root){
    root.querySelectorAll('.hero').forEach(section=>{
      if(section.matches('[data-module-guide="1"]'))return;
      section.classList.add('demoted-hero');
      const h=section.querySelector('h2');
      if(h)h.classList.add('demoted-title');
    });
  }
  function enhance(){
    patchNav();
    patchVersionLabels();
    const root=document.getElementById('app');
    if(!root)return;
    root.querySelectorAll('[data-module-guide="1"]').forEach(x=>x.remove());
    const view=currentView();
    const g=GUIDES[view];
    if(!g)return;
    root.insertAdjacentHTML('afterbegin',guideHtml(g));
    demoteOldHeroes(root);
  }
  document.addEventListener('click',event=>{
    const btn=event.target.closest&&event.target.closest('#nav .nav-btn');
    if(btn&&btn.textContent.trim()==='Hardware Memory')btn.dataset.view='memoryView';
    setTimeout(enhance,0);
    setTimeout(enhance,80);
  },true);
  const app=document.getElementById('app');
  const nav=document.getElementById('nav');
  if(app)new MutationObserver(()=>setTimeout(enhance,0)).observe(app,{childList:true,subtree:false});
  if(nav)new MutationObserver(()=>setTimeout(enhance,0)).observe(nav,{childList:true,subtree:true});
  enhance();setTimeout(enhance,100);
})();
