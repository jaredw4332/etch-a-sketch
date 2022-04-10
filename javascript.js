// create multiple divs
// set divs as certain background color when clicked or mouse hovers or hovered while-
// -mouse clicking

const gridContainer = document.querySelector('.gridContainer')

for(let i = 0; i < 256; i++){
    let gridPiece = document.createElement('div')
    gridPiece.classList.add('grid')
    gridPiece.textContent = 'gun'
    gridPiece.addEventListener('mouseover', gridMouseOver, true)
    gridContainer.appendChild(gridPiece)


    function gridMouseOver(){
        gridPiece.classList.add('gridMouseOver')
    }
}