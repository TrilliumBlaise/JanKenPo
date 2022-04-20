import Player from '../backend/player.js';
import { instructions } from './instructions.js';

//Global variables
const screenCheck = document.querySelector('.breadcrumb');
const instructionsParagraph = document.querySelector('.p');
const PLAYER_STATS = [10, 0, 5];
let previousScreen;
let player = new Player(null, 0, 0, 0);
let playerName;
let playerMaxHP;
let playerCurrentHP;
let enemy = new Player(null, 0, 0, 0);
let enemyName;
let enemyMaxHP;
let enemyCurrentHP;
let count = 0;

//Adds after load Events to the window
addEventListener('DOMContentLoaded', e => {
  instructionsParagraph.innerHTML = instructions[0];
});

//Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 's' && screenCheck.innerText === 'Home Screen') {
    showStartScreen();
  }
  if (e.key === 'i' && (screenCheck.innerText === 'Home Screen' || screenCheck.innerText === 'Game Screen')) {
    showInstructionsScreen();
  }
  if (e.key === 'p' && screenCheck.innerText === 'Instructions Screen') {
    showPreviousInstructionsPage();
  }
  if (e.key === 'c' && screenCheck.innerText === 'Instructions Screen') {
    closeInstructionsScreen();
  }
  if (e.key === 'n' && screenCheck.innerText === 'Instructions Screen') {
    showNextInstructionsPage();
  }
  if (e.key === 'Enter' && screenCheck.innerText === 'Start Screen') {
    startNewGame();
  }
  if (e.key === 'f' && screenCheck.innerText === 'New Enemy Appears Screen') {
    showGameScreen();
  }
  if (e.key === 'r' && screenCheck.innerText === 'Game Screen') {
    const img = document.querySelector('#rock');
    attackChoice(img);
  }
  if (e.key === 'p' && screenCheck.innerText === 'Game Screen') {
    const img = document.querySelector('#paper');
    attackChoice(img);
  }
  if (e.key === 's' && screenCheck.innerText === 'Game Screen') {
    const img = document.querySelector('#scissors');
    attackChoice(img);
  }
  if ((e.key === 'o' || e.key === 'Enter') && screenCheck.innerText === 'Results Window') {
    removeResultsWindow();
  }
  if ((e.key === 'e' || e.key === 'r') && screenCheck.innerText === 'Results Window') {
    window.location.reload();
  }
  if (e.key === 'h' && screenCheck.innerText === 'Level Up Screen') {
    newGame('hp');
  }
  if (e.key === 'p' && screenCheck.innerText === 'Level Up Screen') {
    newGame('power');
  }
  if (e.key === 'd' && screenCheck.innerText === 'Level Up Screen') {
    newGame('defense');
  }
});

//Adds Click Events to the buttons on the Home Screen
const startBtn = document.querySelector('.start');
const instructionsBtn = document.querySelector('.instructions');
const homeWindow = document.querySelector('.window-home');
const startWindow = document.querySelector('.window-start');
const instructionsWindow = document.querySelector('.window-instructions');
const inputName = document.querySelector('#name');

startBtn.addEventListener('click', showStartScreen);
instructionsBtn.addEventListener('click', showInstructionsScreen);

function showStartScreen() {
  homeWindow.classList.replace('fadeIn', 'fadeOut');
  startWindow.classList.replace('fadeOut', 'fadeIn');
  inputName.focus();
  screenCheck.innerText = 'Start Screen';
}

function showInstructionsScreen() {
  previousScreen = screenCheck.innerText;
  instructionsWindow.style.zIndex = 1;
  screenCheck.innerText = 'Instructions Screen';
}

//Adds click events to the Instructions Screen
const previousBtn = document.querySelector('.previous');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');

previousBtn.addEventListener('click', showPreviousInstructionsPage);
nextBtn.addEventListener('click', showNextInstructionsPage);
closeBtn.addEventListener('click', closeInstructionsScreen);

