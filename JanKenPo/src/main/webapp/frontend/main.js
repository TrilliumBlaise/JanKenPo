class Player {

    //Constructor for the player and the AI
    constructor(username, hp, power, def) {
        this.username = username;
        this.hp = hp;
        this.power = power;
        this.def = def;
    };

    //Method for dealing damage
    static dealDamageTo(x, y) {
        console.log(x.username, x.power, y.username, y.def)
        let damage = (x.power - y.def);
        if (damage <= 0) {
            damage = 5;
        }
        return damage;
    };

    //Method for checking who beat who
    static beats(x, y) {
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        if ((x === rock) && (y === scissors)) {
            return true
        } else if ((x === paper) && (y === rock)) {
            return true
        } else if ((x === scissors) && (y === paper)) {
            return true
        } else
            return false;
    };

    static foeAttack(enemyAttack) {
        if (enemyAttack === "") {
            let ran = Math.floor(Math.random() * 3);
            switch (ran) {
                case 0:
                    {
                        enemyAttack = "rock";
                        break;
                    }
                case 1:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 2:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
            }
            return enemyAttack;
        }
        //if rock used previous uses this
        if (enemyAttack === "rock") {
            let ran = Math.floor(Math.random() * 5);
            switch (ran) {
                case 0:
                    {
                        enemyAttack = "rock";
                        break;
                    }
                case 1:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 2:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 3:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
                case 4:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
            }
            return enemyAttack;
        }
        //if paper used previous uses this
        if (enemyAttack === "paper") {
            let ran = Math.floor(Math.random() * 5);
            switch (ran) {
                case 0:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 1:
                    {
                        enemyAttack = "rock";
                        break;
                    }
                case 2:
                    {
                        enemyAttack = "rock";
                        break;
                    }
                case 3:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
                case 4:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
            }
            return enemyAttack;
        }
        //if scissors used previous uses this
        if (enemyAttack === "scissors") {
            let ran = Math.floor(Math.random() * 5);
            switch (ran) {
                case 0:
                    {
                        enemyAttack = "scissors";
                        break;
                    }
                case 1:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 2:
                    {
                        enemyAttack = "paper";
                        break;
                    }
                case 3:
                    {
                        enemyAttack = "rock";
                        break;
                    }
                case 4:
                    {
                        enemyAttack = "rock";
                        break;
                    }
            }
            return enemyAttack;
        } else
            return "Error";
    };

}

let player;
let playerName;
let playerCurrentHP;
let playerMaxHP;
let enemy = new Player(null, 0, 0, 0);
let enemyName;
let enemyCurrentHP;
let enemyMaxHP;
let count = parseInt(document.querySelector(".count").innerHTML)

//Defines what happens when inputs are pressed
document.querySelectorAll(".input").forEach(element => {
    element.addEventListener("click", function() {
        const button = element.className.toLowerCase();
        const current = document.querySelector(".current");
        //Defines what happenes if the Instructions button is pressed
        if (button === "input instructions") {
            document.querySelector(".window__home").style.display = "none";
            document.querySelector(".next").style.visibility = "visible"
            document.querySelector(".window__instructions").style.display = "block";
            current.innerHTML = 1;
            resetInstructions()
        }
        //Defines what happens if the Exit button is pressed
        if (button === "input exit") {
            document.querySelector(".window__instructions").style.display = "none";
            document.querySelector(".window__home").style.display = "block";
            current.innerHTML = 1;
            resetInstructions()
        }
        //Defines what happens if the Next button is pressed
        if (button === "input next") {
            switch (current.innerHTML) {
                case "1":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "block";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    document.querySelector(".previous").style.visibility = "visible"
                    current.innerHTML = 2
                    break;
                case "2":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "block";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 3
                    break;
                case "3":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "block";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 4
                    break;
                case "4":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "block";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 5
                    break;
                case "5":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "block";
                    document.querySelector(".next").style.visibility = "hidden"
                    current.innerHTML = 6
                    break;
            }
            console.log(button, current.innerHTML)
        }
        //Defines what happens if the Previous button is pressed
        if (button === "input previous") {
            switch (current.innerHTML) {
                case "6":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "block";
                    document.querySelector(".paragraph-6").style.display = "none";
                    document.querySelector(".next").style.visibility = "visible"
                    current.innerHTML = 5
                    break;
                case "5":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "block";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 4
                    break;
                case "4":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "block";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 3
                    break;
                case "3":
                    document.querySelector(".paragraph-1").style.display = "none";
                    document.querySelector(".paragraph-2").style.display = "block";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    current.innerHTML = 2
                    break;
                case "2":
                    document.querySelector(".paragraph-1").style.display = "block";
                    document.querySelector(".paragraph-2").style.display = "none";
                    document.querySelector(".paragraph-3").style.display = "none";
                    document.querySelector(".paragraph-4").style.display = "none";
                    document.querySelector(".paragraph-5").style.display = "none";
                    document.querySelector(".paragraph-6").style.display = "none";
                    document.querySelector(".previous").style.visibility = "hidden"
                    current.innerHTML = 1
                    break;
            }
            console.log(button, current.innerHTML)
        }
        //Defines what happens if the Start button is pressed
        if (button === "input start") {
            document.querySelector(".window__home").style.display = "none";
            document.querySelector(".window__name").style.display = "block";
        }
        if (button === "input enter") {
            document.querySelector(".name").innerHTML = document.querySelector(".textbox__name").value;
            document.querySelector(".window__name").style.display = "none";
            document.querySelector(".window__game").style.display = "block";
            let playerName = document.querySelector(".name").innerHTML;
            document.querySelector(".name").innerHTML = document.querySelector(".textbox__name").value = ""
            let playerHP = 50;
            let playerPower = 10;
            let playerDef = 5;
            startGame(count, playerName, playerHP, playerPower, playerDef);
        }
    })
});

