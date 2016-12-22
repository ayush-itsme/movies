'use strict';

angular.module('moviesApp').directive('paginationPanel', ['CX_CONSTANTS', '$state', function(CX_CONSTANTS, $state) {
    return {
        restrict: "E",
        scope: {
            nextPage: '&',
            prevPage: '&',
            gotoPage: '&',
            lastPage: '=',
            currentPage: '='

        },
        templateUrl: CX_CONSTANTS.templateUrls.paginationPanel
    };
}]);