'use strict';

angular.module('moviesApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'CX_CONSTANTS', 'RestangularProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, CX_CONSTANTS, RestangularProvider) {
        RestangularProvider.setBaseUrl(CX_CONSTANTS.APIBaseUrl);
        $locationProvider.html5Mode(true);
        RestangularProvider.setRequestSuffix('\/');
        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('favourites', {
                url: '/favourites',
                templateUrl:  'views/favourite.html',
                controller: 'favouriteMovies'
            })
            .state('movie_details', {
                url: '/details/:id',
                templateUrl:  'views/details.html',
                controller: 'MovieDetails'
            });
        $urlRouterProvider.otherwise('/');
}]).run(['$rootScope', 'CX_CONSTANTS', '$localStorage',
    function($rootScope, CX_CONSTANTS, $localStorage){
        if(!angular.isDefined($localStorage[CX_CONSTANTS.localStorageKey.favIDs])) {
                    $localStorage[CX_CONSTANTS.localStorageKey.favIDs] = [];
                    $localStorage[CX_CONSTANTS.localStorageKey.favs] = [];
        }
        $rootScope.favIDs = $localStorage[CX_CONSTANTS.localStorageKey.favIDs];
    }
]);
