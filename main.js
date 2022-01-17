import squares from './squares.js';

class Square {
    constructor(title, description, rule){
        this.title = title;
        this.description = description;
        this.rule = rule;
    }
    
    mark(){
        console.log('mark');
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
        document.querySelector('#bingo-card').append(newSquare);
    }
}

for(let x=0;x<24;x++){
    const rand = Math.floor(Math.random()*squares.length);
    const square = new Square(squares[rand].name, squares[rand].desc, squares[rand].rule);
    square.render();
}

const freeSquare = Object.assign(document.createElement('div'), {className: 'square free-square'});
freeSquare.innerHTML = `<h1>Free</h1>`;
document.querySelector('#bingo-card').append(freeSquare);

// squares.forEach(item => {
//     const square = new Square(item.name, item.desc, item.rule);
//     square.render();
// });

