// Informe o número oficial com DDI e DDD, somente dígitos. Ex.: 55 + DDD + número.
const WHATSAPP = '';
const instagram = 'https://www.instagram.com/flaviagodoi.fisio/';
document.querySelectorAll('[data-contact]').forEach(link => {
 const service = link.dataset.service;
 const message = service ? `Olá, Flávia! Gostaria de saber mais sobre ${service}.` : 'Olá, Flávia! Gostaria de agendar uma avaliação.';
 link.href = /^55\d{10,11}$/.test(WHATSAPP) ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}` : instagram;
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
