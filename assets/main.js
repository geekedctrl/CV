const siteRoot = new URL('../', document.currentScript.src);
async function loadPartial(id, path) {
 const target = document.getElementById(id);
 if (!target) return;
 try {
  const response = await fetch(new URL(path, siteRoot));
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  target.innerHTML = await response.text();
  target.querySelectorAll('[href^="/CV/"]').forEach(link => { link.href = new URL(link.getAttribute('href').slice(4), siteRoot).href; });
 } catch (error) { console.error(error); target.textContent = id === 'partial-header' ? 'Karthikean Pathmanathan' : ''; }
}
async function init() {
 await Promise.all([loadPartial('partial-header','partial/header.html'), loadPartial('partial-footer','partial/footer.html')]);
 const year = document.getElementById('year');
 if (year) year.textContent = new Date().getFullYear();
 const nav = document.getElementById('mainNav');
 const toggle = document.querySelector('.nav-toggle');
 const setMenu = open => { nav?.classList.toggle('active',open); toggle?.setAttribute('aria-expanded',String(open)); toggle?.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation'); };
 toggle?.addEventListener('click',() => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
 document.addEventListener('keydown',event => { if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); } });
 document.addEventListener('click',event => { if (!event.target.closest('.site-header')) setMenu(false); });
 const normalize = path => path.replace(/index\.html$/,'').replace(/\/$/,'') || '/';
 nav?.querySelectorAll('a').forEach(link => { if (!new URL(link.href).hash && normalize(new URL(link.href).pathname) === normalize(location.pathname)) link.setAttribute('aria-current','page'); link.addEventListener('click',() => setMenu(false)); });
 const tabs = document.querySelectorAll('.filter-tab');
 tabs.forEach(tab => { tab.setAttribute('aria-pressed',String(tab.classList.contains('active'))); tab.addEventListener('click',() => {
  tabs.forEach(item => { item.classList.toggle('active',item === tab); item.setAttribute('aria-pressed',String(item === tab)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = tab.dataset.filter !== 'all' && !card.dataset.category.split(' ').includes(tab.dataset.filter); });
 }); });
}
init();

// A lightweight, deterministic starfield. Animation stops when hidden or offscreen.
function initStarfield() {
 const canvas = document.getElementById('starfield');
 if (!canvas) return;
 const ctx = canvas.getContext('2d');
 if (!ctx) return;
 const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
 let width = 0, height = 0, stars = [], frame = 0, visible = true;
 function resize() {
  const bounds = canvas.getBoundingClientRect(); width = bounds.width; height = bounds.height;
  const ratio = Math.min(devicePixelRatio || 1, 2); canvas.width = width * ratio; canvas.height = height * ratio; ctx.setTransform(ratio,0,0,ratio,0,0);
  let seed = 42; const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  stars = Array.from({length: Math.floor(width * height / 3100)}, () => ({x:random()*width,y:random()*height,r:random()*.9+.25,a:random()*.5+.2,phase:random()*6.28}));
  draw(0);
 }
 function draw(time) {
  ctx.clearRect(0,0,width,height);
  for (const star of stars) { ctx.beginPath(); ctx.arc(star.x,star.y,star.r,0,Math.PI*2); const alpha = motion.matches ? star.a : star.a*(.75+.25*Math.sin(time*.0005+star.phase)); ctx.fillStyle=`rgba(218,209,255,${alpha})`; ctx.fill(); }
 }
 function tick(time) { frame = 0; draw(time); if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick); }
 function update() { if (frame) cancelAnimationFrame(frame); frame = 0; if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick); else draw(0); }
 resize(); window.addEventListener('resize',resize); document.addEventListener('visibilitychange',update); motion.addEventListener('change',update);
 new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); }).observe(canvas);
}
initStarfield();
