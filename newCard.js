import defaultSquares from './squares.js'

class Square {
    constructor(title, description, rule){
        this.title = title;
        this.description = description;
        this.rule = rule;
    }
    
    mark(evt){
        evt.currentTarget.classList.toggle('marked');
    }

    template(){
        return [
            `<h1>${this.title}</h1>`,
            `<p>${this.description}</p>`,
            `<p>${this.rule}</p>`
        ].join('\n')
    }

    render(){
        const newSquare = Object.assign(document.createElement('div'), {className: 'square'});
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
        const square = new Square(availableSquares[rand].name, availableSquares[rand].desc, availableSquares[rand].rule);
        squareList.push(availableSquares[rand]);
        square.render();
    }

    freeSquare();

    localStorage.setItem('sub-set', JSON.stringify(squareList));
};

export function loadCard() {
    let squares = JSON.parse(localStorage.getItem('sub-set'));
    for(let x=0;x<24;x++){
            const square = new Square(squares[x].name, squares[x].desc, squares[x].rule);
            square.render();
        };
    freeSquare();
}

export function resetCard() {
    document.querySelectorAll('.square:not(.free-square').forEach(square => {square.classList.toggle('marked', false)})
}
