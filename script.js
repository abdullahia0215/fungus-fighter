// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let userAP = 100;
let fungusProgress = document.getElementById("hp-meter");
let abilityProgress = document.getElementById("ap-meter");
let fungusAnimation = document.querySelector(".freaky-fungus");
let attackButtons = document.getElementsByClassName("attack-btn");

function disableAttacks() {
  for (let i = 0; i < attackButtons.length; i++) {
    attackButtons[i].disabled = true;
  }
}

function arcaneScepter() {
  fungusHP -= 14;
  userAP -= 12;
  fungusProgress.value -= 14;
  abilityProgress.value -= 12;
  console.log(fungusAnimation);
  renderGame();
  console.log(fungusHP);
}

function entangle() {
  fungusHP -= 9;
  userAP -= 23;
  fungusProgress.value -= 9;
  abilityProgress.value -= 23;
  renderGame();
}

function dragonBlade() {
  fungusHP -= 47;
  userAP -= 28;
  fungusProgress.value -= 47;
  abilityProgress.value -= 28;
  renderGame();
}

function starFire() {
  fungusHP -= 25;
  userAP -= 33;
  fungusProgress.value -= 25;
  abilityProgress.value -= 33;
  renderGame();
}

function onReady() {
  console.log("Ready to go!");
}

function shroomRegenerate() {
  if (fungusHP > 0 && fungusHP < 50) {
    fungusHP++;
    fungusProgress.value++;
    renderGame();
  } else if (fungusHP >= 50) {
    clearInterval();
    renderGame();
  }
}

function startShroomRegen() {
  shroomRegenerate = setInterval(shroomRegenerate, 1000);
}
function gameResult() {
  if (fungusHP <= 0) {
    fungusHP = 0;
    disableAttacks();
    fungusAnimation.classList.remove("walk");
    fungusAnimation.classList.add("dead");
  } else if (userAP <= 0) {
    userAP = 0;
    disableAttacks();
    fungusAnimation.classList.remove("walk");
    fungusAnimation.classList.add("jump");
  }
}

function renderGame() {
  gameResult();
  startShroomRegen();
  const shroomHP = document.querySelector(".hp-text");
  const playerAP = document.querySelector(".ap-text");
  shroomHP.textContent = `${fungusHP} HP`;
  playerAP.textContent = `${userAP} AP`;
}

onReady();
