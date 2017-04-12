(function(exports) {
  var Notes = function(notes) {
      this.list = notes;
  }

  Notes.prototype.getList = function () {
    return this.list;
  }

  Notes.prototype.createNote = function(noteText) {
    var note = new Note(noteText);
    this.list.push(note);
  }

  exports.Notes = Notes;
})(this);
