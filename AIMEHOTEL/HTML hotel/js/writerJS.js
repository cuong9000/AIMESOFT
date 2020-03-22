
$(document).ready(function(){
	$(".link_about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	});
	$(".link_feature").click(function() {
		$('html, body').animate({
			scrollTop: $("#feature").offset().top
		}, 1000);
	});
	$(".link_tech").click(function() {
		$('html, body').animate({
			scrollTop: $("#tech").offset().top
		}, 1000);
	});
	$(".link_benefit").click(function() {
		$('html, body').animate({
			scrollTop: $("#benefit").offset().top
		}, 1000);
	});
	$(".link_contact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
	
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#eclipse4').eclipse({
						margin: 10,
						slidesToShow: 3,
						slidesToMove: 2,
					autoplay: true,
					interval: 3000,
					autoControl: true
                });
	}
	else 
	{
		$('#eclipse4').eclipse({
				margin: 20,
				slidesToShow: 5,
				slidesToMove: 1,
				autoplay: true,
					interval: 3000,
					autoControl: true
		});
	}
});

