

window.addEventListener('scroll', ()=> {
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu(){
	const menuToggle = document.querySelector('.menuToggle');
	const navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}

var $target = $('.anime'),
	animationClass = 'anime-start';
	offset = $(window).height() * 3/4;
function animeScroll(){
	var documentTop = $(document).scrollTop();
	$target.each(function() {
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	})
}
animeScroll();
$(document).scroll(function() {
	animeScroll();
})



