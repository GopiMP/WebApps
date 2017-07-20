var mod = angular.module('dkam', ['ui.router']);
mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('dkam_load',{
		url : '/dkam_load',    
		templateUrl : 'view/view_html/dkam.html',
		controller : 'dkam_ctrl'
	})
	 $urlRouterProvider.otherwise("/dkam_load");
}]);
