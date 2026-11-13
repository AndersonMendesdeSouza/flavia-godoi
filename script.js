// Opcional: informe o WhatsApp da clínica com DDI e DDD, somente dígitos.
// Sem um número válido, os links levam à seção de contato da própria página.
const WHATSAPP = '';
document.querySelectorAll('[data-contact]').forEach(link => {
 if (!/^55\d{10,11}$/.test(WHATSAPP)) {
  link.href = '#contato';
  return;
 }
 const service = link.dataset.service;
 const message = service ? `Olá! Gostaria de saber mais sobre ${service}.` : 'Olá! Gostaria de agendar uma avaliação.';
 link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
 link.target = '_blank'; link.rel = 'noopener noreferrer';
});
const menu = document.querySelector('.menu'), nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.image;dialog.showModal();}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelector('#year').textContent=new Date().getFullYear();
