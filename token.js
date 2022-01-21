import { newCard } from './newCard.js';

export class Token {
    constructor(file, container ){
        this.id = file;
        // this.container = container;
    }

    removeFromFullSet(key){
        const storage = JSON.parse(localStorage.getItem('full-set'));
        console.log(storage);
        delete storage[key];
        localStorage.setItem('full-set', JSON.stringify(storage));
    }

    render(){
        const fileNoExtension = this.id.slice(0, -5);
        const token = Object.assign(document.createElement('li'), {id: fileNoExtension, className: 'token'});
        token.textContent = this.id;
        const btn = Object.assign(document.createElement('span'), {id: `clear-${fileNoExtension}`, className: 'clear-file'});
        btn.textContent = 'X';
        btn.addEventListener('click', ()=>{
            this.removeFromFullSet(fileNoExtension);
            document.getElementById(fileNoExtension).remove();
            newCard();
        });
        // this.container.append(token);
        token.insertBefore(btn, token.childNodes[0]);
        return token;
    }
}


