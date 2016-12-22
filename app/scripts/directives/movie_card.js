'use strict';

angular.module('moviesApp').directive('movieCard', ['CX_CONSTANTS', '$state', function(CX_CONSTANTS, $state) {
    return {
        restrict: "E",
        scope: {
            movie: "="

        },
        templateUrl: CX_CONSTANTS.templateUrls.movieCard,
        controller: function($scope){
              $scope.details = function(){
                $state.go('movie_details', {'id': $scope.movie.imdbID});
              };
            }
    };
}]);