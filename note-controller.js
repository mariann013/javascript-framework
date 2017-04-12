(function() {
  var note = new Note('This is an amazing note');
  var list = new Notes([note, note]);
  var view = new View(list);

  var app = document.getElementById('app');
  app.innerHTML = view.getNotes();
})(this);
