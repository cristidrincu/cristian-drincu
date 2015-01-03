$(document).ready(function(){

	//default element and behaviour;


	var selectedElement = $('#btn-discover-mission');
	selectedElement.addClass('active-btn');

	$('#btn-discover-mission').on('click', function(){

		//create a method for the 3 lines
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		$('.mission-description').stop(true, true).slideDown().show().addClass('slided-element');
	});

	$('#btn-discover-beliefs').on('click', function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		$('.beliefs-description').stop(true, true).slideDown().show().addClass('slided-element');
	});

	$('#btn-discover-skills').on('click', function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		$('.skills-description').stop(true, true).slideDown().show().addClass('slided-element');
		$('.skills-timeline').stop(true, true).slideDown(1000).show();
	});

	$('.close-skills').on({
		click: function(){
			$('.skills-timeline').stop(true, true).slideUp(1000);
		}
	})
});
