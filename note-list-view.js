(function(exports) {
  var View = function(notes) {
      this.notes = notes;
  }

  View.prototype.getNotes = function() {
    var output = "<ul>";

    if(this.notes) {
      var notes = this.notes.getList();
      for (var i = 0; i < notes.length; i++) {
        output += "<li><div>" + notes[i] + "</div></li>";
      }
    }

    return output + "</ul>";
  }
  exports.View = View;
})(this);
