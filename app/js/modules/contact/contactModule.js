angular.module('cristiandrincu.contactModule', ['cristiandrincu.contact.controllers','ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('contactPage', {
			url: '/contact'
		});
	}]);