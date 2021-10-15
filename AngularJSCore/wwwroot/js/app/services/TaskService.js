
app.service("TaskService", ["$localStorage", function ($localStorage) {
    this.tasks = [];

    this.length = $localStorage.tasks.length;

    this.saveTasks = function (tasks) {
        $localStorage.tasks = tasks;
    }
    this.getTasks = function () {
        return $localStorage["tasks"];
    }
    this.clearTaks = function () {
        delete $localStorage.tasks;
    }
}]);
