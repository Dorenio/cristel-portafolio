const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.topbar nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
});
nav?.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.querySelectorAll('[data-package]').forEach(link=>link.addEventListener('click',()=>{
  const message=`Hola Cristel, me interesa cotizar: ${link.dataset.package}. ¿Podemos conversar sobre mi proyecto?`;
  link.href=`https://wa.me/529995481209?text=${encodeURIComponent(message)}`;
}));
document.querySelectorAll('[data-carousel]').forEach(carousel=>{
  const slides=[...carousel.querySelectorAll('.carousel-slide')];
  const dots=[...carousel.querySelectorAll('.carousel-dot')];
  if(!slides.length)return;
  let current=0;
  const show=index=>{
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.hidden=i!==current);
    dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===current)));
  };
  carousel.querySelector('.carousel-prev')?.addEventListener('click',()=>show(current-1));
  carousel.querySelector('.carousel-next')?.addEventListener('click',()=>show(current+1));
  dots.forEach((dot,index)=>dot.addEventListener('click',()=>show(index)));
  carousel.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();show(current-1)}
    if(event.key==='ArrowRight'){event.preventDefault();show(current+1)}
  });
});
