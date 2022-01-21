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
} else {
    localStorage.setItem('full-set', JSON.stringify({"defaultSquares" : defaultSquares}));
    newCard();
}

showImportedFileName();


function showImportedFileName() {
        const fileList = document.getElementById('file-list');
        const filenames = Object.keys(JSON.parse(localStorage.getItem('full-set')));
        filenames.forEach(file => {
            if(document.getElementById(file)){ return };
            const token = new Token(file + '.json');
            fileList.append(token.render());
        })
        
        
        
        

}


