const EMAIL = 'YOUR-EMAIL@example.com';
const progress = document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement; const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100; progress.style.width=pct+'%';},{passive:true});
const range=document.getElementById('range'), concept=document.getElementById('concept'), line=document.getElementById('revealLine'), handle=document.getElementById('revealHandle');
function setReveal(v){concept.style.width=v+'%';line.style.left=v+'%';handle.style.left=v+'%';}
range.addEventListener('input',e=>setReveal(e.target.value)); setReveal(range.value);
const form=document.getElementById('viewingForm');
form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const subject=encodeURIComponent('Private viewing — FH Residency Unit 404');const body=encodeURIComponent(`Hello,\n\nI am interested in a private viewing of FH Residency, Unit 404.\n\nName: ${fd.get('name')}\nPhone/WhatsApp: ${fd.get('phone')}\nEmail: ${fd.get('email')||''}\n\nSent from the FH Residency private listing page.`);window.location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`;});
