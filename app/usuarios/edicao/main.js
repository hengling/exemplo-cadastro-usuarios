'use strict';

angular.module('myApp.usuarios.edicao', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('novoUsuario', {
                url: '/usuarios/novo',
                templateUrl: 'usuarios/edicao/view.html',
                controller: 'edicaoUsuarioCtrl',
                resolve: {
                    acao: function () {
                        return 'novo';
                    },
                    usuario: function () {
                        return {data: {}};
                    }
                }
            })
            .state('editarUsuario', {
                url: '/usuarios/:id/editar',
                templateUrl: 'usuarios/edicao/view.html',
                controller: 'edicaoUsuarioCtrl',
                resolve: {
                    acao: function () {
                        return 'editar';
                    }
                }
            })
            .state('visualizarUsuario', {
                url: '/usuarios/:id/visualizar',
                templateUrl: 'usuarios/edicao/view.html',
                controller: 'edicaoUsuarioCtrl',
                resolve: {
                    acao: function () {
                        return 'visualizar';
                    },
                    usuario: function ($stateParams, $http, constants) {
                        return $http.get(constants.apiUrl + '/' + $stateParams.id, {
                            headers: {
                                token: constants.token
                            }
                        });
                    }
                }
            })
    });