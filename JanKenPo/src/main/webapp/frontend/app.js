//Pretending to import class from a backend script
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
    static setStats(count) {
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
}

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
    const homeWindow = document.querySelector(".window-home");
    const startWindow = document.querySelector(".window-start");
    const instructionsWindow = document.querySelector(".window-instructions");

    startBtn.addEventListener("click", () => {
        homeWindow.classList.replace("fadeIn", "fadeOut");
        startWindow.classList.replace("fadeOut", "fadeIn");
    })
    instructionsBtn.addEventListener("click", () => {
        console.log(instructionsBtn);
        homeWindow.classList.replace("fadeIn", "fadeOut");
        instructionsWindow.classList.replace("fadeOut", "fadeIn");
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
            case "paragraph-6":
                nextBtn.style.opacity = 1;
                nextBtn.style.pointerEvents = "all";
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
                nextBtn.style.opacity = 0;
                nextBtn.style.pointerEvents = "none";
                current.innerHTML = "paragraph-6"
                document.querySelector("#paragraph-5").classList.replace("fadeIn", "fadeOut");
                document.querySelector("#paragraph-6").classList.replace("fadeOut", "fadeIn");
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
        document.querySelector(".window-instructions").classList.replace("fadeIn", "fadeOut");
        document.querySelector(".window-home").classList.replace("fadeOut", "fadeIn");
    })
}

//Defines what the start screen can do
const windowStart = () => {
    console.log("windowStart");
    const inputName = document.querySelector("#name");
    const enterBtn = document.querySelector(".enter");
    enterBtn.addEventListener("click", () => {
        console.log(enterBtn)
        if (inputName.value === "") {
            alert("Please enter your name.")
        } else {
            playerName = inputName.value;
            document.querySelector(".window-start").classList.replace("fadeIn", "fadeOut");
            document.querySelector(".window-home").classList.replace("fadeOut", "fadeIn");
            document.querySelector(".window").classList.replace("fadeIn", "fadeOut");
            document.querySelector(".game").classList.replace("fadeOut", "fadeIn");
            setUpGame(50, 10, 5);
        }
    })
}

//Start the game
const setUpGame = (setHP, setPower, setDef) => {
    console.log(setHP, setPower, setDef);
    const pause = document.querySelector(".pause");
    player = new Player(playerName, setHP, setPower, setDef);
    playerMaxHP = player.hp;
    playerCurrentHP = playerMaxHP;
    enemy = Player.setStats(count);
    enemyName = enemy.username;
    enemyMaxHP = enemy.hp;
    enemyCurrentHP = enemyMaxHP;
    console.log(player, enemy);
    startOfGame();
}

//Start of the game
const startOfGame = () => {
    console.log("Hello")
    document.querySelector(".human-player h2").innerHTML = playerName;
    document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
    document.querySelector(".computer-player h2").innerHTML = enemyName;
    document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;
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
            //This should reset the board with the new stats
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
    okBtn.toggleAttribute("hidden", true);
    const attacks = document.querySelector(".choose-attack");
    const results = document.querySelector(".results");
    const resultsText = document.querySelector(".info h2");
    attacks.classList.replace("fadeIn", "fadeOut");
    results.classList.replace("fadeOut", "fadeIn");
    if (winner === -1) {
        const damage = Player.dealDamageTo(enemy, player);
        console.log(damage);
        playerCurrentHP -= damage;
        console.log(resultsText)
        resultsText.innerHTML = `${enemyName}\'s ${eAttack} beats ${playerName}\'s ${pAttack}<br>${enemyName} deals ${damage} damage to ${playerName}`;
        document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
        document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;
    }
    if (winner === 0) {
        resultsText.innerHTML = `Both ${playerName} and ${enemyName} chose ${pAttack}<br>No damage is dealt`;

    }
    if (winner === 1) {
        const damage = Player.dealDamageTo(player, enemy);
        console.log(damage);
        enemyCurrentHP -= damage;
        console.log(resultsText)
        resultsText.innerHTML = `${playerName}\'s ${pAttack} beats ${enemyName}\'s ${eAttack}<br>${playerName} deals ${damage} damage to ${enemyName}`;
        document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
        document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;
    }
    //Functiont to continue game if player and enemy are not dead
    if (playerCurrentHP > 0 && enemyCurrentHP > 0) {
        okBtn.addEventListener("click", () => {
            attacks.classList.replace("fadeOut", "fadeIn");
            results.classList.replace("fadeIn", "fadeOut");
            resultsText.innerHTML = "Choose your next attack!"
            return;
        })
    }

    //Function to reload game if player is dead
    if (playerCurrentHP === 0 && enemyCurrentHP > 0) {
        const endBtn = document.querySelector(".end");
        const okBtn = document.querySelector(".ok");
        resultsText.innerHTML = "You have lost";
        endBtn.toggleAttribute("hidden");
        okBtn.toggleAttribute("hidden");

        endBtn.addEventListener("click", () => {
            location.reload()
        })
    }

    //Function to reset the values if enemy is dead, level up the player and create a new enemy to fight
    if (playerCurrentHP > 0 && enemyCurrentHP === 0) {
        results.classList.replace("fadeIn", "fadeOut");
        okBtn.toggleAttribute("hidden");
        count++;
        resultsText.innerHTML = "Choose your Reward!<br>The stat you choose will increase by 5<br>(10 if you choose HP)"
        const levelUpScreen = document.querySelector(".level-up");
        attacks.classList.replace("fadeIn", "fadeOut");
        levelUpScreen.classList.replace("fadeOut", "fadeIn");
        console.log("count");

        document.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", () => {
                if (button.className === "hp") {
                    setUpGame((player.hp + 10), player.power, player.def);
                    console.log(player, enemy)
                    document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
                    document.querySelector(".computer-player h2").innerHTML = enemyName;
                    document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;

                }
                if (button.className === "power") {
                    setUpGame(player.hp, (player.power + 5), player.def);
                    console.log(player, enemy)
                    document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
                    document.querySelector(".computer-player h2").innerHTML = enemyName;
                    document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;

                }
                if (button.className === "defense") {
                    setUpGame(player.hp, player.power, (player.def + 5));
                    console.log(player, enemy)
                    document.querySelector(".human-player h3").innerHTML = `${playerCurrentHP}/${playerMaxHP}`;
                    document.querySelector(".computer-player h2").innerHTML = enemyName;
                    document.querySelector(".computer-player h3").innerHTML = `${enemyCurrentHP}/${enemyMaxHP}`;

                }
                console.log(button);
                levelUpScreen.classList.replace("fadeIn", "fadeOut");
                attacks.classList.replace("fadeOut", "fadeIn");
                okBtn.toggleAttribute("hidden");
                resultsText.innerHTML = "Choose your attack";
            })
        })
    }
}


//Call the functions
windowHome();
windowInstructions();
windowStart();
//Temp delete later
