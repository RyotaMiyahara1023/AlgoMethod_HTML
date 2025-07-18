function updateTableLayout() {
    const table = document.getElementById("table");
    const width = table.offsetWidth;

    table.classList.remove("cols-2", "cols-3", "stripe-rows-2", "stripe-rows-3");

    if (width <= 600) {
        table.classList.add("cols-2", "stripe-rows-2");
    } else {
        table.classList.add("cols-3", "stripe-rows-3");
    }
}

window.addEventListener("DOMContentLoaded", updateTableLayout);
window.addEventListener("resize", updateTableLayout);