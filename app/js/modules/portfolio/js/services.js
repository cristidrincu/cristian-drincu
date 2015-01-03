angular.module('cristiandrincu.portfolio.services', [])
	.factory('Portfolio', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
		return $resource(API_ENDPOINT, {id: '@_id'}, {
			update: {
				method: 'PUT'
			}
		})
	}]).value('API_ENDPOINT', 'http://localhost:5000/api/portfolio/:id');
