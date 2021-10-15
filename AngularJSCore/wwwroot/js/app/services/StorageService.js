
app.service("StorageService", ["$localStorage", function ($localStorage) {
    class StorageService {
        collection = [];
        //length = [collection].length;

        constructor(collectionName) {
            this.collection = $localStorage[collectionName];
        }

        getAll = function () {
            return this.collection;
        }

        create = function (data) {
            $localStorage[collectionName] = data;
        }

        removeAll = function () {
            delete $localStorage[collectionName];
        }
    }

    // Use StorageService.from("tasks").getAll();
    this.from = function (collectionName) {
        return new StorageService(collectionName);
    }

    //Use StorageService.TaskService.getAll();
    this.TaskService = new StorageService("tasks");
    this.NoteService = new StorageService("notes");
    this.CommentService = new StorageService("comments");
}]);
