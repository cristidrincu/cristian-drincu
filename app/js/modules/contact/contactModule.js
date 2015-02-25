angular.module('cristiandrincu.contactModule', ['cristiandrincu.contact.controllers','ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('contactPage', {
			url: '/contact',
			abstract: true,
			template: '<ui-view></ui-view>'
		}).state('contactPage.contactDetails', {
			url: '/details',
			templateUrl: 'js/modules/contact/views/contact.html',
			controller: 'ContactController'
		})
	}]);