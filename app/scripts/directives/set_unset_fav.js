'use strict';

angular.module('moviesApp').directive('favCard', ['CX_CONSTANTS', '$state', '$rootScope', 'favouriteMovieService',
    function(CX_CONSTANTS, $state, $rootScope, favouriteMovieService) {
        return {
            restrict: "E",
            scope: {
                movie: "="

            },
            templateUrl: CX_CONSTANTS.templateUrls.favCard,
            controller: function($scope){
                    $scope.isfavourite = angular.isDefined(_.find($rootScope.favIDs,function(o) { return o === $scope.movie.imdbID; }));
                    $scope.setFavourite = function(){
                        favouriteMovieService.addToFavourites($scope.movie);
                        $scope.isfavourite = true;
                    };

                    $scope.unsetFavourite = function(){
                        favouriteMovieService.removeFromFavourites($scope.movie.imdbID);
                        $scope.isfavourite = false;
                    };

                }
        };
}]);