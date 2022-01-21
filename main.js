import { newCard, loadCard, resetCard } from './newCard.js';
import defaultSquares from './squares.js'
import { importJSON } from './import.js';
import { Token } from './token.js';

document.getElementById('new').addEventListener('click', newCard);  // todo: this is returning "true" and thus looking for json.imported-bingo-card which doesnt exist.
document.getElementById('reset').addEventListener('click', resetCard);
document.getElementById('import').addEventListener('click', importJSON);
[newCard, showImportedFileName].forEach(func=>{document.getElementById('import').addEventListener('change', func)}) ;

if(localStorage.length){
    loadCard();
    showImportedFileName();
} else {
    localStorage.setItem('full-set', JSON.stringify({"defaultSquares" : defaultSquares}));
    newCard();
}

function showImportedFileName() {
    if(localStorage.getItem('imported-file-name') != null){
        const filename = localStorage.getItem('imported-file-name');
        const msg = 'Loaded: ' + filename;
        const fileList = document.getElementById('file-list');
        if(document.getElementById('filename')){
            document.getElementById('filename').textContent = msg;
        } else {

            const token = new Token(filename);
            fileList.append(token.render());

        }
    }
}


