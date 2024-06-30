function createGrid(container, width, height) {
  for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
    console.log('div created');
  }
}


// Website script
const container = document.querySelector('.container');
const gridWidth = 16;
const gridHeight = 16;

createGrid(container, gridWidth, gridHeight);