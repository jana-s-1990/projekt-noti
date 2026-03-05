//Local Storage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(allNotes));
}

function loadNotes() {
  let notesFromStorage = JSON.parse(localStorage.getItem("notes"));
  if (notesFromStorage !== null) {
    allNotes = notesFromStorage;
  }
}