$(document).ready(function(){

	//default element and behaviour;
	var selectedElement = $('#btn-discover-my-team');
	selectedElement.addClass('active-btn');
	$('#synopsis-team').stop(true, true).slideDown().addClass('slided-element');

	$('#btn-discover-my-team').on({
		click: function(){
			selectedElement.removeClass('active-btn');
			selectedElement = $(this);
			selectedElement.addClass('active-btn');

			$('.slided-element').slideUp();
			$('#synopsis-team').stop(true, true).slideDown().addClass('slided-element');
		}
	});

	$('#btn-discover-my-friends').on({
		click: function(){
			selectedElement.removeClass('active-btn');
			selectedElement = $(this);
			selectedElement.addClass('active-btn');

			$('.slided-element').slideUp();
			$('#synopsis-friends').stop(true, true).slideDown().addClass('slided-element');
		}
	});

	$('#btn-discover-our-mission').on('click', function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');

		$('.slided-element').slideUp();
		$('#synopsis-story').stop(true, true).slideDown().addClass('slided-element');
	});

	$('#btn-discover-our-goal').on('click', function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');

		$('.slided-element').slideUp();
		$('#synopsis-goal').stop(true, true).slideDown().addClass('slided-element');
	});

});
