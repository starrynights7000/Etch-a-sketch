resize.addEventListener('click', () => sized());

function createGrid(num) {
    container.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
    container.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
    for (let i = 0; i < num * num; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid';
         grid.addEventListener('mouseover', () => grid.classList.add('hovered'));
        resetB.addEventListener('click', () => grid.classList.remove('hovered'));
        container.appendChild(grid);
    }
}
function clear() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}
function sized() {
    clear();
    let size = prompt('Provide a grid size between 1-50')
    if (size > 1 && size < 51 && Number.isInteger(+size)) {
        createGrid(size);
    }
    else {
        alert('Number out of range. Please choose a whole number between 1 and 50');
             sized();
    }
}
createGrid(16)
