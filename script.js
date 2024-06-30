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
  const row = document.querySelectorAll('.row');
  row.forEach(row => createCols(row, columnCount));
}


// Website script
const container = document.querySelector('#container');
const rowCount = 10;
const columnCount = 10;

createGrid(container, rowCount, columnCount);
