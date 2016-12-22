'use strict';
angular.module('moviesApp').service('movieService',['Restangular', 'CX_CONSTANTS', '$location',
    function(Restangular, CX_CONSTANTS, $location) {

        var base = Restangular.one('');

        // Get movie list
        this.searchAllMovies = function (searchObj) {
            var queryParams = $.isEmptyObject(searchObj) ? $location.search() : angular.copy(searchObj);
            queryParams.type = "movie";
            queryParams.s = "'" + queryParams.s + "'";
            return base.get(queryParams).then(
                function (response) {
                    return {
                        success: response.Response === 'True',
                        data: response
                    };
                },
                function (response) {
                    return {
                        success: false,
                        data: response
                    };
                }
            );
        };

         // Get movie details
        this.getMovieDetails = function (queryParams) {
            queryParams = $.isEmptyObject(queryParams) ? $location.search() : queryParams;
            queryParams.plot = "full";
            queryParams.tomatoes = true;
            queryParams.i = queryParams.id;
            return base.get(queryParams).then(
                function (response) {
                    return {
                        success: response.Response === 'True',
                        data: response
                    };
                },
                function (response) {
                    return {
                        success: false,
                        data: response
                    };
                }
            );
        };

    }
]);
