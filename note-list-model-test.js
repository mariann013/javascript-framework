(function(exports) {
  function testDefaultNotesList() {
    var notes = new Notes(['','','']);

    if (notes.getList().length !== 3) {
      throw new Error("Not enough notes here " + notes.list);
    }
  };

  testDefaultNotesList();

  function testAddToNotesList() {
    var notes = new Notes([]);
    notes.createNote("New note");
    notes.createNote("New note 2");

    if (notes.getList().length !== 2) {
      throw new Error("Not enough notes here " + notes.list);
    }

    if (notes.getList()[1].getText() !== "New note 2") {
      throw new Error("The note is incorrect ");
    }
  };

  testAddToNotesList();
})(this);