function startGame(count, name, hp, power, def) {
    //The start of the game
    player = new Player(name, hp, power, def);
    enemy = setStats(count);
    console.log(player, enemy);
    playerName = player.username;
    playerMaxHP = player.hp;
    playerCurrentHP = playerMaxHP;
    enemyName = enemy.username;
    enemyMaxHP = enemy.hp
    enemyCurrentHP = enemyMaxHP;
    document.querySelector(".enemyInfo").innerHTML = `<div class="enemyName">${enemy.username}</div><div class="enemyHP">${enemy.hp}/${enemy.hp}</div>`
    document.querySelector(".playerInfo").innerHTML = `<div class="playerName">${player.username}</div><div class="playerHP">${player.hp}/${player.hp}</div>`
    gameLoop(player, enemy);
}

function gameLoop(player, enemy) {
    console.log(`Player: ${playerCurrentHP}/${playerMaxHP} Enemy: ${enemyCurrentHP}/${enemyMaxHP}`);
    console.log("We are in the gameLoop")
    document.querySelectorAll(".input").forEach(element => {
        element.addEventListener("click", function() {
            const button = element.className.toLowerCase();
            //Defines what happens when the Rock button is pressed
            if (button === "input rock" || button === "input paper" || button === "input scissors") {
                processChosenAttack(button);
            }
            //Defines what happens when the Pause button is pressed
            if (button === "input pause") {
                document.querySelector(".chooseAttack").style.dispaly = "none";
                document.querySelector(".window__pause").style.display = "block";
            }
        })
    });

}
//function to process the attack
function processChosenAttack(button) {
    console.log("we are in the processChosenAttack")
    let pAttack;
    switch (button) {
        case "input rock":
            pAttack = "rock";
            break;
        case "input paper":
            pAttack = "paper";
            break;
        case "input scissors":
            pAttack = "scissors";
            break;
    }
    let eAttack = document.querySelector(".enemyAttack").innerHTML;
    const foeAttack = Player.foeAttack(eAttack);
    eAttack = foeAttack;
    console.log(pAttack, eAttack);
    if (Player.beats(pAttack, eAttack)) {
        const damage = Player.dealDamageTo(player, enemy);
        document.querySelector(".results__text").innerHTML = `${playerName}'s Rock beats ${enemyName}'s Scissors!<br>${playerName} deals ${damage} to ${enemyName}`
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
        enemyCurrentHP -= damage;
        console.log("enemy damaged")
        if (enemyCurrentHP < 0) {
            enemyCurrentHP = 0;
        }
        document.querySelector(".enemyHP").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`
    }
    if (Player.beats(eAttack, pAttack)) {
        const damage = Player.dealDamageTo(enemy, player);
        document.querySelector(".results__text").innerHTML = `${enemyName}'s Paper beats ${playerName}'s Rock!<br>${enemyName} deals ${damage} to ${playerName}`
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
        playerCurrentHP -= damage;
        console.log("player damaged")
        if (playerCurrentHP < 0) {
            playerCurrentHP = 0;
        }
        document.querySelector(".playerHP").innerHTML = `${playerCurrentHP}/${playerMaxHP}`
    }
    if (eAttack === pAttack) {
        document.querySelector(".results__text").innerHTML = `${playerName} and ${enemyName} have chosen the same attack!<br>No damage is dealt!`
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
    }
    checkWinOrLose(player);
}
//Checks if the player has won or has lost
function checkWinOrLose(player) {
    console.log(`checkWinOrLose: ${player}`);
    const count = parseInt(document.querySelector(".count").innerHTML)
    let playerNewHP = player.hp;
    let playerNewPower = player.power;
    let playerNewDef = player.def;
    if (playerCurrentHP === 0 && enemyCurrentHP > 0) {
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
        document.querySelector(".results__text").innerHTML = `You have lost. Sorry!`
    } else if (enemyCurrentHP === 0 && playerCurrentHP > 0 && count === 16) {
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
        document.querySelector(".results__text").innerHTML = `Congratulations! You have conquered the pond and now stand at the top!`
    } else if (enemyCurrentHP === 0 && playerCurrentHP > 0 && count < 16) {
        document.querySelector(".chooseAttack").style.display = "none"
        document.querySelector(".results").style.display = "block"
        document.querySelector(".results__text").innerHTML = `
        <div class="power__up">Congratulations! Choose your reward. The stat chosen will increase by 5.
            <button class="increase hp">HP</button>
            <button class="increase power">POWER</button>
            <button class="increase def">DEFENSE</button>
        </div>
        `
        document.querySelectorAll(".increase").forEach(element => {
            element.addEventListener("click", function() {
                const button = element.className.toLowerCase();
                if (button === "increase hp") {
                    playerNewHP += 5;
                    document.querySelector(".power__up").style.display = "none";
                    player = new Player(player.username, playerNewHP, playerNewPower, playerNewDef)
                    startAgain(player);
                }
                if (button === "increase power") {
                    playerNewPower += 5;
                    document.querySelector(".power__up").style.display = "none";
                    player = new Player(player.username, playerNewHP, playerNewPower, playerNewDef)
                    startAgain(player);
                }
                if (button === "increase def") {
                    playerNewDef += 5;
                    document.querySelector(".power__up").style.display = "none";
                    player = new Player(player.username, playerNewHP, playerNewPower, playerNewDef)
                    startAgain(player)
                }
            })
        })
    } else
        document.querySelector(".ok").addEventListener("click", function() {
            //Defines what happens when the Ok button is pressed
            if (playerCurrentHP > 0) {
                document.querySelector(".chooseAttack").style.display = "block"
                document.querySelector(".results").style.display = "none"
            }
            if (playerCurrentHP === 0 || count === 16) {
                reset();
            }
        })
}
//Allows for the game to pause before changing to the next enemy
function startAgain(player) {
    count++;
    document.querySelector(".count").innerHTML = count;
    startGame(count, player.username, player.hp, player.power, player.def);
}
//Function to reset state of game to zero
function reset() {
    document.querySelector(".count").innerHTML = 1;
    document.querySelector(".enemyAttack").innerHTML = "";
    document.querySelector(".enemyInfo").innerHTML = "";
    document.querySelector(".playerInfo").innerHTML = "";
    document.querySelector(".window__game").style.display = "none";
    document.querySelector(".results").style.display = "none";
    document.querySelector(".window__home").style.display = "block";
    document.querySelector(".chooseAttack").style.display = "block";

}
//Function to set the stats of the enemy
function setStats(count) {
    console.log("setStats")
    let name = "";
    let ran = Math.floor(Math.random() * 3);
    if (count >= 0 && count <= 4) {
        switch (ran) {
            case 0:
                name = "Snail";
                break;
            case 1:
                name = "Tadpole";
                break;
            case 2:
                name = "Algae";
                break;
            default:
                return "Error occured"
        }
        const temp = new Player(name, 50, 15, 0);
        return temp;
    } else if (count >= 5 && count <= 9) {
        switch (ran) {
            case 0:
                name = "Dragonfly";
                break;
            case 1:
                name = "Worm";
                break;
            case 2:
                name = "Spider";
                break;
        }
        const temp = new Player(name, 70, 15, 5);
        return temp;
    } else if (count >= 10 && count <= 15) {
        switch (ran) {
            case 0:
                name = "Frog";
                break;
            case 1:
                name = "Fish";
                break;
            case 2:
                name = "Snake";
                break;
        }
        const temp = new Player(name, 80, 30, 10);
        return temp;
    } else
    //generates this once the player has defeated 15 enemies
        return -1;
}