"use strict";

angular.module('cristiandrincu',
	[
		'ngResource',
		'cristiandrincu.homeModule',
		'cristiandrincu.aboutModule',
		'cristiandrincu.teamModule',
		'cristiandrincu.portfolioModule',
		'cristiandrincu.contactModule',
		'bootstrapLightbox'
	])
	.run(['$state', function($state){
		$state.go('homePage');
	}])
