var mod = angular.module('dkam', ['ui.router']);
mod.constant('BASE_DEV_URL', 'http://192.168.4.131:8090');
mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dkam_load', {
            url: '/dkam_load',
            templateUrl: 'view/view_html/dkam.html',
            controller: 'dkam_ctrl'
        })
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'view/view_html/welcome.html'
        })
        .state('update', {
            url: '/update',
            templateUrl: 'view/view_html/update_success.html'
        })
    $urlRouterProvider.otherwise("/welcome");
}]);