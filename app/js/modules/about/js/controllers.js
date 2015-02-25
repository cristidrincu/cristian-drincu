angular.module('cristiandrincu.about.controllers', [])
	.controller('AboutController', ['$scope', '$state', function($scope, $state){

		$scope.loadAboutView = function(){
			$state.go('aboutPage.aboutMe');
		}
	}])
	.controller('MissionController', ['$scope', '$state', function($scope, $state){
		$scope.loadMissionView = function(){
			$state.go('aboutPage.aboutMyMission');
		}
	}])
	.controller('BeliefsController', ['$scope', '$state', function($scope, $state){
		$scope.loadBeliefsView = function(){
			$state.go('aboutPage.aboutMyBeliefs')
		}
	}])
	.controller('SkillsController', ['$scope', '$state', function($scope, $state){
		$scope.loadSkillsTimeline = function(){
			$state.go('aboutPage.aboutMySkills');
		}
	}])
