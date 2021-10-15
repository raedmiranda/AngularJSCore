
//var app = angular.module("myFirstApp", [
//    "ngAnimate", "ngStorage"
//]);

app.controller("myFirstController", ["$scope", "$http", "$localStorage", "$timeout", "$rootScope", "myFirstFactory", "myFirstService", function ($scope, $http, $localStorage, $timeout, $rootScope, myFirstFactory, myFirstService) {
    //Part 1 - Basics
    $scope.name = "Raul";

    $scope.comment = {};
    $scope.comments = [
        {
            text: "Buen curso",
            author: "juan"
        },
        {
            text: "Genial tuto",
            author: "pepe"
        }
    ];


    // Crea un nuevo comentario
    $scope.postComment = function () {
        $scope.comments.push($scope.comment);
        $scope.comment = {};
    }

    //Part 2 - HTTP
    $scope.todos = [];
    $http.get("https://jsonplaceholder.typicode.com/todos").then(function (result) {
        $scope.todos = result.data.slice(0, 20);
    }, function (err) {
        //show error
    })

    //Part 3 - LocalStorage
    //using https://github.com/gsklee/ngStorage
    $scope.note = {};
    $scope.notes = [];

    if ($localStorage.notes != null) {
        $scope.notes = $localStorage.notes;
    }

    $scope.postNote = function () {
        $scope.notes.push($scope.note);
        //$localStorage.notes = $scope.notes;
        $scope.note = {};
    }

    $scope.$watchCollection(function () {
        return $scope.notes;
    }, function (newValues, oldValues) {
        //$localStorage.notes = newValues;

        //Part A - Factory
        //myFirstFactory.saveNotes(newValues);

        //Part B - Service
        myFirstService.saveNotes(newValues);

    })

    //Part 4 - Vanilla JS, jQuery
    //AngularJS
    $timeout(function () {
        $scope.name = "Adrian";
    }, 800);

    //Así, no es posible
    setTimeout(function () {
        $scope.name = "Juan";
    }, 1600);
    //Así sí, pero no recomendable
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.name = "Juan";
        })
    }, 1600);

    //Part 5 - Directives ng-hide, ng-show

    //Part 6 - Scope
    $rootScope.name = "Eduardo";
}]);

app.controller("myChildController", ["$scope", function ($scope) {
    //Part 6 - Scope
    $scope.name = "Lucas";
}]);
