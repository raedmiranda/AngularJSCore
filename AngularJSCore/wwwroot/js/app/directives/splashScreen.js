app.directive('splashscreen', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope, $timeout) {
            $scope.classhide = "";
            $timeout(function () {
                $scope.classhide = "hiddde";
            }, 1000);
            $timeout(function () {
                angular.element(document.getElementsByClassName("hiddde")).remove();
            }, 3010);
        },
        templateUrl: "templates/splashScreen.html",
        replace: true
    }
});