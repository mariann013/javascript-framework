(function(exports) {
  function testInnitiatesView() {
    var view = new View();

    if (view.getNotes() !== "<ul></ul>") {
      throw new Error("Not notes here.");
    }
  };
  testInnitiatesView();

  function testOneNoteDisplays() {
    var notes = new Notes(['notey']);
    var view = new View(notes);

    if (view.getNotes() !== "<ul><li><div>notey</div></li></ul>") {
      throw new Error("There should be a notey note here");
    }
  }
  testOneNoteDisplays();

  function testTwoNoteDisplays() {
    var notes = new Notes(['notey', 'notey2']);
    var view = new View(notes);

    if (view.getNotes() !== "<ul><li><div>notey</div></li><li><div>notey2</div></li></ul>") {
      throw new Error("There should be two notey notes here");
    }
  }
  testTwoNoteDisplays();
})(this);
