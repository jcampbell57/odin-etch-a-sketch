
//default
let size = 13;
let cells = Math.pow(size,2);
const sketch = document.querySelector('.sketch');
const columns = document.querySelector('.columns');
const rows = document.querySelector('.rows');

//etch-a-sketch logic
function generate(cells) {
    sketch.style.setProperty('--grid-rows', size);
    sketch.style.setProperty('--grid-cols', size);
    for (i=0; i<cells; i++) {
        let div = document.createElement('div');
        sketch.appendChild(div).className = 'cell';
    } 
}

generate(cells);

