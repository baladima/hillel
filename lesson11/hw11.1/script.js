document.addEventListener("DOMContentLoaded", function() {
    // let cols = prompt("Введіть кількість колонок:")
    // let rows = prompt("Введіть кількість рядків:")

    let cols = 10;
    let rows = 10;
    const container = document.getElementById("container");

    function createGrid(cols, rows) {
        for (let i = 0; i < rows; i++) {
            const row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
            
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                row.appendChild(cell);
            }
        }
    }

    createGrid(cols, rows);
});