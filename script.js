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

    for (let noteIndex = 0; noteIndex < notes.length; noteIndex++) {
        contentRef.innerHTML += getNotesTemplate(noteIndex);
    }
}
function getNotesTemplate(noteIndex){
    return /*html*/`
        <p>+ ${notes[noteIndex]}<button onclick="trashNote(${noteIndex})">Papierkorb</button></p>
    `
}

function renderTrashNotes(){
    let contentTrashRef = document.getElementById("trash-content");
    contentTrashRef.innerHTML = "";

    for (let trashNoteIndex = 0; trashNoteIndex < trashNotes.length; trashNoteIndex++) {
        contentTrashRef.innerHTML += getTrashNotesTemplate(trashNoteIndex);
    }
}

function getTrashNotesTemplate(trashNoteIndex){
    return /*html*/`
        <p>+ ${trashNotes[trashNoteIndex]}<button onclick="deleteNote(${trashNoteIndex})">X</button></p>
    `
}


function addNote(){
    let noteInputRef = document.getElementById("note-input");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    setToLocalStorage();

    renderNotes();

    noteInputRef.value = "";
}

function setToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
}
function setToLocalStorageTrash(){
    localStorage.setItem("trashnotes", JSON.stringify(trashNotes));
}

function getFormLocalStorage(){
    let localNotes = JSON.parse(localStorage.getItem("notes"));

    if(localNotes !== null){
        notes = localNotes;
    }
}

function getFormLocalStorageTrash(){
    let localTrashNotes = JSON.parse(localStorage.getItem("trashnotes"));

    if(localTrashNotes !== null){
        trashNotes = localTrashNotes;
    }
}

//notizen löschen
function trashNote(indexNote){
    let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);

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