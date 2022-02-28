import Player from "../backend/player.js";

//Global variables
let player = new Player(null, 0, 0, 0);
let playerName;
let playerMaxHP;
let playerCurrentHP;
let enemy = new Player(null, 0, 0, 0);
let enemyName;
let enemyMaxHP;
let enemyCurrentHP;
let count = parseInt(document.querySelector(".count").innerHTML);
console.log("game")

//Defines what the home screen can do
const windowHome = () => {
    console.log("windowHome")
    const startBtn = document.querySelector(".start");

    const instructionsBtn = document.querySelector(".instructions")
    const instructionsBtn2 = document.querySelector(".instructions2")
    const homeWindow = document.querySelector(".window-home");
    const startWindow = document.querySelector(".window-start");
    const instructionsWindow = document.querySelector(".window-instructions");

    startBtn.addEventListener("click", () => {
        homeWindow.classList.replace("fadeIn", "fadeOut");
        startWindow.classList.replace("fadeOut", "fadeIn");
    })
    //Adds function to the instructions button on the home screen
    instructionsBtn.addEventListener("click", () => {
        console.log(instructionsBtn);
        //homeWindow.classList.replace("fadeIn", "fadeOut");
        instructionsWindow.style.zIndex = 1;
        //instructionsWindow.classList.replace("fadeOut", "fadeIn");
        for (let i = 1; i < 7; i++) {
            const paragraph = `#paragraph-${i}`
            const current = document.getElementById(paragraph);
            
            if (current.innerHTML === "paragraph-1") {
                current.style.opacity = 1;
            } else
                current.style.opacity = 0;
        }
    });
    //Adds function to the instructions button on the game screen
    instructionsBtn2.addEventListener("click", () => {
        console.log(instructionsBtn);
        //homeWindow.classList.replace("fadeIn", "fadeOut");
        instructionsWindow.style.zIndex = 1;
        //instructionsWindow.classList.replace("fadeOut", "fadeIn");
        for (let i = 1; i < 7; i++) {
            const paragraph = `#paragraph-${i}`
            const current = document.getElementById(paragraph);
            
            if (current.innerHTML === "paragraph-1") {
                current.style.opacity = 1;
            } else
                current.style.opacity = 0;
        }
    })
}

//Defines what the instructions screen can do
const windowInstructions = () => {
    console.log("windowInstructions");
    const previousBtn = document.querySelector(".previous");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");

    let current = document.querySelector(".current");
    previousBtn.addEventListener("click", () => {
        console.log(previousBtn)
        switch (current.innerHTML) {
            case "paragraph-7":
                nextBtn.style.opacity = 1;
                nextBtn.style.pointerEvents = "all";
                current.innerHTML = "paragraph-6"
                document.querySelector("#paragraph-7").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-6").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-6":
                current.innerHTML = "paragraph-5"
                document.querySelector("#paragraph-6").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-5").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-5":
                current.innerHTML = "paragraph-4"
                document.querySelector("#paragraph-5").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-4").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-4":
                current.innerHTML = "paragraph-3"
                document.querySelector("#paragraph-4").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-3").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-3":
                current.innerHTML = "paragraph-2"
                document.querySelector("#paragraph-3").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-2").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-2":
                previousBtn.style.opacity = 0;
                previousBtn.style.pointerEvents = "none";
                current.innerHTML = "paragraph-1"
                document.querySelector("#paragraph-2").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-1").classList.replace("fadeOut", "fadeIn");
                break;
        }
    })
    nextBtn.addEventListener("click", () => {
        console.log(nextBtn);
        switch (current.innerHTML) {
            case "paragraph-1":
                previousBtn.style.opacity = 1;
                previousBtn.style.pointerEvents = "all";
                current.innerHTML = "paragraph-2"
                document.querySelector("#paragraph-1").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-2").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-2":
                current.innerHTML = "paragraph-3"
                document.querySelector("#paragraph-2").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-3").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-3":
                current.innerHTML = "paragraph-4"
                document.querySelector("#paragraph-3").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-4").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-4":
                current.innerHTML = "paragraph-5"
                document.querySelector("#paragraph-4").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-5").classList.replace("fadeOut", "fadeIn");
                break;
            case "paragraph-5":
                current.innerHTML = "paragraph-6"
                document.querySelector("#paragraph-5").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-6").classList.replace("fadeOut", "fadeIn");
                break;
             case "paragraph-6":
                nextBtn.style.opacity = 0;
                nextBtn.style.pointerEvents = "none";
                current.innerHTML = "paragraph-7"
                document.querySelector("#paragraph-6").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-7").classList.replace("fadeOut", "fadeIn");
                break;
        }
    })
    closeBtn.addEventListener("click", () => {
        console.log(closeBtn);
        current.innerHTML = "paragraph-1"
        document.querySelector("#paragraph-1").classList.remove("fadeOut");
        document.querySelector("#paragraph-1").classList.add("fadeIn");
        document.querySelector("#paragraph-2").classList.remove("fadeIn");
        document.querySelector("#paragraph-2").classList.add("fadeOut");
        document.querySelector("#paragraph-3").classList.remove("fadeIn");
        document.querySelector("#paragraph-3").classList.add("fadeOut");
        document.querySelector("#paragraph-4").classList.remove("fadeIn");
        document.querySelector("#paragraph-4").classList.add("fadeOut");
        document.querySelector("#paragraph-5").classList.remove("fadeIn");
        document.querySelector("#paragraph-5").classList.add("fadeOut");
        document.querySelector("#paragraph-6").classList.remove("fadeIn");
        document.querySelector("#paragraph-6").classList.add("fadeOut");
        document.querySelector(".window-instructions").style.zIndex = -1;
        //document.querySelector(".window-instructions").classList.replace("fadeIn", "fadeOut");
        //document.querySelector(".window-home").classList.replace("fadeOut", "fadeIn");
    })
}

