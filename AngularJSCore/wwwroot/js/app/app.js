var app = angular.module("myFirstApp", [
    "ngAnimate",
    "ngStorage",
    "ngRoute"
]);

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/", {
            controller: "listadoController",
            templateUrl: "templates/bodysession.html"
        })
        .when("/create", {
            controller: "detalleController",
            templateUrl: "templates/notes.html"
        })
        .when("/tutorial", {
            controller: "myFirstController",
            templateUrl: "templates/session.html"
        })
        .otherwise("/");
});