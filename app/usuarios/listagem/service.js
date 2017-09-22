'use strict';

(function () {

    function buscarTodosUsuarios($rootScope, $http, constants) {
        return function () {
            $http.get(constants.apiUrl, {
                headers: {
                    token: constants.token
                }
            }).then(function (users) {
                $rootScope.$broadcast('USUARIOS_CARREGADOS', users);
            }).catch(function (err) {
                $rootScope.$broadcast('ERRO_API', err);
            });
        };
    }

    function removerUsuario($rootScope, $http, constants) {
        return function (id) {
            $http.delete(constants.apiUrl + '/' + id, {
                headers: {
                    token: constants.token
                }
            }).then(function (users) {
                $rootScope.$broadcast('USUARIO_REMOVIDO_SUCESSO');
            }).catch(function (err) {
                $rootScope.$broadcast('ERRO_API', err);
            });
        };
    }

    angular.module('myApp.usuarios.listagem')
        .service('listagemUsuarioService', function ($rootScope, $http, constants) {

            var that = this;

            that.buscarTodosUsuarios = buscarTodosUsuarios($rootScope, $http, constants);

            that.removerUsuario = removerUsuario($rootScope, $http, constants);
        });

})();