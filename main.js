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
        const filename = localStorage.getItem('imported-file-name');
        const msg = 'Loaded: ' + filename;
        const options = document.getElementById('options');
        if(document.getElementById('filename')){
            document.getElementById('filename').textContent = msg;
        } else {
            const btn = Object.assign(document.createElement('span'), {id: `clear-${filename.slice(0,-5)}`, className: 'clear-file'});
            btn.addEventListener('click', ()=>{
                localStorage.clear();
                fileLabel.remove();
                newCard();

            });
            btn.textContent = 'X';
            const fileLabel = Object.assign(document.createElement('li'), {id: 'filename'});
            fileLabel.textContent = msg;
            options.append(fileLabel);

            fileLabel.insertBefore(btn, fileLabel.childNodes[0]);
        }
    }
}


