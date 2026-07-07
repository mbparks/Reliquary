(()=>{
const KEY='reliquary-fi072-v120';
const $=s=>document.querySelector(s);
function uid(p='id'){return p+'_'+Math.random().toString(36).slice(2,8)}
function persist(msg){
  if (typeof render === 'function') render();
  localStorage.setItem(KEY, JSON.stringify(state));
  const save=$('#save');
  if (save){save.textContent='Saved';save.className='pill done'}
  const toast=$('#toast');
  if (toast && msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1900)}
}
window.saveP=function(projectId){
  const form=$('#pf');
  if(!form) return;
  const f=new FormData(form);
  let project=projectId ? state.projects.find(x=>x.id===projectId) : null;
  if(!project){project={id:uid('p'),artifacts:[],snapshots:[],checklist:{},archived:false};}
  ['name','code','status','type','repoUrl','description'].forEach(k=>project[k]=f.get(k)||'');
  if(!project.name){
    const toast=$('#toast');
    if(toast){toast.textContent='Project name required';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1900)}
    return;
  }
  if(!projectId){state.projects.unshift(project);state.activeProjectId=project.id;state.view='dash'}
  closeM();
  persist('Project saved');
};
window.saveS=function(snapshotId){
  const form=$('#sf'), project=state.projects.find(x=>x.id===state.activeProjectId)||state.projects[0];
  if(!form || !project) return;
  const f=new FormData(form);
  let snap=snapshotId ? project.snapshots.find(x=>x.id===snapshotId) : null;
  if(!snap){snap={id:uid('s'),artifactIds:project.artifacts.filter(a=>a.status!=='Archived').map(a=>a.id)};}
  ['name','date','stage','summary','knownIssues'].forEach(k=>snap[k]=f.get(k)||'');
  if(!snapshotId) project.snapshots.unshift(snap);
  closeM();
  persist('Snapshot saved');
};
})();
