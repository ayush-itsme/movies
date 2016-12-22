'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp').controller('MovieDetails',[ 'movieService', '$location',  '$scope', '$state', '$stateParams',
    function (movieService, $location, $scope, $state, $stateParams) {
        var ParamObj = $stateParams;

        if(ParamObj.id === null){
            alert("error");
            $state.go('root');
        }

        function getMovieDetails(){
            movieService.getMovieDetails(ParamObj).then(
                function (response) {
                    if (response.success) {
                        $scope.movie = response.data;
                    }else{
                        console.log("Error in api response");
                    }
                });
        }

        getMovieDetails();
    }
]);
