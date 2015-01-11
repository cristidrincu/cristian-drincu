angular.module('cristiandrincu', ['ngResource','cristiandrincu.homeModule', 'cristiandrincu.aboutModule', 'cristiandrincu.portfolioModule'])
	.run(['$state', function($state){
		$state.go('homePage');
	}]);
