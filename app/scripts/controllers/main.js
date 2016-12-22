'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp').controller('MainCtrl',['movieService', '$location',  '$scope',
    function (movieService, $location, $scope) {
        $scope.movies = undefined;
        $scope.search_title = "";
        $scope.loading = true;
        $scope.error = false;
        $scope.lastPage = null;
        $scope.currentPage = 1;
        $scope.movieSearched = undefined;
        var paramObj = angular.copy($location.search());
        var searchObj = {
            "s": angular.isDefined(paramObj.s)?paramObj.s: "The",
            "page": angular.isDefined(paramObj.page)?paramObj.page: 1
        };
        if(angular.isDefined(paramObj.s)){
            $scope.movieSearched = paramObj.s;
        }
        if(angular.isDefined(paramObj.page)){
            $scope.currentPage = paramObj.page;
        }
        function getSearchResults() {
            $scope.loading = true;
            $scope.movies = undefined;
            $scope.error = false;
            movieService.searchAllMovies(searchObj).then(
                function (response) {
                    if (response.success) {
                        $scope.movies = response.data.Search;
                        $scope.loading = false;
                        $scope.lastPage = $scope.lastPage ? $scope.lastPage: parseInt(response.data.totalResults)/$scope.movies.length;
                        $scope.currentPage = searchObj.page;
                        console.log($scope.lastPage);

                    }else{
                        console.log("Error in api response");
                        $scope.loading = false;
                        $scope.error = true;
                        $scope.errorMessg = response.data.Error;
                    }
                });
        }
        getSearchResults();

        $scope.searchMovies = function(){
            if(angular.isDefined($scope.search_title)){
                $scope.lastPage = null;
                searchObj.s = $scope.search_title;
                $scope.movieSearched = $scope.search_title;
                $location.search(searchObj);
                getSearchResults();
            }
        };

        $scope.nextPage = function(){
            if(searchObj.page < $scope.lastPage){
                searchObj.page = searchObj.page + 1;
                $location.search(searchObj);
                getSearchResults();
            }
        };
        $scope.prevPage = function(){
            if(searchObj.page > 1){
                searchObj.page = searchObj.page - 1 ;
                $location.search(searchObj);
                getSearchResults();
            }
        };
        $scope.gotoPage = function(gotoPageNum){
            if(gotoPageNum <= $scope.lastPage && gotoPageNum >= 1){
                searchObj.page = gotoPageNum;
                $location.search(searchObj);
                getSearchResults();
            }
        }


    }
]);
