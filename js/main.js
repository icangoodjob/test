$(function(){
	$('.slider').slick({
		arrows: false,
		fade: true,
		autoplay: 3000,
		dots: true
	});

	$('.header-btn').on('click', function(){
	$('.menu').addClass('active');
});
	$('.close-btn').on('click', function(){
		$('.menu').removeClass('active');
	});
});

var videoTrigger = document.getElementsByClassName("video__btn")[0];
var videoPlay = document.getElementsByClassName("video__content")[0];

function videoStart() {
	videoPlay.style.display="block";
	videoTrigger.style.display="none";
}