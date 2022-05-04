const gridContainer = document.querySelector('.gridContainer')
const mainSection = document.querySelector('.mainSection')
const buttons = document.querySelector('.buttons')

let mode = 'custom'

for(let i = 0; i < 10000; i++){
    let gridPiece = document.createElement('div')
    gridPiece.classList.add('gridCell')
    gridPiece.addEventListener('mouseover', gridCellPen)
    gridContainer.appendChild(gridPiece)
}

function gridCellPen(){
    if (mode == 'custom'){
        let chosenColor = document.getElementById("colorSelector").value
        this.style.backgroundColor = chosenColor
    } 
    if (mode == 'rainbow'){
        this.style.backgroundColor = randomHexColor()
    }
    if (mode == 'fade'){
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
}

const customColorSelector = document.createElement('input')
customColorSelector.setAttribute("type", "color")
customColorSelector.setAttribute("name", "colorSelector")
customColorSelector.setAttribute("id", "colorSelector")
customColorSelector.style.backgroundColor = 'black'
buttons.appendChild(customColorSelector)

const customColorButton = document.createElement('button')
customColorButton.addEventListener('click', customColor)
customColorButton.textContent = 'Color'
customColorButton.classList.add('customColorButton')
buttons.appendChild(customColorButton)

const rainbowButton = document.createElement('button')
rainbowButton.addEventListener('click', rainbowColorActivator)
rainbowButton.textContent = 'Rainbow'
rainbowButton.classList.add('rainbowButton')
buttons.appendChild(rainbowButton)

const fadeButton = document.createElement('button')
fadeButton.addEventListener('click', fadeColor)
fadeButton.textContent = 'Fade'
fadeButton.classList.add('fadeButton')
buttons.appendChild(fadeButton)

const resetButton = document.createElement('button')
resetButton.addEventListener('click', resetGrid)
resetButton.textContent = 'Clear'
resetButton.classList.add('resetButton')
buttons.appendChild(resetButton)

customColorSelector.addEventListener("input", function (){
    customColorSelector.style.backgroundColor = customColorSelector.value
})

function rainbowColorActivator(){
    mode = 'rainbow'
    rainbowButton.classList.add('activeButton')
    fadeButton.classList.remove('activeButton')
    customColorButton.classList.remove('activeButton')
}

function fadeColor(){
    mode = 'fade'
    fadeButton.classList.add('activeButton')
    rainbowButton.classList.remove('activeButton')
    customColorButton.classList.remove('activeButton')
}

function customColor(){
    mode = 'custom'
    customColorButton.classList.add('activeButton')
    fadeButton.classList.remove('activeButton')
    rainbowButton.classList.remove('activeButton')
}

customColorButton.classList.add('activeButton')

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

const gridSize = document.querySelector('#gridSizeSlider')
const output = document.querySelector('.gridOutput')
output.textContent = `${gridSize.value} x ${gridSize.value}`

gridSize.addEventListener('input', function() {
    output.textContent = `${gridSize.value} x ${gridSize.value}`;
});

gridSize.addEventListener('change', function() {
    gridContainer.style.gridTemplateRows = `repeat(${gridSize.value}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`
    resetGrid()
});

function playAudio(url) {
    new Audio(url).play();
}