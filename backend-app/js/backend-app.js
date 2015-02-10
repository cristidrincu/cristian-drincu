angular.module('backend',
	[
		'ngResource',
		'cristiandrincu.backendMembers'
	])
	.run(['$state', function($state){
		$state.go('homePageBackend');
}]);