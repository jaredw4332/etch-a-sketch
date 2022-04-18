const gridContainer = document.querySelector('.gridContainer')
const mainSection = document.querySelector('.mainSection')
const buttons = document.querySelector('.buttons')

function gridMouseOver(){
    gridPiece.classList.add('gridMouseOver')
}

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
rainbowButton.addEventListener('click', rainbowColorActivator)
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
        gridColored[i].removeAttribute('id')
        gridColored[i].removeAttribute('style')

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

function resizeGrid() {
    let gridSize = prompt("Enter a number between 1 and 100");
    if (Number(gridSize) && (gridSize > 0) && (gridSize < 101)) {
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
        resetGrid()
    }
    else{
        alert("Invalid entry. Please try again.")
    }
}

let rainbowColored = 0

function rainbowColorActivator(){
    let gridPiece = document.getElementsByClassName('gridCell')
    for (let i = 0; i < gridPiece.length; i++){
        gridPiece[i].addEventListener('mouseover', rainbowColorGenerator)
    }

    function rainbowColorGenerator() {
        this.id = `rainbowCell${rainbowColored}`
        let rainbowCell = document.getElementById(this.id)
        rainbowCell.style.backgroundColor = randomHexColor()
        rainbowColored += 1
    }
}

/* need to assign unique id to each particular div hovered over 
then assign a random color to that id */
