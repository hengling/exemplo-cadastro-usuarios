'use strict';

angular.module('myApp.usuarios.listagem')
    .service('listagemUsuarioService', ['$rootScope', '$http', function ($rootScope, $http) {
        var that = this;
        var apiUrl = 'https://stafapi.herokuapp.com/users';

        that.buscarTodosUsuarios = function () {
            $http.get(apiUrl, {
                headers: {
                    'token': 'someSecretsShouldNotBeRevealed'
                }
            }).then(function (users) {
                $rootScope.$broadcast('USUARIOS_CARREGADOS', users);
            }).catch(function (err) {
                $rootScope.$broadcast('ERRO_CARREGAR_USUARIOS', err);
            });
        };
    }]);