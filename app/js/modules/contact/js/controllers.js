"use strict";

angular.module('cristiandrincu.contact.controllers', [])
	.controller('ContactController', ['$scope', '$state', function($scope, $state){
		$scope.loadContactView = function(){
			$state.go('contactPage.contactDetails');
		}
	}]);
