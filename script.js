@@ -0,0 +1,37 @@
let i = 0;
while (i < 256) {
  const div = document.createElement('div');
  const parent = document.querySelector('.container');
  div.classList.add('grid-item');
  div.addEventListener('mouseover', () => div.classList.add('hovered'));
  parent.appendChild(div);
  i++;
}

function resetGrid() {
  const parent = document.querySelector('.container');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  let gridSize = +prompt('Please enter a number between 1 and 50.');
  while (gridSize < 1 || gridSize > 50) {
    gridSize = +prompt('Number out of range. Please choose a number between 1 and 50.')
  }

  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  let i = 0
  while (i < gridSize ** 2) {
    const div = document.createElement('div');
    const parent = document.querySelector('.container');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => div.classList.add('hovered'));
    parent.appendChild(div);
    i++;
  }
}

const resetBtn = document.querySelector('button')
resetBtn.addEventListener('click', resetGrid); 
