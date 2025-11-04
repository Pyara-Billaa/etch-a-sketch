const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function createGrid(size) {
    const totalSquares = size * size;

    for (i = 0; i < totalSquares; i++) {
        const squares = document.createElement("div");
        squares.className = "squares";
        squares.style.width=`calc(960px/${size})`;
        squares.style.height=`calc(960px/${size})`;

        squares.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            squares.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
        container.appendChild(squares);
    }
}

const button = document.createElement("button");
button.id = "button";
button.textContent = "Set grid size";
document.body.prepend(button);

button.addEventListener("click", () => {
    let size = parseInt(prompt(`Enter the size of grid (1 - 100 : )`));

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    }
    container.innerHTML = "";
    createGrid(size);
})

createGrid(16);