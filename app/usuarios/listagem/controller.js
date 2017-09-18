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

angular.module('myApp.usuarios.listagem', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/usuarios', {
            templateUrl: 'usuarios/listagem/view.html',
            controller: 'listagemUsuarioCtrl'
        });
    }])

    .controller('listagemUsuarioCtrl', ['$scope', 'listagemUsuarioService', function ($scope, listagemUsuarioService) {

        inicializarScope($scope, listagemUsuarioService);

        inicializarListeners($scope);

    }])

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