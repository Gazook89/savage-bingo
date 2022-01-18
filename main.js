import { newCard, loadCard, resetCard } from './newCard.js';
import { importJSON } from './import.js';

document.getElementById('new').addEventListener('click', newCard);  // todo: this is returning "true" and thus looking for json.imported-bingo-card which doesnt exist.
document.getElementById('reset').addEventListener('click', resetCard);
document.getElementById('import').addEventListener('click', importJSON);
[newCard, showImportedFileName].forEach(func=>{document.getElementById('import').addEventListener('change', func)}) ;

if(localStorage.length){
    loadCard();
    showImportedFileName();
} else {
    newCard();
}

function showImportedFileName() {
    if(localStorage.getItem('imported-file-name') != null){
        const msg = 'Loaded: ' + localStorage.getItem('imported-file-name');
        if(document.getElementById('filename')){
            document.getElementById('filename').textContent = msg;
        } else {
            const filename = Object.assign(document.createElement('li'), {id: 'filename'});
            filename.textContent = msg;
            document.getElementById('options').append(filename);
        }
    }
}


