const textarea = document.getElementById("inputText");
const counter = document.getElementById("counterText");

let timeoutId = null;

textarea.addEventListener("input", () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
        const length = textarea.value.length;
        counter.textContent = `文字数: ${length}`;
    }, 1000);
});