\
/* =============== JS: Nova College Fest =============== */
(function(){
  // Navigation current link highlighting (simple)
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a=>{
    const target = a.getAttribute('href');
    if (target === here) a.setAttribute('aria-current','page');
  });

  // Schedule filter
  const filter = document.getElementById('filter');
  if (filter){
    filter.addEventListener('change', ()=>{
      const cat = filter.value;
      document.querySelectorAll('#scheduleTable tbody tr').forEach(tr=>{
        const ok = (cat === 'all') || tr.dataset.cat === cat;
        tr.style.display = ok ? '' : 'none';
      });
    });
  }

  // Registration form handling (store locally and show confirmation)
  const form = document.getElementById('registrationForm');
  const alertBox = document.getElementById('formAlert');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const selectedEvents = fd.getAll('events');
      if (selectedEvents.length === 0){
        show('Please select at least one event.', 'error');
        return;
      }
      if (!fd.get('consent')){
        show('You must agree to the code of conduct.', 'error');
        return;
      }
      // Generate a lightweight registration object
      const reg = Object.fromEntries(fd.entries());
      reg.events = selectedEvents;
      reg.timestamp = new Date().toISOString();
      reg.id = 'NC-' + new Date().getFullYear() + '-' + Math.random().toString(36).slice(2,8).toUpperCase();
      // Persist to localStorage
      const key = 'novafest_registrations';
      const all = JSON.parse(localStorage.getItem(key) || '[]');
      all.push(reg);
      localStorage.setItem(key, JSON.stringify(all));
      // Show success
      show('✅ Registration received! Your ID is <strong>'+reg.id+'</strong>. A confirmation email will follow.', 'success');
      form.reset();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  function show(msg, type){
    if (!alertBox) return;
    alertBox.className = type;
    alertBox.innerHTML = msg;
  }

  // Click to sort columns (desktop convenience)
  const table = document.getElementById('scheduleTable');
  if (table){
    table.querySelectorAll('th').forEach((th, i)=>{
      th.style.cursor = 'pointer';
      th.addEventListener('click', ()=>{
        const rows = Array.from(table.querySelectorAll('tbody tr')).filter(tr => tr.style.display !== 'none');
        const asc = th.dataset.asc = !(th.dataset.asc === 'true');
        rows.sort((a,b)=>{
          const A = a.children[i].textContent.trim();
          const B = b.children[i].textContent.trim();
          return asc ? A.localeCompare(B) : B.localeCompare(A);
        });
        rows.forEach(r=>table.querySelector('tbody').appendChild(r));
      });
    });
  }
})();
