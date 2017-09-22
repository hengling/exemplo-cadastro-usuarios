'use strict';

(function () {
    function inicializarScope($scope, usuario, acao) {
        $scope.usuario = usuario.data;
        $scope.acao = acao;
    }

    function inicializarListeners($scope) {
        $scope.$on('USUARIO_SALVO_SUCESSO', function () {
            $scope.typeAlert = 'success';
            $scope.alertMessage = 'Usuário salvo com sucesso';
            $scope.acao = 'visualizar';
        });
    }

    function definirTituloPagina($scope) {
        switch ($scope.acao) {
            case 'novo':
                $scope.tituloPagina = 'Novo Usuário';
                break;
            case 'editar':
                $scope.tituloPagina = 'Editar Usuário';
                break;
            case 'visualizar':
                $scope.tituloPagina = 'Visualizar Usuário';
                break;
        }
    }

    function salvarUsuario($scope, edicaoUsuarioService) {
        return function (event) {
            event.preventDefault();
            if (telaEmModoInsercao($scope.acao))
                edicaoUsuarioService.inserir($scope.usuario);
        };
    }

    function telaEmModoInsercao(acao) {
        return acao === 'novo';
    }

    angular.module('myApp.usuarios.edicao')
        .controller('edicaoUsuarioCtrl', function ($scope, edicaoUsuarioService, usuario, acao) {

            $scope.salvarUsuario = salvarUsuario($scope, edicaoUsuarioService);

            inicializarScope($scope, usuario, acao);

            inicializarListeners($scope);

            definirTituloPagina($scope);
        });
})();

