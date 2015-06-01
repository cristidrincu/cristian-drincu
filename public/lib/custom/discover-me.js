$(document).ready(function(){

	var selectedElement = $('#btn-discover-mission');
	var returnToMainAboutSection = $('.return-to-main-about-section');

	$(document).on("click", returnToMainAboutSection, function(){
		selectedElement.removeClass('active-btn');
		$(this).fadeOut().hide();
	});

	$(document).on("click", "#btn-discover-mission", function(){
		//create a method for the 3 lines
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		returnToMainAboutSection.fadeIn().show();
		$('.mission-description').stop(true, true).slideDown().show().addClass('slided-element');
	});

	$(document).on("click", "#btn-discover-beliefs", function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		returnToMainAboutSection.fadeIn().show();
		$('.beliefs-description').stop(true, true).slideDown().show().addClass('slided-element');
	});
});
