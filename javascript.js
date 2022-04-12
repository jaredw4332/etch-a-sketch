const gridContainer = document.querySelector('.gridContainer')
const mainSection = document.querySelector('.mainSection')
const leftButtons = document.querySelector('.leftButtons')

for(let i = 0; i < 256; i++){
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
mainSection.appendChild(resetButton)

let rainbowButton = document.createElement('button')
//rainbowButton.addEventListener('click', rainbow colour function)
rainbowButton.textContent = 'Rainbow'
rainbowButton.classList.add('rainbowButton')
leftButtons.appendChild(rainbowButton)

let fadeButton = document.createElement('button')
//fadeButton.addEventListener('click', fading colour function)
fadeButton.textContent = 'Fade'
fadeButton.classList.add('fadeButton')
leftButtons.appendChild(fadeButton)

function resetGrid(){
    let gridColored = document.querySelectorAll('.gridMouseOver')
    for (let i = 0; i < gridColored.length; i++){
        gridColored[i].classList.remove('gridMouseOver')

    }
}