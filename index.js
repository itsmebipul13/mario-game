let currFrogTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();  
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selecTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setFrog, 1000);
    setInterval(setBomb, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setFrog() {
    if (gameOver) {
        return;
    }

    if (currFrogTile) {
        currFrogTile.innerHTML = "";
    }

    let frog = document.createElement("img");
    frog.src = "./frog3.png"; // Update with the correct image path

    let num = getRandomTile();
    if (currBombTile && currFrogTile.id === num) {
        return;
    }
    currFrogTile = document.getElementById(num);
    currFrogTile.appendChild(frog);
}

function setBomb() {
    if (gameOver) {
        return;
    }

    if (currBombTile) {
        currBombTile.innerHTML = "";
    }

    let bomb = document.createElement("img");
    bomb.src = "./image-from-rawpixel-id-6287121-original.png"; // Update with the correct image path

    let num = getRandomTile();
    if (currBombTile && currFrogTile && currFrogTile.id === num) {
        return;
    }
    currBombTile = document.getElementById(num);
    currBombTile.appendChild(bomb);
}

function selecTile() {
    if (gameOver) {
        return;
    }

    if (this == currFrogTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currBombTile) {
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
}
