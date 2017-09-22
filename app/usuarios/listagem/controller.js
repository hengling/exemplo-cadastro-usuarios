'use strict';

(function () {

    function inicializarListagem(listagemUsuarioService) {
        listagemUsuarioService.buscarTodosUsuarios();
    }

    function inicializarListeners($scope) {
        $scope.$on('USUARIOS_CARREGADOS', function (e, usuarios) {
            $scope.usuarios = usuarios.data;
        });

        $scope.$on('ERRO_CARREGAR_USUARIOS', function (e, err) {
            $scope.usuarios = undefined;
            $scope.typeAlert = 'danger';
            $scope.alertMessage = err.data.message;
        });
    }

    function inserirUsuario($state) {
        return function () {
            $state.go('novoUsuario');
        };
    }

    function visualizarUsuario($state) {
        return function (id) {
            $state.go('visualizarUsuario', {id: id});
        };
    }

    angular.module('myApp.usuarios.listagem')
        .controller('listagemUsuarioCtrl', function ($scope, $state, listagemUsuarioService) {

            $scope.inserirUsuario = inserirUsuario($state);

            $scope.visualizarUsuario = visualizarUsuario($state);

            inicializarListagem(listagemUsuarioService);

            inicializarListeners($scope);
        });
})();