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
                $rootScope.$broadcast('ERRO_CARREGAR_USUARIOS', err);
            });
        };
    }

    angular.module('myApp.usuarios.listagem')
        .service('listagemUsuarioService', function ($rootScope, $http, constants) {

            var that = this;

            that.buscarTodosUsuarios = buscarTodosUsuarios($rootScope, $http, constants);
        });

})();