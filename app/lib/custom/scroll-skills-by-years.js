$(document).ready(function(){

	var totalSlides = 5;

	$('#right-scroll-button').click(function(event) {
		event.preventDefault();
		if(totalSlides == 1){
		$('#container-years').animate({
				marginLeft: "+=0"
			}, "fast");
		}else {
			totalSlides--;
			$('#container-years').animate({
				marginLeft: "-=980px"
			}, "fast");
		}
	});

	$('#left-scroll-button').click(function(event) {
		event.preventDefault();
		if(totalSlides == 5){
		$('#container-years').animate({
				marginLeft: "+=0"
			}, "fast");
		}else{
			totalSlides++;
			$('#container-years').animate({
				marginLeft: "+=980px"
			}, "fast");
		}
	});
});
