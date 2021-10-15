
app.service("myFirstService", ["$localStorage", function ($localStorage) {
    this.notes = [];

    this.saveNotes = function (notes) {
        $localStorage.notes = notes;
    }
    this.getNotes = function () {
        return $localStorage.notes;
    }
}]);