//Defines what the start screen can do
const windowStart = () => {
    console.log("windowStart"); 
    const inputName = document.querySelector("#name");
    const enterBtn = document.querySelector(".enter");
    const regex = /[a-zA-Z]/;
    enterBtn.addEventListener("click", () => {
        if (inputName.value === "") {
            alert("Please enter your name.")
            return;
        } 
        if (!(regex.test(inputName.value))) {
            alert("A name must have at least one character.")
            return;
        }
        playerName = inputName.value;
        document.querySelector(".window-start").classList.replace("fadeIn", "fadeOut");
        document.querySelector(".window-home").classList.replace("fadeOut", "fadeIn");
        document.querySelector(".window").classList.replace("fadeIn", "fadeOut");
        document.querySelector(".game").classList.replace("fadeOut", "fadeIn");
        setUpGame(50, 10, 5);
        startOfGame();
    })
}

//Start the game
const setUpGame = (setHP, setPower, setDef) => {
    console.log(setHP, setPower, setDef);
    player = new Player(playerName, setHP, setPower, setDef);
    playerMaxHP = player.hp;
    playerCurrentHP = playerMaxHP;
    enemy = Player.setStats(count);
    enemyName = enemy.username;
    enemyMaxHP = enemy.hp;
    enemyCurrentHP = enemyMaxHP;
    console.log(player, enemy);
    return;
}

//Start of the game
const startOfGame = () => {
    console.log("Hello")
    document.querySelector(".human-player h2").innerHTML = playerName;
    document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
    document.querySelector(".computer-player h2").innerHTML = enemyName;
    document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            const previousAttack = document.querySelector(".previous-attack");
            const playerAttack = img.id;
            console.log(playerAttack);
            const enemyAttack = Player.foeAttack(previousAttack.innerHTML);
            console.log(enemyAttack)
            previousAttack.innerHTML = enemyAttack;
            const winner = checkWinner(playerAttack, enemyAttack)
            displayResults(winner, playerAttack, enemyAttack);

        })
    })

}

const checkWinner = (pAttack, eAttack) => {
    if (pAttack === eAttack) {
        console.log("It's a tie!");
        return 0;
    }
    if (Player.beats(pAttack, eAttack)) {
        console.log("You win");
        return 1;
    }
    if (Player.beats(eAttack, pAttack)) {
        console.log("You lost");
        return -1;
    }
}

