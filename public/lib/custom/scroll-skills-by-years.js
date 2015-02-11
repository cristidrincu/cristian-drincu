$(document).ready(function(){

	var totalSlides = 5;

	$(document).on("click", "#right-scroll-button", function(){
		event.preventDefault();

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('.active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast").removeClass('active-icon-skill');

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

	$(document).on("click", "#left-scroll-button", function(){
		event.preventDefault();

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('.active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast").removeClass('active-icon-skill');

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
