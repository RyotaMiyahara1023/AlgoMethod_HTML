function updateClock() {
    const now = new Date();

    const year = String(now.getFullYear()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = Math.floor(now.getMilliseconds() / 100);

    const timeString = `西暦${year}年${month}月${day}日   ${hours}時${minutes}分${seconds}秒${milliseconds}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 100);

updateClock();