function showPreviousInstructionsPage() {
  const index = instructionsParagraph.dataset.index;
  if (index == 0) return;
  if (index == 6) {
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = 'all';
  }
  if (index == 1) {
    previousBtn.style.opacity = 0;
    previousBtn.style.pointerEvents = 'none';
  }
  instructionsParagraph.innerHTML = instructions[parseInt(index) - 1];
  instructionsParagraph.dataset.index = parseInt(index) - 1;
}

function showNextInstructionsPage() {
  const index = instructionsParagraph.dataset.index;
  if (index == 6) return;
  if (index == 5) {
    nextBtn.style.opacity = 0;
    nextBtn.style.pointerEvents = 'none';
  }
  if (index == 0) {
    previousBtn.style.opacity = 1;
    previousBtn.style.pointerEvents = 'all';
  }
  instructionsParagraph.innerHTML = instructions[parseInt(index) + 1];
  instructionsParagraph.dataset.index = parseInt(index) + 1;
}

function closeInstructionsScreen() {
  instructionsParagraph.dataset.index = 0;
  previousBtn.style.opacity = 0;
  nextBtn.style.opacity = 1;
  previousBtn.style.pointerEvents = 'none';
  nextBtn.style.pointerEvents = 'all';
  document.querySelector('.window-instructions').style.zIndex = -1;
  screenCheck.innerText = previousScreen;
}

//Adds click Events to the buttons on the Start screen
const enterBtn = document.querySelector('.enter');

enterBtn.addEventListener('click', startNewGame);

function startNewGame() {
  if (!validateName()) return;
  playerName = inputName.value;
  document.querySelector('.window-start').classList.replace('fadeIn', 'fadeOut');
  document.querySelector('.window-home').classList.replace('fadeOut', 'fadeIn');
  document.querySelector('.window').classList.replace('fadeIn', 'fadeOut');
  document.querySelector('.game').classList.replace('fadeOut', 'fadeIn');
  screenCheck.innerText = 'Game Screen';
  setUpGame(PLAYER_STATS[0], PLAYER_STATS[1], PLAYER_STATS[2]);
}

function validateName() {
  const regex = /[a-zA-Z]/;
  if (inputName.value === '') {
    alert('Please enter your name.');
    return false;
  }
  if (!regex.test(inputName.value)) {
    alert('A name must have at least one character.');
    return false;
  }
  if (inputName.value.length > 14) {
    alert(`Your name can't be greater than 14 characters`)
    return false;
  }      
  return true;
}

function setUpGame(setHP, setPower, setDef) {
  player = new Player(playerName, setHP, setPower, setDef);
  playerMaxHP = player.hp;
  playerCurrentHP = playerMaxHP;
  enemy = Player.setStats(count);
  document.querySelector('.enemies-beaten').innerHTML = `Enemies Beaten: ${count}<br>Enemies Remaining: ${15 - count}`;
  enemyName = enemy.username;
  enemyMaxHP = enemy.hp;
  enemyCurrentHP = enemyMaxHP;
  showNewEnemeyScreen();
  return;
}

function showNewEnemeyScreen() {
  const newEnemy = document.querySelector('.new-enemy-info h2');
  newEnemy.innerHTML = `A wild ${enemyName} has appeared. Get ready to battle!`;
  screenCheck.innerText = 'New Enemy Appears Screen';
}

//Adds click Events to the New Enemy Appears Screen
const fightBtn = document.querySelector('.fight');
const newEnemyInfo = document.querySelector('.new-enemy-info');
const gameStart = document.querySelector('.game-start');

fightBtn.addEventListener('click', showGameScreen);

function showGameScreen() {
  newEnemyInfo.classList.replace('fadeIn', 'fadeOut');
  gameStart.classList.replace('fadeOut', 'fadeIn');
  screenCheck.innerText = 'Game Screen';
  startOfGame();
}

function startOfGame() {
  document.querySelector('.human-player h2').innerHTML = playerName;
  document.querySelector('.human-player h3').innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
  document.querySelector('.computer-player h2').innerHTML = enemyName;
  document.querySelector('.computer-player h3').innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
}

//Adds click Events to the Game Screen
const exitBtn = document.querySelector('.exit');
const instructionsBtn2 = document.querySelector('.instructions2');

