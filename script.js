document.addEventListener('DOMContentLoaded',function(){
  var l=document.getElementById('loader-wrapper'); if(l)l.style.display='none';
  document.querySelectorAll('.fade-in').forEach(function(el){
    setTimeout(function(){el.classList.add('appear');}, parseInt(el.dataset.delay)||0);
  });
});