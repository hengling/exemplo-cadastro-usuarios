'use strict';

function inicializarScope($scope, listagemUsuarioService) {
    $scope.usuarios = [];
    listagemUsuarioService.buscarTodosUsuarios();
}

function inicializarListeners($scope) {
    $scope.$on('USUARIOS_CARREGADOS', function (e, usuarios) {
        $scope.usuarios = usuarios.data;
    });

    $scope.$on('ERRO_CARREGAR_USUARIOS', function (e, err) {
        $scope.showAlert = 'danger';
        $scope.alertMessage = err.data.message;
    });
}

angular.module('myApp.usuarios.listagem')
    .controller('listagemUsuarioCtrl', ['$scope', 'listagemUsuarioService', function ($scope, listagemUsuarioService) {
        inicializarScope($scope, listagemUsuarioService);
        inicializarListeners($scope);
    }]);