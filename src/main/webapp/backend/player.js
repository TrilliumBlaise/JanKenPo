export default class Player {

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
            const temp = new Player(name, 10, 15, 0);
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
