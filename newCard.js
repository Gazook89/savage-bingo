import defaultSquares from './squares.js'

class Square {
    constructor(uid, name, description, rule, book, page, marked){
        this.uid = uid;
        this.name = name;
        this.description = description;
        this.rule = rule || undefined;
        this.book = book;
        this.page = page;
        this.marked = marked
    }
    
    mark(evt){
        evt.currentTarget.classList.toggle('marked');
        const arr = JSON.parse(localStorage.getItem('sub-set'));

        arr.forEach(item => {
            if(item.uid == parseInt(evt.currentTarget.id)){
                const stat = item.marked;
                item.marked =  !stat;
            }
        })
        localStorage.setItem('sub-set', JSON.stringify(arr))
    }

    template(){

        return [
            `<h1>${this.name}</h1>`,
            `<div class='desc'>${this.description}</div>`,
            this.rule != undefined ? `<div class='rule'>${this.rule}</div>` : null,
            `<div class='reference'>${this.book} | ${this.page}</div>`
        ].join('\n')
    }

    render(){
        const marked = this.marked == true ? ' marked' : '';
        const newSquare = Object.assign(document.createElement('div'), {id: this.uid, className: `square ${marked}`});
        newSquare.innerHTML = this.template();
        newSquare.addEventListener('click', this.mark);
        document.querySelector('#bingo-card').append(newSquare);
    }
}

function freeSquare() {
    const freeSquare = Object.assign(document.createElement('div'), {className: 'square free-square marked'});
    freeSquare.innerHTML = `<h1>Free</h1>`;
    document.querySelector('#bingo-card').append(freeSquare);
};

export function newCard(){
    let squareList = [];

    // if fullset
    let availableSquares = JSON.parse(localStorage.getItem('full-set')) || defaultSquares;
    document.querySelector('#bingo-card').innerHTML = '';


    for(let x=0;x<24;x++){
        const rand = Math.floor(Math.random()*availableSquares.length);
        const square = new Square(x, availableSquares[rand].name, availableSquares[rand].desc, availableSquares[rand].rule, availableSquares[rand].book, availableSquares[rand].page);
        squareList.push(square);
        square.render();
    }

    freeSquare();

    localStorage.setItem('sub-set', JSON.stringify(squareList));
};

export function loadCard() {
    let squares = JSON.parse(localStorage.getItem('sub-set'));
    for(let x=0;x<24;x++){
            const square = new Square(x, squares[x].name, squares[x].description, squares[x].rule, squares[x].book, squares[x].page, squares[x].marked);   
            square.render();
        };
    freeSquare();
}

export function resetCard() {
    document.querySelectorAll('.square:not(.free-square').forEach(square => {square.classList.toggle('marked', false)})
}