exitBtn.addEventListener('click', () => {
  window.location.reload();
});
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    attackChoice(img);
  });
});
instructionsBtn2.addEventListener('click', showInstructionsScreen);

function attackChoice(img) {
  const previousAttack = document.querySelector('.previous-attack');
  const playerAttack = img.id;
  const enemyAttack = Player.foeAttack(previousAttack.innerHTML);
  previousAttack.innerHTML = enemyAttack;
  const winner = checkWinner(playerAttack, enemyAttack);
  displayResultsWindow(winner, playerAttack, enemyAttack);
}
function checkWinner(pAttack, eAttack) {
  if (pAttack === eAttack) {
    return 0;
  }
  if (Player.beats(pAttack, eAttack)) {
    return 1;
  }
  if (Player.beats(eAttack, pAttack)) {
    return -1;
  }
}

function displayResultsWindow(winner, pAttack, eAttack) {
  const attacks = document.querySelector('.choose-attack');
  const results = document.querySelector('.results');
  const resultsText = document.querySelector('.info h2');

  if (winner === -1) {
    const damage = Player.dealDamageTo(enemy, player);
    playerCurrentHP -= damage;
    if (playerCurrentHP < 0) {
      playerCurrentHP = 0;
    }
    resultsText.innerHTML = `${enemyName}\'s ${eAttack} beats ${playerName}\'s ${pAttack}!<br>${enemyName} deals <span style = "color: red"> ${damage}</span> damage to ${playerName}`;
    changeHPStatus();
  }
  if (winner === 0) {
    resultsText.innerHTML = `Both ${playerName} and ${enemyName} chose ${pAttack}<br>No damage is dealt`;
  }
  if (winner === 1) {
    const damage = Player.dealDamageTo(player, enemy);
    enemyCurrentHP -= damage;
    if (enemyCurrentHP < 0) {
      enemyCurrentHP = 0;
    }
    resultsText.innerHTML = `${playerName}\'s ${pAttack} beats ${enemyName}\'s ${eAttack}!<br>${playerName} deals <span style = "color: green"> ${damage}</span> damage to ${enemyName}`;
    changeHPStatus();
  }
  //Function to continue game if player and enemy are not dead
  attacks.classList.replace('fadeIn', 'fadeOut');
  results.classList.replace('fadeOut', 'fadeIn');
  screenCheck.innerText = 'Results Window';
}

function changeHPStatus() {
  if (playerCurrentHP < playerMaxHP / 4) {
    document.querySelector(
      '.human-player h3'
    ).innerHTML = `<span style = "color: red">HP: ${playerCurrentHP}/${playerMaxHP} </span><br>Power: ${player.power}<br>Defense: ${player.def}`;
  } else if (playerCurrentHP < playerMaxHP / 2) {
    document.querySelector(
      '.human-player h3'
    ).innerHTML = `<span style = "color: yellow">HP: ${playerCurrentHP}/${playerMaxHP} </span><br>Power: ${player.power}<br>Defense: ${player.def}`;
  } else {
    document.querySelector(
      '.human-player h3'
    ).innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
  }

  if (enemyCurrentHP < enemyMaxHP / 4) {
    document.querySelector(
      '.computer-player h3'
    ).innerHTML = `<span style = "color: red">HP: ${enemyCurrentHP}/${enemyMaxHP} </span><br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
  } else if (enemyCurrentHP < enemyMaxHP / 2) {
    document.querySelector(
      '.computer-player h3'
    ).innerHTML = `<span style = "color: yellow">P: ${enemyCurrentHP}/${enemyMaxHP}</span><br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
  } else {
    document.querySelector('.computer-player h3').innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
  }
}

//Adds click Events to the Results Window
const okBtn = document.querySelector('.ok');
const attacks = document.querySelector('.choose-attack');
const results = document.querySelector('.results');
const resultsText = document.querySelector('.info h2');

okBtn.addEventListener('click', removeResultsWindow);

function removeResultsWindow() {
  if (verifyWinLoss()) {
    return;
  }
  attacks.classList.replace('fadeOut', 'fadeIn');
  results.classList.replace('fadeIn', 'fadeOut');
  resultsText.innerHTML = 'Choose your next attack!';
  screenCheck.innerText = 'Game Screen';
  return;
}

