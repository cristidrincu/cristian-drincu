angular.module('cristiandrincu.about.controllers', [])
	.controller('AboutController', ['$scope', function($scope){

		$scope.loadDefaultTemplate = true;
		$scope.defaultTemplate =
			{
				name: 'about.html', url: 'js/modules/about/views/about.html'
			};

		$scope.templates =
			[
				{ name: 'about.html', url: 'js/modules/about/views/about.html' },
				{ name: 'mission.html', url: 'js/modules/about/views/mission.html' },
				{ name: 'beliefs.html', url: 'js/modules/about/views/beliefs.html'}
			]

		$scope.loadTemplate = function(templateNumber){
			$scope.loadDefaultTemplate = false;
			switch (templateNumber){
				case 0:
					$scope.template = $scope.templates[0];
				break;
				case 1:
					$scope.template = $scope.templates[1]
				break;
				case 2:
					$scope.template = $scope.templates[2];
				break;
			}
		}
	}]);
