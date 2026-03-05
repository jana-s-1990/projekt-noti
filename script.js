function init(){
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

function renderNotes(){
    let containerActivRef = document.getElementById('content-activ');
    let containerArchivRef = document.getElementById('content-archiv');
    let containerTrashRef = document.getElementById('content-trash');

    containerActivRef.innerHTML = "";
    containerArchivRef.innerHTML = "";
    containerTrashRef.innerHTML = "";

    for (let indexNote = allNotes.length - 1; indexNote >= 0; indexNote--) {
        const note = allNotes[indexNote];
        if(note.isArchiv !== true && note.isTrash !== true){
            containerActivRef.innerHTML += /*html*/`
                <p><strong>${note.title}</strong></p>
                <p>${note.note}</p>
                <p>Meine Id: ${indexNote}</p>
                <button onclick="setArchiv(${indexNote})">Archiv</button>
                <button onclick="setTrash(${indexNote})">Papierkorb</button>
            `
        }
        if(note.isArchiv == true && note.isTrash !== true){
            containerArchivRef.innerHTML += /*html*/`
                <p><strong>${note.title}</strong></p>
                <p>${note.note}</p>
                <p>Meine Id: ${indexNote}</p>
                <button onclick="setActiv(${indexNote})">Wiederherstellen</button>
                <button onclick="setTrash(${indexNote})">Papierkorb</button>
            `
        }
        if(note.isArchiv !== true && note.isTrash == true){
            containerTrashRef.innerHTML += /*html*/`
                <p><strong>${note.title}</strong></p>
                <p>${note.note}</p>
                <p>Meine Id: ${indexNote}</p>
                <button onclick="setActiv(${indexNote})">Wiederherstellen</button>
                <button onclick="deleteTrashNote(${indexNote})">Löschen</button>
            `
        }
        
    }

}

function setArchiv(indexArchiv){
    allNotes[indexArchiv].isArchiv = true;
    allNotes[indexArchiv].isTrash = false;
    saveNotes();
    renderNotes();
}

function setActiv(indexActiv){
    allNotes[indexActiv].isArchiv = false;
    allNotes[indexActiv].isTrash = false;
    saveNotes();
    renderNotes();
}

function setTrash(indexTrash){
    allNotes[indexTrash].isArchiv = false;
    allNotes[indexTrash].isTrash = true;
    saveNotes();
    renderNotes();
}

function deleteTrashNote(indexSplice){
    allNotes.splice(indexSplice, 1);
    saveNotes();
    renderNotes();
}