angular.module('myApp.usuarios.listagem', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/usuarios', {
            templateUrl: 'usuarios/listagem/view.html',
            controller: 'listagemUsuarioCtrl'
        });
    }]);