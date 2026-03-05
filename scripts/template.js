function getTemplate(note, indexNote, htmlButton){
 return /*html*/`
 <div class="note flex-container">
                <div class="note-headline"><p><strong>${note.title}</strong></p></div>
                <div class="note-content"><p>${note.note}</p></div>
                <div class="container-btn flex-container">
                ${htmlButton}
</div>
                </div>`
                
}