'use strict';
angular.module('moviesApp').service('favouriteMovieService',['$rootScope', 'CX_CONSTANTS', '$localStorage',
    function($rootScope, CX_CONSTANTS, $localStorage) {

        // set favorite
        this.addToFavourites = function (movie) {
            var queryParams = {
                "Title": movie.Title,
                "Poster": movie.Poster,
                "Year": movie.Year,
                "imdbID": movie.imdbID
            };

            $rootScope.favIDs.push(movie.imdbID);
            var favs = $localStorage[CX_CONSTANTS.localStorageKey.favs];
            favs.push(queryParams);

            $localStorage[CX_CONSTANTS.localStorageKey.FavIDs] = $rootScope.favIDs;
            $localStorage[CX_CONSTANTS.localStorageKey.favs] = favs;

            return true;
        };

         // remove from favs
        this.removeFromFavourites = function (movieID) {
            var favs = $localStorage[CX_CONSTANTS.localStorageKey.favs];
            _.remove($rootScope.favIDs, function(o) {return o === movieID;});
            _.remove(favs, function(o) {return o.imdbID === movieID;});
            $localStorage[CX_CONSTANTS.localStorageKey.FavIDs] = $rootScope.favIDs;
            $localStorage[CX_CONSTANTS.localStorageKey.favs] = favs;
            return true;
        };

        //get fav movies
        this.getFavourites = function () {
            return $localStorage[CX_CONSTANTS.localStorageKey.favs];
        };

    }
]);
