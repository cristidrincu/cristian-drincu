angular.module('cristiandrincu.portfolio.controllers', [])
	.controller('PortfolioController', ['$state', '$stateParams', '$scope', 'Portfolio', '$location', function ($state, $stateParams, $scope, Portfolio) {
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
	.controller('PortfolioDetailsController', ['$stateParams', '$scope', 'Portfolio', function ($stateParams, $scope, Portfolio) {
		Portfolio.get({id: $stateParams.id}, function(project){
			$scope.portfolioDetail = project;

			if(project.projectWebLink.length > 0){
				//if the project is online, get the project link
				$scope.projectStatus = project.projectWebLink;
			}else{
				//if the project is offline, set the project status to an empty string and get the github link for the project code
				$scope.projectStatus = '';
				$scope.gitHubLink = project.projectGitHubLink;
			}
		});
	}]);
