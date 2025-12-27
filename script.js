/* ===========================
   Simple, clean JS (no libs)
   =========================== */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initTheme();
  initTyping();
  initNav();
  initProgress();
  initProjectsModal();
  initContactForm();
  initTopButton();
});

/* ---------- Year ---------- */
function setYear(){ $('#year').textContent = new Date().getFullYear(); }

/* ---------- Theme (persist) ---------- */
function initTheme(){
  const btn = $('#themeBtn');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');
  updateBtn();

  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
    updateBtn();
  });

  function updateBtn(){
    if (document.documentElement.classList.contains('light')) { btn.textContent = '☀'; btn.setAttribute('aria-pressed','true') }
    else { btn.textContent = '🌙'; btn.setAttribute('aria-pressed','false') }
  }
}

/* ---------- Typing (simple) ---------- */
function initTyping(){
  const texts = ['Frontend Developer','Web Designer','JavaScript Learner'];
  let i = 0, idx = 0, forward = true;
  const el = $('#typing');
  setInterval(() => {
    const str = texts[i];
    el.textContent = str.slice(0, idx);
    if (forward) idx++;
    else idx--;
    if (idx === str.length + 1) { forward = false; setTimeout(()=>{},300) }
    if (idx === 0) { forward = true; i = (i + 1) % texts.length; }
  }, 90);
}

/* ---------- Nav: smooth + mobile ---------- */
function initNav(){
  // smooth scroll
  $$('.nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // hide mobile menu if open
      if (window.innerWidth < 720) $('#navLinks').style.display = 'none';
    });
  });

  // mobile toggle
  $('#menuToggle').addEventListener('click', () => {
    const links = $('#navLinks');
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
  });
}

/* ---------- Skill progress animate on view ---------- */
function initProgress(){
  const nodes = $$('.progress');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = entry.target.dataset.value || 0;
        entry.target.querySelector('span').style.width = val + '%';
      }
    });
  }, {threshold: 0.4});
  nodes.forEach(n => io.observe(n));
}

/* ---------- Projects modal ---------- */
function initProjectsModal(){
  const modal = $('#modal');
  const modalTitle = $('#modalTitle');
  const modalDesc = $('#modalDesc');
  const modalCode = $('#modalCode');
  const modalClose = $('#modalClose');

  const projects = {
    todo: {
      title: 'To-Do List App',
      desc: 'Add, complete & delete tasks. Saves to localStorage so tasks persist on reload.',
      code: "// Example: save todos\nconst todos = JSON.parse(localStorage.getItem('todos') || '[]');"
    },
    calc: {
      title: 'Calculator',
      desc: 'Responsive calculator with keyboard support and basic expression evaluation.',
      code:"// safe eval approach (basic)\nfunction calc(expr){ try{return Function('return '+expr)(); }catch(e){return 'Err'} }"
    },
    portfolio: {
      title: 'Portfolio',
      desc: 'This portfolio: theme toggle, responsive layout, project modal and simple animations.',
      code: '/* Files: index.html, style.css, script.js */'
    }
  };

  $$('.viewBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.project;
      const p = projects[id];
      if (!p) return;
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalCode.textContent = p.code;
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.setAttribute('aria-hidden','true') });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.setAttribute('aria-hidden','true') });
}

/* ---------- Contact form (basic validation + toast) ---------- */
function initContactForm(){
  const form = $('#contactForm');
  const toast = $('#toast');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return showToast('Please fill all fields');
    if (!/^\S+@\S+\.\S+$/.test(email)) return showToast('Enter a valid email');

    form.reset();
    showToast('Message sent — I will reply soon!', true);
  });

  function showToast(text, success = false){
    toast.textContent = text;
    toast.style.display = 'block';
    toast.style.background = success ? 'linear-gradient(90deg,#16a34a,#4fd1c5)' : 'linear-gradient(90deg,var(--accent),var(--accent-2))';
    toast.setAttribute('aria-hidden','false');
    setTimeout(()=>{ toast.style.display = 'none'; toast.setAttribute('aria-hidden','true') }, 2600);
  }
}

/* ---------- Top button ---------- */
function initTopButton(){
  const topBtn = $('#topBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 260) topBtn.style.display = 'block';
    else topBtn.style.display = 'none';
  });
}