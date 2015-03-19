angular.module('cristiandrincu.portfolio.controllers', [])
	.controller('PortfolioController', ['$state', '$stateParams', '$scope', 'Portfolio', '$location', 'Lightbox', function ($state, $stateParams, $scope, Portfolio) {
		$scope.loadingProjects = true;
		$scope.portfolioType = $stateParams.type;

		//you can use an {} to configure the query - Portfolio.query({limit: limit}) for example
		Portfolio.query(function(projects){
			var projects = _.filter(projects, function(project){
				return project.published === $stateParams.year && project.type === $stateParams.type;
			});

			$scope.projects = projects;
		  $scope.loadingProjects = false;
		});

		$scope.loadGraphicsProjects = function(){
			$state.go('allGraphicsProjects.projectsGraphic2007', {year: '2007', type: 'graphic design'});
		}

		$scope.loadWebDevelopmentProjects = function(){
			$state.go('allProjects.projects2007', {year: '2007', type: 'web development'});
		}

		$scope.loadPersonalProjects = function(){
			$state.go('allPersonalProjects.personal2014', {year: '2014', type:'personal'});
		}

	}])
	.controller('PortfolioDetailsController', ['$stateParams', '$scope', 'Portfolio', 'Lightbox', function ($stateParams, $scope, Portfolio, Lightbox) {
		$scope.portfolioDetail = Portfolio.get({id: $stateParams.id}, function(project){
			return project;
		});

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
		}
	}]);
