/* ═══════════════════════════════════════
   APEX — SHARED JAVASCRIPT
═══════════════════════════════════════ */

/* LOADER */
window.addEventListener('load', () => {
  setTimeout(() => {
    const l = document.getElementById('loader');
    if (l) l.classList.add('gone');
  }, 1600);
});

/* NAV SCROLL */
(function() {
  const nav = document.getElementById('navbar');
  const st  = document.getElementById('scroll-top');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    if (st) st.classList.toggle('visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();

/* HAMBURGER */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* SCROLL TOP */
function goTop() { window.scrollTo({top:0,behavior:'smooth'}); }

/* NEWSLETTER */
function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function subNewsletter() {
  const inp = document.getElementById('nl-email');
  const msg = document.getElementById('nl-msg');
  if (!inp||!msg) return;
  inp.classList.remove('err'); msg.className='nl-msg';
  if (!isEmail(inp.value.trim())) {
    inp.classList.add('err'); msg.className='nl-msg err-msg';
    msg.textContent='Please enter a valid email.'; return;
  }
  inp.value=''; msg.className='nl-msg ok';
  msg.textContent='✓ Subscribed! Watch your inbox.';
  setTimeout(()=>{msg.textContent='';msg.className='nl-msg';},5000);
}
document.addEventListener('DOMContentLoaded', function() {
  const ni = document.getElementById('nl-email');
  if (ni) ni.addEventListener('keydown', e => { if(e.key==='Enter') subNewsletter(); });
});

/* FORM VALIDATION HELPERS */
function setErr(gid, show) {
  const g = document.getElementById(gid); if(!g) return;
  g.classList.toggle('has-error', show);
  const f = g.querySelector('input,select,textarea');
  if (f) f.classList.toggle('error', show);
}
function clearErrs(ids) { ids.forEach(id => setErr(id, false)); }
function isPhone(v) { return /^[\d\s\+\-\(\)]{7,20}$/.test(v.trim()); }
