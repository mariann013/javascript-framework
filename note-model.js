(function(exports) {
var Note = function() {
  this.text = "My favourite language is Javascript";
}

Note.prototype.getText = function() {
  return this.text;
}

exports.Note = Note;
})(this);
