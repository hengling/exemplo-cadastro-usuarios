'use strict';

(function () {

    function inserir($rootScope, $http, constants) {
        return function (usuario) {
            $http.post(constants.apiUrl, usuario, {
                headers: {
                    token: constants.token
                }
            }).then(function (usuarioSalvo) {
                $rootScope.$broadcast('USUARIO_SALVO_SUCESSO', usuarioSalvo);
            }).catch(function () {
                $rootScope.$broadcast('ERRO_SALVAR_USUARIO');
            });
        };
    }

    angular.module('myApp.usuarios.edicao')
        .service('edicaoUsuarioService', function ($rootScope, $http, constants) {

            var that = this;

            that.inserir = inserir($rootScope, $http, constants);
        });
})();