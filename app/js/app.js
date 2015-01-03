angular.module('cristiandrincu', ['ngResource', 'cristiandrincu.aboutModule', 'cristiandrincu.portfolioModule'])
	.run(['$state', function($state){
		$state.go('allProjects.projects2007');
	}]);
