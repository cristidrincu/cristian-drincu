$(document).ready(function(){

	var selectedElement = $('#btn-discover-mission');
	var returnToMainAboutSection = $('.return-to-main-about-section');

	var scrollDistanceSquareLogos = "-60";
	var scrollDistanceHorizontalLogos = "-60";

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

	//SKILLS TIMELINE SECTION BEGINS HERE
	$(document).on("click", "#btn-discover-skills", function(){
		selectedElement.removeClass('active-btn');
		selectedElement = $(this);
		selectedElement.addClass('active-btn');
		$('.slided-element').slideUp();
		$('.skills-timeline').stop(true, true).slideDown(1000).show();
	});

	$(document).on("click", "#discover-photoshop-skill", function(){
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

	$(document).on("click", "#discover-flash-skill", function(){
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

	$(document).on("click", "#discover-xml-skill", function(){
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

	$(document).on("click", "#discover-html-skill", function(){
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

	$(document).on("click", "#discover-css-skill", function(){
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

	$(document).on("click", "#discover-javascript-skill", function(){
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

	$(document).on("click", "#discover-java-skill", function(){
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

	$(document).on("click", "#discover-mysql-skill", function(){
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

	$(document).on("click", "#discover-hibernate-skill", function(){
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

	$(document).on("click", "#discover-nodejs-skill", function(){
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

	$(document).on("click", "#discover-mongodb-skill", function(){
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

	$(document).on("click", "#discover-angularjs-skill", function(){
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

	$(document).on("click", "#discover-swift-skill", function(){
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

	$(document).on("click", ".close-skills", function(){
		$('#btn-discover-skills').removeClass('active-btn');
		$('.skills-timeline').stop(true, true).slideUp(1000);
	});
});
