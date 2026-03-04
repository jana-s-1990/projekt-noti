function init(){
    getFormLocalStorage();
    getFormLocalStorageArchiv();
    getFormLocalStorageTrash();

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let noteIndex = 0; noteIndex < allNotes.notes.length; noteIndex++) {
        contentRef.innerHTML += getNotesTemplate(noteIndex);
    }
}
function renderArchivNotes(){
    let contentArchivRef = document.getElementById("archiv-content");
    contentArchivRef.innerHTML = "";

    for (let archivNoteIndex = 0; archivNoteIndex < allNotes.archivNotes.length; archivNoteIndex++) {
        contentArchivRef.innerHTML += getArchivNotesTemplate(archivNoteIndex);
    }
}


function renderTrashNotes(){
    let contentTrashRef = document.getElementById("trash-content");
    contentTrashRef.innerHTML = "";

    for (let trashNoteIndex = 0; trashNoteIndex < allNotes.trashNotes.length; trashNoteIndex++) {
        contentTrashRef.innerHTML += getTrashNotesTemplate(trashNoteIndex);
    }
}




function addNote(){
    let noteInputRef = document.getElementById("note-input");
    let noteInput = noteInputRef.value;

    let noteInputTitleRef = document.getElementById("noteTitle-input");
    let noteInputTitle = noteInputTitleRef.value;

    allNotes.notesTitle.push(noteInputTitle);
    allNotes.notes.push(noteInput);

    setToLocalStorage();

    renderNotes();

    noteInputTitleRef.value = "";
    noteInputRef.value = "";
}

function setToLocalStorage(){
    localStorage.setItem("notesTitle", JSON.stringify(allNotes.notesTitle));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
}
function setToLocalStorageArchiv(){
    localStorage.setItem("archivNotesTitle", JSON.stringify(allNotes.archivNotesTitle));
    localStorage.setItem("archivNotes", JSON.stringify(allNotes.archivNotes));
}
function setToLocalStorageTrash(){
    localStorage.setItem("trashNotesTitle", JSON.stringify(allNotes.trashNotesTitle));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}

function getFormLocalStorage(){
    let localNotesTitle = JSON.parse(localStorage.getItem("notesTitle"));
    let localNotes = JSON.parse(localStorage.getItem("notes"));

    if(localNotes !== null){
        allNotes.notesTitle = localNotesTitle;
        allNotes.notes = localNotes;        
    }
}
function getFormLocalStorageArchiv(){
    let localArchivNotesTitle = JSON.parse(localStorage.getItem("archivNotesTitle"));
    let localArchivNotes = JSON.parse(localStorage.getItem("archivNotes"));

    if(localArchivNotes !== null){
        allNotes.archivNotesTitle = localArchivNotesTitle;
        allNotes.archivNotes = localArchivNotes;        
    }
}
function getFormLocalStorageTrash(){
    let localTrashNotesTitle = JSON.parse(localStorage.getItem("trashNotesTitle"));
    let localTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));

    if(localTrashNotes !== null){
        allNotes.trashNotesTitle = localTrashNotesTitle;
        allNotes.trashNotes = localTrashNotes;
    }
}

function setToArchivNote(indexNote){
    let archivNoteTitle = allNotes.notesTitle.splice(indexNote, 1)[0];
    let archivNote = allNotes.notes.splice(indexNote, 1)[0];

    allNotes.archivNotesTitle.push(archivNoteTitle);
    allNotes.archivNotes.push(archivNote);

    setToLocalStorage();
    setToLocalStorageArchiv();
    setToLocalStorageTrash();

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function trashNote(indexNote){
    let trashNoteTitle = allNotes.notesTitle.splice(indexNote, 1)[0];
    let trashNote = allNotes.notes.splice(indexNote, 1)[0];

    allNotes.trashNotesTitle.push(trashNoteTitle);
    allNotes.trashNotes.push(trashNote);

    setToLocalStorage();

    setToLocalStorageTrash();

    renderNotes();
    renderTrashNotes();
}
function trashNoteFromArchiv(indexNote){
    let trashNoteTitle = allNotes.archivNotesTitle.splice(indexNote, 1)[0];
    let trashNote = allNotes.archivNotes.splice(indexNote, 1)[0];

    allNotes.trashNotesTitle.push(trashNoteTitle);
    allNotes.trashNotes.push(trashNote);

    setToLocalStorageArchiv();
    setToLocalStorageTrash();

    renderArchivNotes();
    renderTrashNotes();

}

function deleteNote(indexNote){
    allNotes.trashNotesTitle.splice(indexNote, 1)[0];
    allNotes.trashNotes.splice(indexNote, 1)[0];

    setToLocalStorageTrash();
    renderTrashNotes();
}