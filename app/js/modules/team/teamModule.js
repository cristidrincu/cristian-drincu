angular.module('cristiandrincu.teamModule', ['cristiandrincu.team.controllers', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('teamPage', {
			url: '/team',
			abstract: true,
			template: '<ui-view></ui-view>'
		})
		$stateProvider.state('teamPage.detailedTeam', {
			url: '/details',
			templateUrl: 'js/modules/team/views/team.html',
			controller: 'TeamController'
		})
	}])