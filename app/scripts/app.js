'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'restangular',
    'ngRoute',
    'ui.router',
    'ngStorage',
    'CX_CONSTANTS']);