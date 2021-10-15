app.directive('navbar', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: "practice",
        templateUrl: "templates/navbar.html",
        replace: true
    }
});