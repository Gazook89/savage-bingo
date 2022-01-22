import { newCard, loadCard, resetCard } from './newCard.js';
import defaultSquares from './squares.js'
import { importJSON } from './import.js';
import { Token } from './token.js';

document.getElementById('new').addEventListener('click', newCard);  
document.getElementById('reset').addEventListener('click', resetCard);
Array.from(document.getElementsByClassName('import')).forEach(el=>{
    el.addEventListener('click', importJSON);
    if(el.id == 'add-defaults'){
        el.addEventListener('click', showFileName)
    }
});
[newCard, showFileName].forEach(func=>{Array.from(document.getElementsByClassName('import')).forEach(el=>el.addEventListener('change', func))}) ;
document.getElementById('clear-storage-link').onclick = ()=>{
    if(Object.keys(localStorage).filter(x => x.startsWith('sb-')).length){
        clearLocalStorage('sb-');
        console.log('storage cleared.');
    }
    return false;
};




if(Object.keys(localStorage).filter(x => x.startsWith('sb-')).length){
    loadCard();
    if(Object.keys(JSON.parse(localStorage.getItem('sb-full-set'))).length > 0){
        document.getElementById('no-files-msg').classList.add('hidden');
        showFileName();
    } else {
        document.getElementById('no-files-msg').classList.remove('hidden');
    }
} else {
    localStorage.setItem('sb-full-set', JSON.stringify({"defaultSquares" : defaultSquares}));
    newCard();
}

showFileName();


function showFileName() {
        const fileList = document.getElementById('file-list');
        const filenames = Object.keys(JSON.parse(localStorage.getItem('sb-full-set')));
        filenames.forEach(file => {
            if(document.getElementById(file)){ return };
            const token = new Token(file + '.json');
            fileList.append(token.render());
        })
}

function clearLocalStorage(prefix){
    Object.keys(localStorage).filter(x => x.startsWith(prefix)).forEach(x => localStorage.removeItem(x))
}

let fileListObserver = new MutationObserver(mutations => {
    if(mutations[0].target.childElementCount > 1){
        document.getElementById('no-files-msg').classList.add('hidden');
    } else {
        document.getElementById('no-files-msg').classList.remove('hidden');
    }
});

fileListObserver.observe(document.getElementById('file-list'), {
    childList : true
})
