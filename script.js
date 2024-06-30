
function createRows(container, rowCount) {
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }
}

function createCols(row, columnCount) {
  for (let i = 0; i < columnCount; i++) {
    const col = document.createElement('div');
    col.classList.add('col');
    row.appendChild(col);
  }
}

function createGrid(container, rowCount, columnCount) {
  createRows(container, rowCount);
  const row = document.querySelector('.row');
  createCols(row, columnCount);
}


// Website script
const container = document.querySelector('#container');
const rowCount = 5;
const columnCount = 5;

createRows(container, rowCount);
