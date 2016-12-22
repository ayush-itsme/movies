'use strict';

angular.module('moviesApp').controller('favouriteMovies',[ 'favouriteMovieService', '$scope',
    function (favouriteMovieService, $scope) {
        $scope.movies = favouriteMovieService.getFavourites();
    }
]);
