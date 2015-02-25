angular.module('cristiandrincu.aboutModule', ['cristiandrincu.about.controllers', 'cristiandrincu.about.directives', 'ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('aboutPage', {
			url: '/about',
			abstract: true,
			template: '<ui-view></ui-view>'
		})
		.state('aboutPage.aboutMe', {
				url: '/me',
				templateUrl: 'js/modules/about/views/about.html',
				controller: 'AboutController'
			})
		.state('aboutPage.aboutMyMission', {
				url: '/my-mission',
				templateUrl: 'js/modules/about/views/mission.html',
				controller: 'MissionController'
		})
		.state('aboutPage.aboutMyBeliefs', {
				url: '/my-beliefs',
				templateUrl: 'js/modules/about/views/beliefs.html',
				controller: 'BeliefsController'
			})
		.state('aboutPage.aboutMySkills', {
				url: '/my-skills',
				templateUrl: 'js/modules/about/views/skills-timeline.html',
				controller: 'SkillsController'
			})
	}]);
