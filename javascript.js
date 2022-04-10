// create multiple divs
// set divs as certain background color when clicked or mouse hovers or hovered while-
// -mouse clicking

const gridContainer = document.querySelector('.gridContainer')

for(let i = 0; i < 256; i++){
    let gridPiece = document.createElement('div')
    gridPiece.classList.add('grid')
    gridPiece.addEventListener('mouseover', gridMouseOver, true)
    gridContainer.appendChild(gridPiece)


    function gridMouseOver(){
        gridPiece.classList.add('gridMouseOver')
    }
}

let resetButton = document.createElement('button')
resetButton.addEventListener('click', resetGrid)
resetButton.textContent = 'Clear'
document.body.appendChild(resetButton)

function resetGrid(){
    let gridColored = document.querySelectorAll('.gridMouseOver')
    for (let i = 0; i < gridColored.length; i++){
        gridColored[i].classList.remove('gridMouseOver')

    }
}