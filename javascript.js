const gridContainer = document.querySelector('.gridContainer')
const mainSection = document.querySelector('.mainSection')
const buttons = document.querySelector('.buttons')

let mode = 'black'

for(let i = 0; i < 10000; i++){
    let gridPiece = document.createElement('div')
    gridPiece.classList.add('gridCell')
    gridPiece.addEventListener('mouseover', gridCellPen)
    gridContainer.appendChild(gridPiece)
}

function gridCellPen(){
    if (mode == 'black'){
        this.style.backgroundColor = 'black'
    } 
    else if (mode == 'rainbow'){
        this.style.backgroundColor = randomHexColor()
    }
    else if (mode == 'fade'){
        if (this.classList.contains('fadeFour')){
            this.style.filter = `brightness(0%)`
        }
        else if (this.classList.contains('fadeThree')){
            this.style.filter = `brightness(20%)`
            this.classList.add('fadeFour')
        }
        else if (this.classList.contains('fadeTwo')){
            this.style.filter = `brightness(40%)`
            this.classList.add('fadeThree')
        }
        else if (this.classList.contains('fadeOne')){
            this.style.filter = `brightness(60%)`
            this.classList.add('fadeTwo')
        }
        else if (this.classList.contains('gridCell')){
            this.style.filter = `brightness(80%)`
            this.classList.add('fadeOne')
        }
    }
    else if (mode == 'custom'){
        let chosenColor = document.getElementById("colorSelector").value
        this.style.backgroundColor = chosenColor
    }
    else {
        return
    }
}

let resetButton = document.createElement('button')
resetButton.addEventListener('click', resetGrid)
resetButton.textContent = 'Clear'
resetButton.classList.add('resetButton')
buttons.appendChild(resetButton)

let blackButton = document.createElement('button')
blackButton.addEventListener('click', blackColor)
blackButton.textContent = 'Black'
blackButton.classList.add('blackButton')
buttons.appendChild(blackButton)

let rainbowButton = document.createElement('button')
rainbowButton.addEventListener('click', rainbowColorActivator)
rainbowButton.textContent = 'Rainbow'
rainbowButton.classList.add('rainbowButton')
buttons.appendChild(rainbowButton)

let fadeButton = document.createElement('button')
fadeButton.addEventListener('click', fadeColor)
fadeButton.textContent = 'Fade'
fadeButton.classList.add('fadeButton')
buttons.appendChild(fadeButton)

let resizeButton = document.createElement('button')
resizeButton.addEventListener('click', resizeGrid)
resizeButton.textContent = 'Resize Grid'
resizeButton.classList.add('resizeButton')
buttons.appendChild(resizeButton)

let customColorButton = document.createElement('button')
customColorButton.addEventListener('click', customColor)
customColorButton.textContent = 'Custom Color'
customColorButton.classList.add('customColorButton')
buttons.appendChild(customColorButton)

let customColorSelector = document.createElement('input')
customColorSelector.setAttribute("type", "color")
customColorSelector.setAttribute("name", "colorSelector")
customColorSelector.setAttribute("id", "colorSelector")
buttons.appendChild(customColorSelector)

function blackColor(){
    mode = 'black'
    blackButton.classList.add('activeButton')
    rainbowButton.classList.remove('activeButton')
    fadeButton.classList.remove('activeButton')
    customColorButton.classList.remove('activeButton')
}

function rainbowColorActivator(){
    mode = 'rainbow'
    rainbowButton.classList.add('activeButton')
    fadeButton.classList.remove('activeButton')
    blackButton.classList.remove('activeButton')
    customColorButton.classList.remove('activeButton')
}

function fadeColor(){
    mode = 'fade'
    fadeButton.classList.add('activeButton')
    rainbowButton.classList.remove('activeButton')
    blackButton.classList.remove('activeButton')
    customColorButton.classList.remove('activeButton')
}

function customColor(){
    mode = 'custom'
    customColorButton.classList.add('activeButton')
    fadeButton.classList.remove('activeButton')
    rainbowButton.classList.remove('activeButton')
    blackButton.classList.remove('activeButton')
}

blackButton.classList.add('activeButton')

function resetGrid(){
    let gridCell = document.querySelectorAll('.gridCell')
    for (let i = 0; i < gridCell.length; i++){
        gridCell[i].style.backgroundColor = 'white'
        gridCell[i].style.filter = 'brightness(100%)'
        gridCell[i].classList.remove('fadeOne', 'fadeTwo', 'fadeThree', 'fadeFour')
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

function playAudio(url) {
    new Audio(url).play();
  }