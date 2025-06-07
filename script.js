document.addEventListener('DOMContentLoaded',function(){
  var l=document.getElementById('loader-wrapper'); if(l) l.style.display='none';
  document.querySelectorAll('.fade-in').forEach(function(el){
    setTimeout(function(){ el.classList.add('appear'); }, parseInt(el.dataset.delay)||0);
  });
  var nav=document.getElementById('main-nav'), u=localStorage.getItem('authUser'), links='';
  links+='<a href="index.html">Home</a>';
  if(u){ links+='<a href="dashboard.html">Dashboard</a><a href="#" id="logout">Logout</a>'; }
  else{ links+='<a href="login.html">Login</a><a href="signup.html">Sign Up</a>'; }
  links+='<a href="https://sideload.wiki" target="_blank">Docs</a>';
  links+='<a href="admin.html">Admin</a>';
  links+='<a href="https://discord.gg/vK7pmqnR" target="_blank">Discord</a>';
  nav.innerHTML=links;
  var lo=document.getElementById('logout');
  if(lo) lo.addEventListener('click',function(){ localStorage.removeItem('authUser'); location='index.html'; });
});