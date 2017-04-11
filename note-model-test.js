(function(exports) {
  function testDefaultNoteToMyFavLanguageIsJS() {
    var text = "My favourite language is Javascript";
    var note = new Note(text);

    if (note.getText() !== text) {
      throw new Error("Initial note should say my favourite language is Javascript");
    }
  };

  testDefaultNoteToMyFavLanguageIsJS();
})(this);
