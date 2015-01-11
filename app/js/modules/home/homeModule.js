angular.module('cristiandrincu.homeModule', ['cristiandrincu.home.controllers', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('homePage', {
			url: '/'
		});
	}]);