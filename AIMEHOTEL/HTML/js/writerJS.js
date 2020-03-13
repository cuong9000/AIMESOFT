
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
});

