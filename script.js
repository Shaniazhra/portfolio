(function(){
  var d=document;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  d.querySelectorAll('.reveal,.reveal-right,.reveal-up').forEach(function(el,i){
    el.style.transitionDelay=((i%4)*90)+'ms';io.observe(el)});

  var nav=d.getElementById('nav'),bar=d.getElementById('progress'),top=d.getElementById('totop');
  var links=[].slice.call(d.querySelectorAll('#menu a'));
  var secs=links.map(function(a){return d.querySelector(a.getAttribute('href'))});
  function onScroll(){
    var y=window.scrollY,h=d.documentElement.scrollHeight-innerHeight;
    bar.style.width=(h>0?y/h*100:0)+'%';
    nav.classList.toggle('solid',y>30);
    top.classList.toggle('show',y>600);
    var cur=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=i});
    links.forEach(function(a,i){a.classList.toggle('active',i===cur)});
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  var b=d.getElementById('burger'),m=d.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  links.forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded',false)})});

  var lb=d.getElementById('lb'),li=lb.querySelector('img');
  d.querySelectorAll('.open').forEach(function(btn){btn.addEventListener('click',function(){li.src=btn.dataset.src;lb.hidden=false})});
  lb.addEventListener('click',function(){lb.hidden=true});
  addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
})();
