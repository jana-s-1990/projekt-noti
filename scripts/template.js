function getNotesTemplate(noteIndex){
    return /*html*/`
        <p>${allNotes.notesTitle[noteIndex]}</p>
        <p>+ ${allNotes.notes[noteIndex]}<button onclick="setToArchivNote(${noteIndex})">Archiv</button><button onclick="trashNote(${noteIndex})">Papierkorb</button></p>
    `
}
function getArchivNotesTemplate(archivNoteIndex){
    return /*html*/`
        <p>${allNotes.archivNotesTitle[archivNoteIndex]}</p>
        <p>+ ${allNotes.archivNotes[archivNoteIndex]}<button onclick="trashNoteFromArchiv(${archivNoteIndex})">Papierkorb</button></p>
    `
}
function getTrashNotesTemplate(trashNoteIndex){
    return /*html*/`
    <p>${allNotes.trashNotesTitle[trashNoteIndex]}</p>
        <p>+ ${allNotes.trashNotes[trashNoteIndex]}<button onclick="deleteNote(${trashNoteIndex})">X</button></p>
    `
}