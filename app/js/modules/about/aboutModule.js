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
		.state('aboutPage.aboutMySkills.skills2002', {
				url: '/2002-first-job-first-challenge-flash',
				templateUrl: 'js/modules/about/views/partials/skills-2002.html'
		})
		.state('aboutPage.aboutMySkills.skills2007', {
				url: '/2007-html-css-javascript',
				templateUrl: 'js/modules/about/views/partials/skills-2007.html'
		})
		.state('aboutPage.aboutMySkills.skills2012', {
				url: '/2012-school-is-out',
				templateUrl: 'js/modules/about/views/partials/skills-2012.html'
		})
		.state('aboutPage.aboutMySkills.skills2014', {
				url: '/2014-javascript-everywhere',
				templateUrl: 'js/modules/about/views/partials/skills-2014.html'
		})
		.state('aboutPage.aboutMySkills.skills2015', {
				url: '/2015-a-fresh-start',
				templateUrl: 'js/modules/about/views/partials/skills-2015.html'
		})
	}]);
