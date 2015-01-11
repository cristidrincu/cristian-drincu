angular.module('cristiandrincu.team.controllers', [])
	.controller('TeamController', ['$scope', '$state', function($scope, $state){
		$scope.loadTeamView = function(){
			$state.go('teamPage');
		}
	}]);