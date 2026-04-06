const div = document.getElementById("grid-container");
const btn = document.querySelector("#btn");
    btn.addEventListener("click",() => {
        div.innerHTML = "";
        whatSize();
    });

function whatSize(){
    let gridSize = prompt("Choose the number of squares per side", "16");
    if (gridSize != null && gridSize < 100) {
        createGrid(gridSize)
    } else {
        alert(`Choose a number smaller than 100`)
    }
}        

function createGrid(gridSize){
    const containerSize = 640;
    const squareSize = containerSize/ gridSize;

    for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("one-row")
    div.appendChild(row)

    for (let j = 0; j < gridSize; j++) {                                                                                                                                                                    
    const square = document.createElement("div");
    square.classList.add("one-square")
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px"; 
    square.style.border = "0.5px solid grey";
    square.addEventListener("mouseover", () => {
            square.style.background = "black";                                                                                                                                                
        });
    row.appendChild(square)
    }}
}



