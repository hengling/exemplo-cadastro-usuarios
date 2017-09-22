'use strict';

angular.module('myApp.usuarios.listagem', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('listagemUsuarios', {
            url: '/usuarios',
            templateUrl: 'usuarios/listagem/view.html',
            controller: 'listagemUsuarioCtrl'
        });
    }]);