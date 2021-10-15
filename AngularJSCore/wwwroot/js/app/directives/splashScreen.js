app.directive('splashscreen', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope, $timeout, $element) {
            $scope.classhide = "";

            //$scope.splash = true;
            $timeout(function () {
                $scope.classhide = "hiddde";
                //$scope.splash = false;
            }, 1000);
            $timeout(function () {
                angular.element(document.getElementsByClassName("hiddde")).remove();
            }, 3010);

        },
        templateUrl: "templates/splashScreen.html",
        replace: true
    }
});