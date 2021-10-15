
app.factory("myFirstFactory", ["$localStorage", function ($localStorage) {
    var notes = [];

    saveNotes = function (notes) {
        $localStorage.notes = notes;
    }
    getNotes = function () {
        return $localStorage.notes;
    }

    return {
        saveNotes: saveNotes,
        getNotes: getNotes
    }
}]);
