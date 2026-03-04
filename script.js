let notes = ["Tisch decken", "Staub saugen"];

let trashNotes =[];


function init(){
    getFormLocalStorage();
    getFormLocalStorageTrash();
    renderNotes();
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let noteIndex = 0; noteIndex < allNotes.notes.length; noteIndex++) {
        contentRef.innerHTML += getNotesTemplate(noteIndex);
    }
}
function getNotesTemplate(noteIndex){
    return /*html*/`
        <p>${allNotes.notesTitle[noteIndex]}</p>
        <p>+ ${allNotes.notes[noteIndex]}<button onclick="trashNote(${noteIndex})">Papierkorb</button></p>
    `
}

function renderTrashNotes(){
    let contentTrashRef = document.getElementById("trash-content");
    contentTrashRef.innerHTML = "";

    for (let trashNoteIndex = 0; trashNoteIndex < allNotes.trashNotes.length; trashNoteIndex++) {
        contentTrashRef.innerHTML += getTrashNotesTemplate(trashNoteIndex);
    }
}

function getTrashNotesTemplate(trashNoteIndex){
    return /*html*/`
    <p>${allNotes.trashNotesTitle[trashNoteIndex]}</p>
        <p>+ ${allNotes.trashNotes[trashNoteIndex]}<button onclick="deleteNote(${trashNoteIndex})">X</button></p>
    `
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

function getFormLocalStorageTrash(){
    let localTrashNotesTitle = JSON.parse(localStorage.getItem("trashNotesTitle"));
    let localTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));

    if(localTrashNotes !== null){
        allNotes.trashNotesTitle = localTrashNotesTitle;
        allNotes.trashNotes = localTrashNotes;
    }
}

//notizen löschen
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

function deleteNote(indexNote){
    trashNotes.splice(indexNote, 1)[0];
    setToLocalStorageTrash();
    renderTrashNotes();
}