const displayResults = (winner, pAttack, eAttack) => {
    const okBtn = document.querySelector(".ok");
    const attacks = document.querySelector(".choose-attack");
    const results = document.querySelector(".results");
    const resultsText = document.querySelector(".info h2");
    if (winner === -1) {
        const damage = Player.dealDamageTo(enemy, player);
        console.log(damage);
        playerCurrentHP -= damage;
        if (playerCurrentHP < 0) {
            playerCurrentHP = 0;
        }
        resultsText.innerHTML = `${enemyName}\'s ${eAttack} beats ${playerName}\'s ${pAttack}<br>${enemyName} deals ${damage} damage to ${playerName}`;
        document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
        document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
    }
    if (winner === 0) {
        resultsText.innerHTML = `Both ${playerName} and ${enemyName} chose ${pAttack}<br>No damage is dealt`;

    }
    if (winner === 1) {
        const damage = Player.dealDamageTo(player, enemy);
        console.log(damage);
        enemyCurrentHP -= damage;
        if (enemyCurrentHP < 0) {
            enemyCurrentHP = 0;
        }
        console.log(resultsText)
        resultsText.innerHTML = `${playerName}\'s ${pAttack} beats ${enemyName}\'s ${eAttack}<br>${playerName} deals ${damage} damage to ${enemyName}`;
        document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
        document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
    }
    //Functiont to continue game if player and enemy are not dead
    if (playerCurrentHP > 0 && enemyCurrentHP > 0) {
        attacks.classList.replace("fadeIn", "fadeOut");
        results.classList.replace("fadeOut", "fadeIn");
    }

    //Function to reload game if player is dead
    if (playerCurrentHP === 0 && enemyCurrentHP > 0) {
        const endBtn = document.querySelector(".end");
        resultsText.innerHTML = "You have lost";
        okBtn.style.opacity = 0;
        okBtn.style.pointerEvents = "none";
        endBtn.style.opacity = 1;
        endBtn.style.pointerEvents = "all";

        endBtn.addEventListener("click", () => {
            location.reload()
        })
    }

    //Function to reset the values if enemy is dead, level up the player and create a new enemy to fight
    if (playerCurrentHP > 0 && enemyCurrentHP === 0) {
        results.classList.replace("fadeIn", "fadeOut");
        count++;
        resultsText.innerHTML = "You win!<br>Choose your Reward!"
        const levelUpScreen = document.querySelector(".level-up");
        attacks.classList.replace("fadeIn", "fadeOut");
        levelUpScreen.classList.replace("fadeOut", "fadeIn");
        console.log(count);
    }
}

document.querySelector('.exit').addEventListener('click', () => {
    window.location.reload();
});


document.querySelectorAll("button").forEach(button => {
    const levelUpScreen = document.querySelector(".level-up");
    const attacks = document.querySelector(".choose-attack");
    const results = document.querySelector(".results");
    const resultsText = document.querySelector(".info h2");
    button.addEventListener("click", () => {
        if (button.className === "start" || button.className === "instructions" || button.className === "enter" || button.className === "pause") {
            return;
        }
        if (button.className === "ok") {
            attacks.classList.replace("fadeOut", "fadeIn");
            results.classList.replace("fadeIn", "fadeOut");
            resultsText.innerHTML = "Choose your next attack!"
            return;
        }
        if (button.className === "hp") {
            setUpGame((player.hp + 10), player.power, player.def);
            console.log(player, enemy)
            document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
            document.querySelector(".computer-player h2").innerHTML = enemyName;
            document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;

        }
        if (button.className === "power") {
            setUpGame(player.hp, (player.power + 5), player.def);
            console.log(player, enemy)
            document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
            document.querySelector(".computer-player h2").innerHTML = enemyName;
            document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;

        }
        if (button.className === "defense") {
            setUpGame(player.hp, player.power, (player.def + 5));
            console.log(player, enemy)
            document.querySelector(".human-player h3").innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
            document.querySelector(".computer-player h2").innerHTML = enemyName;
            document.querySelector(".computer-player h3").innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
        }
        levelUpScreen.classList.replace("fadeIn", "fadeOut");
        attacks.classList.replace("fadeOut", "fadeIn");
        resultsText.innerHTML = "Choose your attack";
        return;
    })
})

//Call the functions
windowHome();
windowInstructions();
windowStart();
