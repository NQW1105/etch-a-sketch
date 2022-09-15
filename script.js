function removeAllChildNodes(grids) {
  while (grids.firstChild) {
    grids.removeChild(grids.firstChild);
  }
}

function createGrids(column, row) {

  // Remove all elements inside grid-container
  removeAllChildNodes(grids);

  // Test other methods to create 16x16 grids
  grids.style.gridTemplateColumns = `repeat(${column}, auto)`;

  let numOfIteration = column * row;
  for (let i = 1; i <= numOfIteration; i++) {
    const div = document.createElement('div');
    // console.log(div);
    div.classList.add('pixels');
    div.textContent = 'HI';
    grids.appendChild(div);
    }
  
  const pixels = document.querySelectorAll('.pixels');
// console.log(pixels);

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", sketch)
    })
// pixels.forEach((pixel) => console.log(pixel));
}


function sketch(event) {
  // console.log(event);
  event.target.classList.add('sketched');
}


function resetGrid() {
  
  let newColumn = "run-loop";
  while (isNaN(newColumn) == true) {
    newColumn = prompt("Erasing grids. Key in new grid column? Press cancel if use same grids");
    if (newColumn == "" || newColumn > 100) {
      newColumn = "run-loop";
    }
  }
  
  let newRow = "run-loop";
  while (isNaN(newRow) == true) {
    newRow = prompt("Done reset grids. Key in new grid row?");
    if (newRow == "" || newRow > 100) {
      newRow = "run-loop";
    }
  }
  
  pixels.forEach((pixel) => {
    pixel.classList.remove('sketched');
  }) 
  
  // use new grid value into create grid function  
  createGrids(newColumn, newRow);
  
}


const grids = document.querySelector('#grid-container');
// console.log(grids);
createGrids(16, 16);

const pixels = document.querySelectorAll('.pixels');


const resetButton = document.querySelector('button');
// console.log(resetButton);
resetButton.addEventListener('click', resetGrid)

// Extra credit : random RGB value when hover with 
// Each pass adds 10% black. After 10 passes, the square turns completely black

// Create red frame with fixed width
// Space the pixels evenly
// Touch up button css