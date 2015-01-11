angular.module('cristiandrincu',
	[
		'ngResource',
		'cristiandrincu.homeModule',
		'cristiandrincu.aboutModule',
		'cristiandrincu.teamModule',
		'cristiandrincu.portfolioModule',
		'cristiandrincu.contactModule'
	])
	.run(['$state', function($state){
		$state.go('homePage');
	}]);
