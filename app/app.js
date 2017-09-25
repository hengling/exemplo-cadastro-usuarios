'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.usuarios.listagem',
    'myApp.usuarios.edicao'
]).config(function ($stateProvider) {

}).constant('constants', {
    apiUrl: 'https://stafapi.herokuapp.com/users',
    token: 'thisShouldNotBeRevealed'
});
