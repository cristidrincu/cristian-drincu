$(document).ready(function(){

	//default element and behaviour;
	var selectedElement = $('#btn-discover-my-team');
	selectedElement.addClass('active-btn');
	$('#synopsis-team').stop(true, true).slideDown().addClass('slided-element');

	$(document).on("click", "#btn-discover-my-team", function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');

		$('.slided-element').slideUp();
		$('#synopsis-team').stop(true, true).slideDown().addClass('slided-element');
	});

	$(document).on("click", "#btn-discover-my-friends", function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');

		$('.slided-element').slideUp();
		$('#synopsis-friends').stop(true, true).slideDown().addClass('slided-element');
	});

	$(document).on("click", "#btn-discover-our-goal", function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');

		$('.slided-element').slideUp();
		$('#synopsis-goal').stop(true, true).slideDown().addClass('slided-element');
	});

});