function verifyWinLoss() {
  //Function to reload game if player is dead
  if (playerCurrentHP === 0 && enemyCurrentHP > 0) {
    const endBtn = document.querySelector('.end');
    resultsText.innerHTML = 'You have lost';
    okBtn.style.opacity = 0;
    okBtn.style.pointerEvents = 'none';
    endBtn.style.opacity = 1;
    endBtn.style.pointerEvents = 'all';

    endBtn.addEventListener('click', () => {
      location.reload();
    });
    return true;
  }

  //Function to reset the values if enemy is dead, level up the player and create a new enemy to fight
  if (playerCurrentHP > 0 && enemyCurrentHP === 0 && count < 15) {
    results.classList.replace('fadeIn', 'fadeOut');
    count++;
    resultsText.innerHTML = 'You win!<br>Choose your Reward!';
    const levelUpScreen = document.querySelector('.level-up');
    // attacks.classList.replace("fadeIn", "fadeOut");
    levelUpScreen.classList.replace('fadeOut', 'fadeIn');
    screenCheck.innerText = 'Level Up Screen';
    return true;
  }
  if (playerCurrentHP > 0 && enemyCurrentHP === 0) {
    endTheGame();
    return true;
  }
  return false;
}

function endTheGame() {
  const endBtn = document.querySelector('.end');
  endBtn.innerHTML = '<u>R</u>eturn to Start';
  endBtn.style.height = 'auto';
  resultsText.innerHTML = 'Congratulations you have conquered the pond. You stand victorious.';
  okBtn.style.opacity = 0;
  okBtn.style.pointerEvents = 'none';
  endBtn.style.opacity = 1;
  endBtn.style.pointerEvents = 'all';

  endBtn.addEventListener('click', () => {
    location.reload();
  });
}
//Adds click Events to the Level Up Screen
const levelUpScreen = document.querySelector('.level-up');
const hpBtn = document.querySelector('.hp');
const powerBtn = document.querySelector('.power');
const defenseBtn = document.querySelector('.defense');

hpBtn.addEventListener('click', () => {
  newGame('hp');
});
powerBtn.addEventListener('click', () => {
  newGame('power');
});
defenseBtn.addEventListener('click', () => {
  newGame('defense');
});

function newGame(reward) {
  levelUpScreen.classList.replace('fadeIn', 'fadeOut');
  attacks.classList.replace('fadeOut', 'fadeIn');
  gameStart.classList.replace('fadeIn', 'fadeOut');
  newEnemyInfo.classList.replace('fadeOut', 'fadeIn');
  screenCheck.innerText = 'New Enemy Appears Screen';
  resultsText.innerHTML = 'Choose your attack';
  if (reward === 'hp') {
    setUpGame(player.hp + 10, player.power, player.def);
    document.querySelector('.computer-player h2').innerHTML = enemyName;
    changeHPStatus();
    return;
  }
  if (reward === 'power') {
    setUpGame(player.hp, player.power + 5, player.def);
    document.querySelector(
      '.human-player h3'
    ).innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
    document.querySelector('.computer-player h2').innerHTML = enemyName;
    document.querySelector('.computer-player h3').innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
    return;
  }
  if (reward === 'defense') {
    setUpGame(player.hp, player.power, player.def + 5);
    console.log(player, enemy);
    document.querySelector(
      '.human-player h3'
    ).innerHTML = `HP: ${playerCurrentHP}/${playerMaxHP}<br>Power: ${player.power}<br>Defense: ${player.def}`;
    document.querySelector('.computer-player h2').innerHTML = enemyName;
    document.querySelector('.computer-player h3').innerHTML = `HP: ${enemyCurrentHP}/${enemyMaxHP}<br>Power: ${enemy.power}<br>Defense: ${enemy.def}`;
    return;
  }
}

addEventListener('beforeunload', e => {
  e.preventDefault();
  e.returnValue = `Refreshing your browser will cause you to lose all progress. Proceed?`;
});
