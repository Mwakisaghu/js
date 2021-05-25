const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK' // MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK' // MODE_STRONG_ATTACK = 1;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'STRONG_PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the Monster.','100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];
let lastLoggedEntry;

if(isNaN(chosenMaxLife) || (chosenMaxLife <=0)) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
  };
  if(ev === LOG_EVENT_PLAYER_ATTACK); {
    logEntry.target = 'MONSTER';
  } if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target:'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if(ev === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target:'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if(ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: ev,
      value: val,
      target:'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    }; 
  } else if(ev === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound () {
  const initialPlayerHealth = currentPlayerHealth;
  const PlayerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -=PlayerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    PlayerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if(currentPlayerHealth <=0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = currentPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!')
    }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <=0) {
    alert('You have a draw!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'DRAW!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if(
    currentMonsterHealth <= 0 || currentPlayerHealth <=0  
  ) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if(mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if(mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function attackHandler () {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPLayerHandler() {
  let healValue;
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  for (let i = 0; i<3; i++) {
    console.log('--------')
  }
  /*for (let i = 0; i < battleLog.length; i++) {
    console.log(battleLog[i]);
  }*/

  let i = 0;
  for (const logEntry of battleLog) {
    if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < 1) {
      console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key} => ${logEntry[key]}`);
    }
    lastLoggedEntry = i;
    break;
    }
    i++;  
  }
}


  /*for (const logEntry of battleLog) {
    console.log(logEntry);
  }*/

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPLayerHandler);
logBtn.addEventListener('click', printLogHandler);