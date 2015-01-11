angular.module('cristiandrincu.aboutModule', ['cristiandrincu.about.controllers', 'cristiandrincu.about.directives', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('aboutPage', {
			url: '/about'
		});
	}]);
