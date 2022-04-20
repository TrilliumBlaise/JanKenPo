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
        if ((x === rock) && (y === scissors)) return true
        if ((x === paper) && (y === rock)) return true 
        if ((x === scissors) && (y === paper)) return true 
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
    const ran = Math.floor(Math.random() * 3);
    if (count <= 4) return new Player(enemies[0].name[ran], enemies[0].stats[0], enemies[0].stats[1], enemies[0].stats[2]);
    if (count <= 9) return new Player(enemies[1].name[ran], enemies[1].stats[0], enemies[1].stats[1], enemies[1].stats[2]);
    if (count <= 15) return new Player(enemies[2].name[ran], enemies[2].stats[0], enemies[2].stats[1], enemies[2].stats[2]);
    return undefined;
  }
}
