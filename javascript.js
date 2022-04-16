const gridContainer = document.querySelector('.gridContainer')
const mainSection = document.querySelector('.mainSection')
const buttons = document.querySelector('.buttons')
let mode = 1

for(let i = 0; i < 10000; i++){
    let gridPiece = document.createElement('div')
    gridPiece.classList.add('gridCell')
    gridPiece.addEventListener('mouseover', gridMouseOver)
    gridContainer.appendChild(gridPiece)


    function gridMouseOver(){
        gridPiece.classList.add('gridMouseOver')
    }
}

let resetButton = document.createElement('button')
resetButton.addEventListener('click', resetGrid)
resetButton.textContent = 'Clear'
resetButton.classList.add('resetButton')
buttons.appendChild(resetButton)

let rainbowButton = document.createElement('button')
rainbowButton.addEventListener('click', rainbowColorGenerator)
rainbowButton.textContent = 'Rainbow'
rainbowButton.classList.add('rainbowButton')
buttons.appendChild(rainbowButton)

let fadeButton = document.createElement('button')
//fadeButton.addEventListener('click', fading colour function)
fadeButton.textContent = 'Fade'
fadeButton.classList.add('fadeButton')
buttons.appendChild(fadeButton)

let resizeButton = document.createElement('button')
resizeButton.addEventListener('click', resizeGrid)
resizeButton.textContent = 'Resize Grid'
resizeButton.classList.add('resizeButton')
buttons.appendChild(resizeButton)

function resetGrid(){
    let gridColored = document.querySelectorAll('.gridMouseOver')
    for (let i = 0; i < gridColored.length; i++){
        gridColored[i].classList.remove('gridMouseOver')

    }
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max+1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b]
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function rainbowColorGenerator() {
    while (mode == 1) {
        let randomColor = randomHexColor()
        console.log(randomColor)
        document.getElementsByClassName('gridMouseOver').style.backgroundColor = randomColor
    }
}

function resizeGrid() {
    let gridSize = prompt("Enter a number between 1 and 100");
    if (Number(gridSize) && (gridSize > 0) && (gridSize < 101)) {
        document.getElementById("gridContainer").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    }
    else{
        console.log('no')
    }
}