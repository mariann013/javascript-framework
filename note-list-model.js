(function(exports) {
  var Notes = function() {
      this.list = ['', '', ''];
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
