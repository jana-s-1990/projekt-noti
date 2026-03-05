function init() {
  loadNotes();
  renderNotes();
}

function addNote() {
  let noteInputTitleRef = document.getElementById("noteTitle-input");
  let noteInputRef = document.getElementById("note-input");
  let noteInputTitle = noteInputTitleRef.value;
  let noteInput = noteInputRef.value;

  allNotes.push({
    title: noteInputTitle,
    note: noteInput,
    isArchiv: false,
    isTrash: false,
  });

  saveNotes();
  renderNotes();
}

function renderNotes() {
  let containerActivRef = document.getElementById("content-activ");
  let containerArchivRef = document.getElementById("content-archiv");
  let containerTrashRef = document.getElementById("content-trash");

  containerActivRef.innerHTML = "";
  containerArchivRef.innerHTML = "";
  containerTrashRef.innerHTML = "";

  for (let indexNote = allNotes.length - 1; indexNote >= 0; indexNote--) {
    const note = allNotes[indexNote];
    if (note.isArchiv !== true && note.isTrash !== true) {
      containerActivRef.innerHTML += getTemplate(
        note,
        indexNote,
        `<button class="btn-archiv" onclick="setArchiv(${indexNote})" aria-lable="Archivieren"><i class="fa-solid fa-box-archive"></i></button>
                <button class="btn-trash" onclick="setTrash(${indexNote})" aria-lable="Zum Papierkorb"><i class="fa-solid fa-trash-can"></i></button>`,
      );
    }
    if (note.isArchiv == true && note.isTrash !== true) {
      containerArchivRef.innerHTML += getTemplate(
        note,
        indexNote,
        `<button class="btn-activ" onclick="setActiv(${indexNote})" aria-lable="Wiederherstellen"><i class="fa-solid fa-reply"></i></button>
                <button class="btn-trash" onclick="setTrash(${indexNote})" aria-lable="Zum Papierkorb"><i class="fa-solid fa-trash-can"></i></button>`,
      );
    }
    if (note.isArchiv !== true && note.isTrash == true) {
      containerTrashRef.innerHTML += getTemplate(
        note,
        indexNote,
        `<button class="btn-activ" onclick="setActiv(${indexNote})" aria-lable="Wiederherstellen"><i class="fa-solid fa-reply"></i></button>
                <button class="btn-delete" onclick="deleteTrashNote(${indexNote})" aria-lable="Löschen"><i class="fa-solid fa-xmark"></i></button>`,
      );
    }
  }
}

function setArchiv(indexArchiv) {
  allNotes[indexArchiv].isArchiv = true;
  allNotes[indexArchiv].isTrash = false;
  saveNotes();
  renderNotes();
}

function setActiv(indexActiv) {
  allNotes[indexActiv].isArchiv = false;
  allNotes[indexActiv].isTrash = false;
  saveNotes();
  renderNotes();
}

function setTrash(indexTrash) {
  allNotes[indexTrash].isArchiv = false;
  allNotes[indexTrash].isTrash = true;
  saveNotes();
  renderNotes();
}

function deleteTrashNote(indexSplice) {
  allNotes.splice(indexSplice, 1);
  saveNotes();
  renderNotes();
}
