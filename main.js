const hamburger_icon = document.querySelector('.hamburger')
const navlist =  document.querySelector(' .nav-list ')	;
 
 hamburger_icon.addEventListener('click',()=>
 {
 	 navlist.classList.toggle('open');
 	 hamburger_icon.classList.toggle('active');
 });
