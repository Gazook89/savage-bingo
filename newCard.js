import defaultSquares from './squares.js'

class Square {
    constructor(uid, heading, subheading, back, tooltip, book, page, url, marked){
        this.uid = uid;
        this.heading = heading;
        this.subheading = subheading;
        this.back = back;
        this.tooltip = tooltip || undefined;
        this.book = book;
        this.page = page;
        this.url = url;
        this.marked = marked
    }
    
    mark(evt){
        evt.currentTarget.classList.toggle('marked');
        evt.currentTarget.classList.remove('show-info');
        const arr = JSON.parse(localStorage.getItem('sb-sub-set'));

        arr.forEach(item => {
            if(item.uid == parseInt(evt.currentTarget.id)){
                const stat = item.marked;
                item.marked =  !stat;
            }
        })
        localStorage.setItem('sb-sub-set', JSON.stringify(arr));
    }

    showInfo(evt){
        evt.stopPropagation();
        const square = evt.currentTarget.closest('.square');
        square.classList.toggle('show-info');
    }

    template(){

        return [
            `<div class='info-button'>i</div>`,
            `<h1>${this.heading}</h1>`,
            `<div class='desc'>${this.back}</div>`,
            this.subheading != undefined ? `<div class='subheading'>${this.subheading}</div>` : null,
            this.tooltip != undefined ? `<div class='tooltip'>${this.tooltip}</div>` : null,
            `<div class='reference'>${this.book} | ${this.page}</div>`
        ].join('\n')
    }

    render(){
        const marked = this.marked == true ? ' marked' : '';
        const newSquare = Object.assign(document.createElement('div'), {id: this.uid, className: `square ${marked}`});
        newSquare.innerHTML = this.template();
        newSquare.addEventListener('click', this.mark, false);
        newSquare.querySelector('.info-button').addEventListener('click', this.showInfo, false);
        document.querySelector('#bingo-card').append(newSquare);
    }
}

function freeSquare() {
    const freeSquare = Object.assign(document.createElement('div'), {className: 'square free-square marked'});
    freeSquare.innerHTML = `<h1>Free</h1>`;
    document.querySelector('#bingo-card').append(freeSquare);
};

function concatFullSet(){
    const storage = JSON.parse(localStorage.getItem('sb-full-set'));
    let arrayOfSets = [];
    arrayOfSets = Object.keys(storage).map(key=> storage[key]);
    arrayOfSets = arrayOfSets.flat();
    return arrayOfSets;
}

export function newCard(){
    let squareList = [];

    // if fullset exists

    let availableSquares = concatFullSet() || defaultSquares;
    if(availableSquares.length == 0){ console.log('No square sets to pull from.'); return; }
    document.querySelector('#bingo-card').innerHTML = '';

    for(let x=0;x<24;x++){
        const rand = Math.floor(Math.random()*availableSquares.length);
        const square = new Square(x, availableSquares[rand].heading, availableSquares[rand].subheading, availableSquares[rand].back, availableSquares[rand].tooltip, availableSquares[rand].book, availableSquares[rand].page, availableSquares[rand].url);
        squareList.push(square);
        square.render();
    }

    freeSquare();

    localStorage.setItem('sb-sub-set', JSON.stringify(squareList));
};

export function loadCard() {
    let squares = JSON.parse(localStorage.getItem('sb-sub-set'));
    for(let x=0;x<24;x++){
            const square = new Square(x, squares[x].heading, squares[x].subheading, squares[x].back, squares[x].tooltip, squares[x].book, squares[x].page, squares[x].marked);   
            square.render();
        };
    freeSquare();
}

export function resetCard() {
    document.querySelectorAll('.square:not(.free-square').forEach(square => {square.classList.toggle('marked', false)})
}
