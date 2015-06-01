"use strict";

angular.module('cristiandrincu.portfolio.controllers', [])
	.controller('PortfolioController', ['$state', '$stateParams', '$scope', 'Portfolio', '$location', 'Lightbox', '$localStorage', function ($state, $stateParams, $scope, Portfolio, Lightbox, $localStorage) {
		$scope.loadingProjects = true;
		$scope.portfolioType = $stateParams.type;
		$scope.portfolioYear = $stateParams.year;


		function init() {
			//you can use an {} to configure the query - Portfolio.query({limit: limit}) for example
			Portfolio.query(function(projects){
				var projects = _.filter(projects, function(project){
					return project.published === $stateParams.year && project.type === $stateParams.type;
				});

				$scope.projects = projects;
				$scope.loadingProjects = false;
			});
		}

		$scope.loadGraphicsProjects = function(){
			$state.go('allProjects.projects', {year: '2007', type: 'graphic design'});
		};

		$scope.loadWebDevelopmentProjects = function(){
			$state.go('allProjects.projects', {year: '2007', type: 'web development'});
		};

		$scope.loadPersonalProjects = function(){
			$state.go('allProjects.projects', {year: '2014', type:'personal'});
		};

		init();

	}])
	.controller('PortfolioDetailsController', ['$stateParams', '$state', '$scope', 'Portfolio', 'Lightbox', '$localStorage', function ($stateParams, $state, $scope, Portfolio, Lightbox, $localStorage) {

		$scope.loadingProjects = true;
        var projectsIds = [];

		function initProjectDetails () {

			$scope.portfolioDetail = Portfolio.get({id: $stateParams.id}, function(project){
				$scope.loadingProjects = false;
				return project;
			});

            Portfolio.query(function(projects){
                $localStorage.projectsIds = projects.map(function(project) {
                    return project._id;
                });
            });

            projectsIds = $localStorage.projectsIds;
		}

		$scope.isPrevEnabled = function () {
            return projectsIds.indexOf($stateParams.id) > 0;
		};

		$scope.isNextEnabled = function () {
            return projectsIds.indexOf($stateParams.id) < projectsIds.length - 1;
		};

		$scope.gotoPrevProject = function () {
            $state.go('allProjects.projectDetail', {
                id: projectsIds[projectsIds.indexOf($stateParams.id) - 1]
            });
		};

		$scope.gotoNextProject = function () {
            $state.go('allProjects.projectDetail', {
                id: projectsIds[projectsIds.indexOf($stateParams.id) + 1]
            });
		};

		//this refers to the controller in our case. when using this inside a $scope function, this refers to the $scope
		this.retrieveImages = function(){
			var images = [];
			Portfolio.get({id: $stateParams.id}, function(project){
				project.projectImages.forEach(function(image){
					images.push(image);
				});
			});

			return images;
		}

		$scope.images = this.retrieveImages();

		$scope.openLightboxModal = function(index){
			Lightbox.openModal($scope.images, index);
		};

		initProjectDetails();

	}])
    .filter('makeUppercase', function () {
        return function(item) {
            return item.toUpperCase();
        }
    })
