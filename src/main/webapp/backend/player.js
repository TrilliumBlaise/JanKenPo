import { enemies } from './enemies.js';

const MIN_DAMAGE = 5;
const ATTACKS = [
  { name: 'rock', beats: 'scissors' },
  { name: 'paper', beats: 'rock' },
  { name: 'scissors', beats: 'paper' },
];
export default class Player {
  //Constructor for the player and the AI
  constructor(username, hp, power, def) {
    this.username = username;
    this.hp = hp;
    this.power = power;
    this.def = def;
  }

  //Method for dealing damage
  static dealDamageTo(winner, loser) {
    const damage = winner.power - loser.def;
    if (damage <= MIN_DAMAGE) {
      return MIN_DAMAGE
    }
    return damage;
  }

  //Method for checking who beat who
  static beats(player1, player2) {
    const isWin = ATTACKS.some(attack => attack.name === player1 && attack.beats === player2);
    return isWin;
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

