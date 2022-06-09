
//default
let defaultSize = 16;
const sketchpad = document.querySelector('.sketchpad');

//generate grid with css grid
//let cells = Math.pow(size,2);
/* function generate(cells) {
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i=0; i<cells; i++) {
        let div = document.createElement('div');
        sketchpad.appendChild(div).className = 'cell';
    } 
} */

//generate grid inline-block
function generate(size) {

    //clear previous grid
    let rows = sketchpad.querySelectorAll('div');
    rows.forEach((div) => div.remove());

    //generate grid
    for (let i=0; i<size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row)

        for (let i=0; i<size; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.style.width = `${500 / size}px`;
            div.style.height = `${500 / size}px`;
            row.appendChild(div);
        }   
    }
};

//mouseover color change
sketchpad.addEventListener('mouseover', changeColor);
function changeColor(e) {
    let cell = e.target;
    let red = Math.floor((Math.random() * 256) +1);
    let green = Math.floor((Math.random() * 256) +1);
    let blue = Math.floor((Math.random() * 256) +1);
    return cell.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
/* cell.addEventListener('mouseenter', (e) => {
    console.log(e)
    cell.style.backgroundColor = 'darkred'
})     */


//reset board
function reset() {
    generate(defaultSize)
}


//change cell size with input 
function changeSize(input) {
    if (input > 1 && input < 101) {
        generate(input);
    } else {
        console.log('error!')
    }

}

generate(defaultSize);

