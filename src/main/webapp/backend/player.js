import { enemies } from './enemies.js';

export default class Player {
  //Constructor for the player and the AI
  constructor(username, hp, power, def) {
    this.username = username;
    this.hp = hp;
    this.power = power;
    this.def = def;
  }

  //Method for dealing damage
  static dealDamageTo(x, y) {
    let damage = x.power - y.def;
    if (damage <= 0) {
      damage = 5;
    }
    return damage;
  }

  //Method for checking who beat who
  static beats(x, y) {
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    if (x === rock && y === scissors) return true;
    if (x === paper && y === rock) return true;
    if (x === scissors && y === paper) return true;
    return false;
  }

  static foeAttack(enemyAttack) {
    let options;
    if (enemyAttack === '') {
      options = ['rock', 'paper', 'scissors'];
    }
    //if rock used previous uses this
    if (enemyAttack === 'rock') {
      options = ['rock', 'paper', 'paper', 'scissors', 'scissors'];
    }
    //if paper used previous uses this
    if (enemyAttack === 'paper') {
      options = ['rock', 'rock', 'paper', 'scissors', 'scissors'];
    }
    //if scissors used previous uses this
    if (enemyAttack === 'scissors') {
      options = ['rock', 'rock', 'paper', 'paper', 'scissors'];
    }
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }
  
  static setStats(count) {
    const ran = Math.floor(Math.random() * enemies.length);
    const enemy = enemies.find(enemy => {
      if (count >= enemy.count.min && count <= enemy.count.max) return enemy;
    });
    return new Player(enemy?.name[ran], enemy?.stats[0], enemy?.stats[1], enemy?.stats[2]) || undefined;
  }
}

