$(document).ready(function(){

	var selectedElement = $('#btn-discover-mission');
	selectedElement.addClass('active-btn');

	var scrollDistanceSquareLogos = "-60";
	var scrollDistanceHorizontalLogos = "-60";

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
		$('.skills-timeline').stop(true, true).slideDown(1000).show();
	});

	$('#discover-photoshop-skill').on('click', function(){
		$('.active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast").removeClass('active-icon-skill');

		$('.color-technology').removeClass('color-technology');
		$('#discover-photoshop-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#photoshop-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-flash-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-flash-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#flash-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-xml-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-xml-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#xml-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-html-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-html-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#html-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-css-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-css-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#css-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-javascript-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-javascript-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#javascript-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-java-skill').on('click', function(){
				$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
					marginTop: "0"
				}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-java-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#java-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-mysql-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-mysql-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#mysql-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-hibernate-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-hibernate-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#hibernate-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-nodejs-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-nodejs-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceHorizontalLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#nodejs-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-mongodb-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-mongodb-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceHorizontalLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#mongodb-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-angularjs-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-angularjs-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceHorizontalLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#angularjs-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('#discover-swift-skill').on('click', function(){
		$('.active-icon-skill').removeClass('active-icon-skill').stop(true, true).animate({
			marginTop: "0"
		}, "fast");

		$('.color-technology').removeClass('color-technology');
		$('#discover-swift-skill').addClass('color-technology');

		$(this).addClass('active-icon-skill').stop(true, true).animate({
			marginTop: scrollDistanceSquareLogos
		});

		$('.active-skill-text').stop(true, true).fadeOut(1000).removeClass('active-skill-text');
		$('#swift-text').stop(true, true).fadeIn(1000).show().addClass('active-skill-text');
	});

	$('.close-skills').on({
		click: function(){
			$('.skills-timeline').stop(true, true).slideUp(1000);
		}
	})
});
