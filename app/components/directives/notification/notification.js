(function () {

    angular.module('myApp')
        .directive('notification', function () {
            return {
                restrict: 'E',
                templateUrl: 'components/directives/notification/view.html',
                scope: {
                    type: '=',
                    message: '='
                }
            }
        });
})();