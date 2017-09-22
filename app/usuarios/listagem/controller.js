'use strict';

(function () {

    function inicializarListagem(listagemUsuarioService) {
        listagemUsuarioService.buscarTodosUsuarios();
    }

    function inicializarListeners($scope, listagemUsuarioService) {
        $scope.$on('USUARIOS_CARREGADOS', function (e, usuarios) {
            $scope.usuarios = usuarios.data;
        });

        $scope.$on('ERRO_API', function (e, err) {
            $scope.usuarios = undefined;
            $scope.typeAlert = 'danger';
            $scope.alertMessage = err.data.message;
        });

        $scope.$on('USUARIO_REMOVIDO_SUCESSO', function () {
            $scope.typeAlert = 'success';
            $scope.alertMessage = 'Usuário removido com sucesso.';
            $scope.usuarios = undefined;
            listagemUsuarioService.buscarTodosUsuarios();
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

    function editarUsuario($scope) {
        return function (id) {
            $scope.typeAlert = 'warning';
            $scope.alertMessage = 'Funcionalidade em fase de implementação...';
        };
    }

    function removerUsuario(listagemUsuarioService) {
        return function (id) {
            if (confirm('Tem certeza que deseja remover o usuário?') === true) {
                listagemUsuarioService.removerUsuario(id);
            }
        };
    }

    angular.module('myApp.usuarios.listagem')
        .controller('listagemUsuarioCtrl', function ($scope, $state, listagemUsuarioService) {

            $scope.inserirUsuario = inserirUsuario($state);

            $scope.visualizarUsuario = visualizarUsuario($state);

            $scope.editarUsuario = editarUsuario($scope);

            $scope.removerUsuario = removerUsuario(listagemUsuarioService);

            inicializarListagem(listagemUsuarioService);

            inicializarListeners($scope, listagemUsuarioService);
        });
})();