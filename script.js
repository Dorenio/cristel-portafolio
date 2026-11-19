const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.topbar nav');
let currentLanguage='es';
const englishCopy={
  'nav a[href="#servicios"]':'Services','nav a[href="#trabajo"]':'Portfolio','nav a[href="#precios"]':'Websites','nav .nav-cta':'Get a quote',
  '.hero-copy .eyebrow':'PERSONAL PORTFOLIO · MÉRIDA, YUCATÁN','.floating-tag':'Personal attention, thoughtful design','.hero-caption':'WEB <span>•</span> DESIGN <span>•</span> VIDEO','main .hero h1':'I’m Cristel.<br><em>Let’s bring your brand to life.</em>','main .hero-copy>p':'I create websites with SEO, social media content, and edited images and videos. I work directly with you to help your business communicate clearly and build a professional digital presence.','.hero-copy .actions .button':'Tell me about your project','.hero-copy .actions .text-link':'See my work ↓','.hero-proof span':['WEBSITES + SEO','SOCIAL MEDIA CONTENT','MÉRIDA, MX · AVAILABLE REMOTELY'],'.ticker>div':'DESIGN THAT COMMUNICATES <b>•</b> WEBSITES THAT OPEN DOORS <b>•</b> CONTENT WITH PERSONALITY <b>•</b> DESIGN THAT COMMUNICATES',
  '#servicios .section-head .eyebrow':'HOW I CAN HELP YOUR BRAND','#servicios .section-head h2':'Clear services,<br><em>made for your brand.</em>','#servicios .section-head>p':'Tell me what you need and I’ll suggest the scope, deliverables, and a clear quote. I’ll work with you from start to finish.','.service-card .service-index':['01 / VISIBILITY','02 / COMMUNITY','03 / VISUALS','04 / VIDEO'],'.service-card h3':['Websites with SEO','Social media management','Images for social media','Video editing'],'.service-card p':['Responsive websites that explain your services and guide visitors to get in touch. Every website package includes initial SEO.','Content planning, design, and organization to keep your brand active and consistent across social media.','Posts, carousels, and stories that showcase your services and communicate your ideas clearly.','Edited Reels and short videos with pacing, text, and captions, ready to share. You can send me your footage.'],'.service-card a':['See website packages ↓','See social media packages ↓','Explore options ↓','Build my package ↓'],
  '.about-inner .eyebrow':'A LITTLE ABOUT ME','.about-inner h2':'Hi, I’m Cristel.<br><em>Let’s work together.</em>','.about-inner p':['I turn ideas into clear, engaging visuals, making sure each design fits the business and the people it wants to reach. When you work with me, you get direct communication and a proposal shaped around your goals.','I’m a co-founder of Dorenio, a web design and digital presence project. This portfolio brings that work together with projects in health, beauty, and entertainment.'],'.about-inner .text-link':'See selected projects ↓',
  '#trabajo .section-head .eyebrow':'SELECTED WORK','#trabajo .section-head h2':'Different brands.<br><em>A clear idea behind each.</em>','#trabajo .section-head>p':'I create visuals that help businesses explain their services with a distinct voice. Browse each carousel to see more examples.','.project-meta span':['01 — SOCIAL MEDIA CONTENT','02 — PROMOTIONAL DESIGN','03 — CONTENT IDENTITY'],'.project-meta h3':['PediaClinic Mérida','Studio Eleven','TDAH en Stereo'],'.project-meta p':['Educational and promotional designs explaining pediatric services in a friendly, family-focused tone.','Promotions and ads highlighting beauty treatments, offers, and salon locations with an elegant look.','Colorful graphics introducing the audio project and its hosts on social media.'],'.web-work .eyebrow':'PROJECT · WEB DESIGN · SEO','.web-work h3':'Dorenio <em>— a project I co-founded.</em>','.web-work p':'I’m a co-founder of Dorenio, where I work on websites, SEO, and local visibility on Google. It’s part of my professional experience; my independent services also include social media content, design, and video.','.web-work .text-link':'Explore Dorenio',
  '#redes .section-head .eyebrow':'CONTENT PACKAGES','#redes .section-head h2':'Content that keeps<br><em>your brand present.</em>','#redes .section-head>p':'Monthly design and editing packages. Choose a volume that fits your pace, or ask for a custom proposal.','.social-card .social-label':['TO KEEP A STEADY PACE','TO GROW WITH CONTENT','FOR A CONSISTENT PRESENCE'],'.social-card h3':['Essential','In Motion','Complete'],'.social-card>p':['A set of visual assets to help you post more consistently.','Mix graphic posts with short videos to add variety to your content.','More content and scheduling support to keep your channels active.'],'.social-card ul li':['8 static designs per month','4 adapted stories','Monthly content calendar','1 revision round per design','8 static designs per month','4 edited short videos','6 adapted stories','Monthly content calendar','12 static designs per month','6 edited short videos','8 adapted stories','Scheduling on 1 social network'],'.social-card [data-package]':['Get a quote for this package','Get a quote for this package','Get a quote for this package'],'.small-note':'Packages cover creation of the listed content. Filming, ad spend, and replying to messages are not included. Scheduling, managing multiple networks, and other formats can be quoted separately. Design or editing can also be booked on its own.',
  '#precios .section-head .eyebrow':'WEBSITES BY CRISTEL · INITIAL SEO INCLUDED','#precios .section-head h2':'Your business deserves<br><em>a place of its own.</em>','#precios .section-head>p':'I design your website and include initial SEO setup in every package. These prices are a guide; we’ll confirm the final scope before work begins.','.price-top .eyebrow':['A PROFESSIONAL START','ROOM TO GROW','A COMPLETE PRESENCE'],'.price-top h3':['Essential','Plus','Premium'],'.price-top p':['Your first professional presence online.','More room for your services and brand.','A deeper look at your business and services.'],'.price-card .payment-note':['One-time development · Basic SEO included','One-time development · Basic SEO included','One-time development · Basic SEO included'],'.price-card ul li':['One page with up to 5 sections','Mobile-friendly design','Email contact button','Up to 8 images','Standard domain and hosting for 1 year*','Initial SEO: structure, titles, and description','2 revision rounds','Up to 4 pages','Custom design','Up to 20 images and a gallery','Contact form and map','Standard domain and hosting for 1 year*','Initial SEO: structure, titles, and description','3 revision rounds','Up to 7 pages','Advanced custom design','Up to 40 images','Special sections and galleries','Standard domain and hosting for 1 year*','Initial technical SEO and basic analytics','4 revision rounds'],'.price-card .button':['Request a quote','Request a quote','Request a quote'],'.price-terms .term-badge':'SPECIAL LAUNCH PRICING','#precios .price-terms p':['Reference prices in MXN based on Dorenio packages, a project I co-founded. Available from <strong>November 1 to December 31, 2026</strong> for quotes accepted during that period. I’ll work with you directly and confirm the final scope in writing.','*Domain and hosting depend on availability and terms confirmed before purchase. Renewals, taxes, online stores, custom bookings, and special integrations may cost extra. All three packages include initial SEO; ongoing SEO and search ranking are not guaranteed by a one-time fee.'],'.price-terms a':'See Dorenio’s pricing details',
  '.process .section-head .eyebrow':'HOW WE WORK','.process .section-head h2':'A clear process,<br><em>with you at every step.</em>','.process .section-head>p':'You’ll know what’s included, what I need from you, and what happens next before we begin.','.steps h3':['Tell me about it','Plan it together','Create and refine','Launch and deliver'],'.steps p':['We’ll talk about your business, goals, and the people you want to reach.','We’ll agree on the scope, deliverables, timeline, and quote.','We’ll create the work and refine the agreed details together.','I’ll deliver your materials or publish your website, ready for the next step.'],
  '#contacto .eyebrow':'READY TO GET STARTED?','#contacto h2':'Tell me what you need<br><em>and let’s plan it.</em>','#contacto .contact-inner>div>p':'Tell me what you’d like to improve about your digital presence. I’ll reply with next steps and a proposal tailored to your needs.','.contact-buttons .button':['Message me on WhatsApp','Send an email'],'.contact-panel>span':'DIRECT CONTACT','.contact-panel>p':'Mérida, Yucatán, Mexico<br>Local and remote projects','.footer-row>p':'Websites, SEO, and social content, directly with me.','.footer-row>div a':['Dorenio project','Contact'],'footer .copyright':'© 2026 Cristel O. · Mérida, Yucatán, Mexico'
};
const originalCopy=new Map();
function applyLanguage(language){
  currentLanguage=language;
  document.documentElement.lang=language;
  for(const [selector,english] of Object.entries(englishCopy)){
    const nodes=[...document.querySelectorAll(selector)];
    nodes.forEach((node,index)=>{
      if(!originalCopy.has(node))originalCopy.set(node,node.innerHTML);
      node.innerHTML=language==='en'?(Array.isArray(english)?(english[index]??node.innerHTML):english):originalCopy.get(node);
    });
  }
  const languageButton=document.querySelector('#language-toggle');
  document.title=language==='en'?'Cristel O. | Web design, SEO & social content':'Cristel O. | Diseño web, SEO y contenido';
  const description=document.querySelector('meta[name=description]');
  if(description)description.content=language==='en'?'I’m Cristel O., a digital designer in Mérida. I create websites with SEO, social media content, images, and videos for brands.':'Soy Cristel O., diseñadora digital en Mérida. Creo sitios web con SEO, contenido para redes e imágenes y videos para marcas.';
  if(menuButton)menuButton.setAttribute('aria-label',language==='en'?'Open menu':'Abrir menú');
  if(languageButton){languageButton.textContent=language==='en'?'ES':'EN';languageButton.setAttribute('aria-label',language==='en'?'Switch language to Spanish':'Cambiar idioma a inglés');}
  document.querySelectorAll('.hero-frame img').forEach(image=>image.alt=language==='en'?'Portrait of Cristel, digital services professional':'Retrato de Cristel O., profesional de servicios digitales');
  document.querySelectorAll('.about-photo img').forEach(image=>image.alt=language==='en'?'Cristel in a warm, professional portrait':'Cristel, retrato profesional con suéter beige');
  const projectAlts=language==='en'?['PediaClinic childhood vaccination schedule infographic','PediaClinic mask use information design','PediaClinic COVID-19 prevention graphic','Softgel nail promotion for Studio Eleven','Polygel nail promotion for Studio Eleven','Studio Eleven salon location promotion','TDAH en Stereo podcast graphic','Illustrated hosts of TDAH en Stereo','Illustrated TDAH en Stereo hosts','Dorenio project presentation','Dorenio graphic about Google Maps visibility','Dorenio brand symbol']:['Infografía del esquema de vacunación infantil de PediaClinic','Diseño informativo de uso de cubrebocas para PediaClinic','Pieza preventiva de COVID-19 para PediaClinic','Promoción de Softgel creada para Studio Eleven','Promoción de Polygel para Studio Eleven','Promoción de sucursal Studio Eleven','Gráfica del pódcast TDAH en Stereo','Ilustración de anfitriones de TDAH en Stereo','Anfitriones ilustrados de TDAH en Stereo','Presentación del proyecto Dorenio','Pieza de Dorenio sobre presencia en Google Maps','Símbolo de la marca Dorenio'];
  document.querySelectorAll('#trabajo .project-image img').forEach((image,index)=>{if(projectAlts[index])image.alt=projectAlts[index]});
  document.querySelectorAll('[data-carousel]').forEach((carousel,index)=>{
    const names=language==='en'?['PediaClinic gallery','Studio Eleven gallery','TDAH en Stereo gallery','Dorenio gallery']:['Carrusel de piezas de PediaClinic','Carrusel de piezas para Studio Eleven','Carrusel de identidad para TDAH en Stereo','Carrusel del proyecto Dorenio'];
    carousel.setAttribute('aria-label',names[index]||names[0]);
    carousel.querySelectorAll('.carousel-arrow').forEach(button=>button.setAttribute('aria-label',language==='en'?(button.classList.contains('carousel-prev')?'Previous image':'Next image'):(button.classList.contains('carousel-prev')?'Imagen anterior':'Imagen siguiente')));
    carousel.querySelectorAll('.carousel-dot').forEach((button,i)=>button.setAttribute('aria-label',language==='en'?`View image ${i+1}`:`Ver imagen ${i+1}`));
    carousel.querySelectorAll('.carousel-slide').forEach((slide,i)=>slide.setAttribute('aria-label',language==='en'?`${i+1} of ${carousel.querySelectorAll('.carousel-slide').length}`:`${i+1} de ${carousel.querySelectorAll('.carousel-slide').length}`));
  });
  const defaultMessage=language==='en'?'Hi Cristel, I’d like to get a quote for your digital services.':'Hola Cristel, quiero cotizar tus servicios digitales.';
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link=>{
    const label=link.dataset.package;
    const packageTranslation={'Redes Esencial':'Social media — Essential','Redes En movimiento':'Social media — In Motion','Redes Integral':'Social media — Complete','Sitio web Esencial':'Essential website','Sitio web Plus':'Plus website','Sitio web Premium':'Premium website'};
    const message=label?(language==='en'?`Hi Cristel, I’d like a quote for: ${packageTranslation[label]||label}. Can we discuss my project?`:`Hola Cristel, me interesa cotizar: ${label}. ¿Podemos conversar sobre mi proyecto?`):defaultMessage;
    link.href=`https://wa.me/529995481209?text=${encodeURIComponent(message)}`;
  });
  const subject=language==='en'?'Digital services quote':'Cotización de servicios digitales';
  const body=language==='en'?'Hi Cristel, I’d like to get a quote for a project. Here are some details:':'Hola Cristel, me gustaría cotizar un proyecto. Te comparto más detalles:';
  document.querySelectorAll('a[href^="mailto:"]').forEach(link=>{link.href=`mailto:kc.ojeda2409@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
  try{localStorage.setItem('cristel-language',language)}catch{}
}
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',currentLanguage==='en'?(open?'Close menu':'Open menu'):(open?'Cerrar menú':'Abrir menú'));
});
nav?.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.querySelector('#language-toggle')?.addEventListener('click',()=>applyLanguage(currentLanguage==='es'?'en':'es'));
try{applyLanguage(localStorage.getItem('cristel-language')==='en'?'en':'es')}catch{applyLanguage('es')}
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
