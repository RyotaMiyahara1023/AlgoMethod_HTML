const textarea = document.getElementById("inputText");
const counter = document.getElementById("counterText");

let timeoutId = null;

textarea.addEventListener("input", () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        const length = textarea.value.length;
        counter.textContent = `文字数: ${length}`;
    }, 1000);
});