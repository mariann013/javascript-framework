(function(exports) {
  function testDefaultNotesList() {
    var notes = new Notes();

    if (notes.getList().length !== 3) {
      throw new Error("Not enough notes here " + notes.list);
    }
  };

  testDefaultNotesList();

  function testAddToNotesList() {
    var notes = new Notes();
    notes.createNote("New note");

    if (notes.getList().length !== 4) {
      throw new Error("Not enough notes here " + notes.list);
    }

    if (notes.getList()[3].getText() !== "New note") {
      throw new Error("The note is incorrect ");
    }
  };

  testAddToNotesList();
})(this);
