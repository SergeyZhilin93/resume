$(document).ready(function() {

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});

  $('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
  });

  $('.header-navigation__link, .footer-navigation__link').click(function(e){
  	e.preventDefault()
  	var attr = $(this).attr('href')
  	$('html, body').animate({scrollTop:$(attr).position().top}, 1000);
  })
})