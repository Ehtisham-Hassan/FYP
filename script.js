let score = 0;
let gameStarted = false;
let gameDuration = 10000; // 10 seconds
let gameTimer;

function getRandomPosition() {
    const gameArea = document.getElementById("gameArea");
    const box = document.getElementById("box");

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    const maxX = areaWidth - boxWidth;
    const maxY = areaHeight - boxHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function moveBox() {
    const box = document.getElementById("box");
    const pos = getRandomPosition();
    box.style.left = pos.x + "px";
    box.style.top = pos.y + "px";
}

function startGame() {
    score = 0;
    gameStarted = true;
    document.getElementById("scoreDisplay").textContent = "Score: 0";
    moveBox();

    gameTimer = setTimeout(() => {
        gameStarted = false;
        alert("Game over! Your score: " + score);
    }, gameDuration);
}

document.getElementById("box").addEventListener("click", () => {
    if (gameStarted) {
        score++;
        document.getElementById("scoreDisplay").textContent = "Score: " + score;
        moveBox();
    }
});
