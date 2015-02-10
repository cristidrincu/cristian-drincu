angular.module('cristiandrincu.backendMembers', ['cristiandrincu.members.controllers', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('membersPage', {
			url: '/members'
		});
	}]);