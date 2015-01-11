angular.module('cristiandrincu.home.controllers', [])
	.controller('HomeController', ['$scope', '$state', function($scope, $state){
		$scope.loadHomePage = function(){
			$state.go('homePage');
		}
	}])