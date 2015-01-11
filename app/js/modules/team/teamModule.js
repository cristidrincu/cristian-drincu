angular.module('cristiandrincu.teamModule', ['cristiandrincu.team.controllers', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('teamPage', {
			url: '/team'
		})
	}])