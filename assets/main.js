// Basic data for projects - edit to add your own projects
const projects = [
  {
    id: 'p1',
    title: 'Network Monitoring Dashboard',
    short: 'Real-time network traffic visualization and anomaly detection.',
    desc: 'A dashboard built with HTML/CSS/JS to visualize network traffic patterns and detect potential security threats using basic anomaly detection algorithms.',
    links: [{label:'Demo',url:'#'},{label:'GitHub',url:'#'}]
  },
  {
    id: 'p2',
    title: 'Threat Intelligence Feed',
    short: 'Aggregator for security feeds with automated OSINT enrichment.',
    desc: 'Python-based threat intel aggregator that pulls from multiple sources, enriches with OSINT data, and provides a clean API for integration.',
    links: [{label:'Demo',url:'#'},{label:'GitHub',url:'#'}]
  }
];

// Labs & demos - cybersecurity focused
const labs = [
  {
    id: 'l1',
    title: 'Password Strength Analyzer',
    short: 'Client-side password entropy calculator.',
    desc: 'Interactive tool to analyze password strength using entropy calculations, common pattern detection, and dictionary checks.',
    tech: 'JavaScript, ZXCVBN',
    links: [{label:'Try it',url:'#'},{label:'Source',url:'#'}]
  },
  {
    id: 'l2',
    title: 'SIEM Query Builder',
    short: 'Visual query builder for SIEM platforms.',
    desc: 'A visual interface to build complex queries for Splunk/ELK with syntax highlighting and validation.',
    tech: 'React, Monaco Editor',
    links: [{label:'Demo',url:'#'},{label:'GitHub',url:'#'}]
  },
  {
    id: 'l3',
    title: 'Phishing Email Analyzer',
    short: 'Static analysis tool for suspicious emails.',
    desc: 'Analyzes email headers, links, and attachments to identify phishing indicators using heuristics and reputation checks.',
    tech: 'Python, VirusTotal API',
    links: [{label:'Tool',url:'#'},{label:'Source',url:'#'}]
  }
];

// DOM helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function renderProjects(){
  const grid = $('#projectsGrid');
  if(!grid) return;
  projects.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.tabIndex = 0;
    el.innerHTML = `<h4>${p.title}</h4><p>${p.short}</p>`;
    el.addEventListener('click', ()=> openModal(p));
    el.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openModal(p); });
    grid.appendChild(el);
  })
}

function renderLabs(){
  const grid = $('#labsGrid');
  if(!grid) return;
  labs.forEach(l => {
    const el = document.createElement('article');
    el.className = 'card';
    el.tabIndex = 0;
    el.innerHTML = `<h4>${l.title}</h4><p class="lab-meta">${l.tech}</p><p>${l.short}</p>`;
    el.addEventListener('click', ()=> openModal(l));
    el.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openModal(l); });
    grid.appendChild(el);
  })
}

function openModal(project){
  const modal = $('#modal');
  $('#modalTitle').textContent = project.title;
  $('#modalDesc').textContent = project.desc;
  const links = $('#modalLinks');
  links.innerHTML = project.links.map(l=>`<a class="btn" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join(' ');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  const modal = $('#modal');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function initModalEvents(){
  document.addEventListener('click', (e)=>{
    if(e.target.matches('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', (e)=>{
    const modal = $('#modal');
    if(modal.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') closeModal();
  });
}

function initNavToggle(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn.addEventListener('click', ()=>{
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
  })
}

function init(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  // Only render projects/labs if the grids exist (for backwards compatibility)
  if(document.getElementById('projectsGrid')) renderProjects();
  if(document.getElementById('labsGrid')) renderLabs();
  initModalEvents();
  // Wait for header/footer partials to be injected, then initialize nav
  waitForElement('.nav').then(()=>{
    initNavToggle();
  }).catch(()=>{});
}

document.addEventListener('DOMContentLoaded', init);

// small helper to wait for element to appear in DOM (used for partials)
function waitForElement(selector, timeout = 2000){
  return new Promise((resolve, reject)=>{
    const el = document.querySelector(selector);
    if(el) return resolve(el);
    const observer = new MutationObserver(()=>{
      const found = document.querySelector(selector);
      if(found){
        observer.disconnect();
        resolve(found);
      }
    });
    observer.observe(document.body, {childList:true, subtree:true});
    setTimeout(()=>{
      observer.disconnect();
      reject(new Error('Timed out waiting for ' + selector));
    }, timeout);
  });
  }