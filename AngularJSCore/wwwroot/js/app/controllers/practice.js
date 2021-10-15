
app.controller("practice", ["$scope", "$localStorage", "$timeout", "$rootScope", "$animate", "TaskService", "StorageService", function ($scope, $localStorage, $timeout, $rootScope, $animate, TaskService, StorageService) {
    $scope.action = "Agregar";


    //using https://github.com/gsklee/ngStorage
    $scope.task = {};
    $scope.defaultTask = {
        title: "", description: "", date: new Date(), done: false, author: ""
    }
    $scope.tasks = [];

    //if ($localStorage.tasks != null) {
    if (TaskService.length > 0) {
        //$scope.tasks = $localStorage.tasks;
        $scope.tasks = StorageService.TaskService.getAll();
    }

    $scope.clearTasks = function () {
        //delete $localStorage.tasks;
        TaskService.clearTasks();
        $scope.tasks = [];
    }

    $scope.postTask = function () {
        let tempTask = $scope.task;
        tempTask.date = new Date(tempTask.date || new Date())
        tempTask.done = false;
        tempTask.author = $scope.name;
        _addTask(tempTask);
        //$localStorage.tasks = $scope.tasks;
        $scope.task = {};
        $scope.action = "Agregar";
        $scope.showForm = false;
    }

    $scope.deleteTask = function (_task) {
        _removeTask(_task);
    }

    $scope.editTask = function (_task) {
        _removeTask(_task);
        $scope.task = _task;
        $scope.action = "Editar";
        $scope.showForm = true;
    }

    $scope.doneTask = function (_task) {
        _removeTask(_task);
        _task.done = true;
        _addTask(_task);
    }
    $scope.undoneTask = function (_task) {
        _removeTask(_task);
        _task.done = false;
        _addTask(_task);
    }

    $scope.$watchCollection(
        function () {
            return $scope.tasks;
        }, function (newValues, oldValues) {
            //$localStorage.tasks = newValues;
            TaskService.saveTasks(newValues);
        });

    $scope.showForm = false;
    $scope.viewForm = function () {
        $scope.showForm = true;
    }
    $scope.hideForm = function () {
        $scope.task = {};
        $scope.showForm = false;
    }



    //Part 1 - Basics
    $scope.name = "Raul";


    //Part 4 - Vanilla JS, jQuery
    //AngularJS
    $timeout(function () {
        $scope.name = "Adrian";
    }, 8000);
    //Así sí, pero no recomendable
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.name = "Juan";
        })
    }, 16000);

    //Part 5 - Directives ng-hide, ng-show


    //$scope.splash = true;
    $timeout(function () {
        $scope.classhide = "hiddde";
        //$scope.splash = false;
    }, 1000);
    $timeout(function () {
        angular.element(document.getElementsByClassName("hiddde")).remove();
    }, 3010);


    function _removeTask(task) {
        let array = $scope.tasks;
        array = array.filter(t => (task.title != "" && t.title != task.title) || (task.description != "" && t.description != task.description));
        $scope.tasks = array;
    }
    function _addTask(task) {
        $scope.tasks.push(task);
    }
}]);
