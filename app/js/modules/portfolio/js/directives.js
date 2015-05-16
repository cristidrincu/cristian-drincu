"use strict";

angular.module('cristiandrincu.portfolio.directives', [])
	.directive('contentLoading', function(){
			return {
				restrict: 'A',
				replace: true,
				transclude: true,
				scope: {
					loading: '=contentLoading'
				},
				templateUrl: 'js/modules/portfolio/views/loading.html',
				link: function(scope, element, attrs){
					var spinner = new Spinner().spin();
					var loadingContainer = element.find('.my-loading-spinner-container')[0];
					loadingContainer.appendChild(spinner.el);
				}
			}
	})
	.directive('containerTeamProject', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/modules/portfolio/views/directive-templates/project-team-members.html'
		}
	})
	.directive('projectComplexity', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/modules/portfolio/views/directive-templates/project-complexity.html'
		}
	})
	.directive('projectImages', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/modules/portfolio/views/directive-templates/portfolio-images.html'
		}
	})
