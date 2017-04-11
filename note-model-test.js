(function(exports) {
  function testDefaultNoteToMyFavLanguageIsJS() {
    var note = new Note();

    if (note.getText() !== "My favourite language is Javascript") {
      throw new Error("Initial note should say my favourite language is Javascript");
    }
  };

  testDefaultNoteToMyFavLanguageIsJS();
})(this);
