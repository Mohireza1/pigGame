'use strict';

const p1Overlay = document.querySelector('.p1-overlay');
const p2Overlay = document.querySelector('.p2-overlay');
const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const p1Current = document.querySelector('.p1-current');
const p2Current = document.querySelector('.p2-current');
const newGame = document.querySelector('.new');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const popUp = document.querySelector('.pop-up');
const message = document.querySelector('.message-text');
const close = document.querySelector('.close');
const overlay = document.querySelector('.pop-overlay');
const dice = document.querySelector('.dice');
const dices = [
  'dices/dice-1.png',
  'dices/dice-2.png',
  'dices/dice-3.png',
  'dices/dice-4.png',
  'dices/dice-5.png',
  'dices/dice-6.png',
];
let p1ScoreNumber = 0;
let p2ScoreNumber = 0;
let current = 0;
let random;

const diceSelector = () => {
  const number = Math.floor(Math.random() * 6);
  random = number;
  dice.src = dices[number];
  console.log(number);
  if (dice.style.visibility !== 'visible') dice.style.visibility = 'visible';
};
const currentActive = () => {
  if (!p1Overlay.classList.contains('hidden'))
    p2Current.textContent = String(current);
  else if (!p2Overlay.classList.contains('hidden'))
    p1Current.textContent = String(current);
};
const holder = () => {
  if (!p1Overlay.classList.contains('hidden')) {
    p1Overlay.classList.add('hidden');
    p2Overlay.classList.remove('hidden');
    p2ScoreNumber += current;
    p2Score.textContent = String(p2ScoreNumber);
    if (p1ScoreNumber >= 100) {
      message.textContent = 'PLAYER 1 IS THE WINNER!';
      opener();
    } else if (p2ScoreNumber >= 100) {
      message.textContent = 'PLAYER 2 IS THE WINNER!';
      opener();
    }
    current = 0;
    p2Current.textContent = String(current);
    dice.style.visibility = 'hidden';
  } else if (!p2Overlay.classList.contains('hidden')) {
    p2Overlay.classList.add('hidden');
    p1Overlay.classList.remove('hidden');
    p1ScoreNumber += current;
    p1Score.textContent = String(p1ScoreNumber);
    if (p1ScoreNumber >= 100) {
      message.textContent = 'PLAYER 1 IS THE WINNER!';
      opener();
    } else if (p2ScoreNumber >= 100) {
      message.textContent = 'PLAYER 2 IS THE WINNER!';
      opener();
    }
    current = 0;
    p1Current.textContent = String(current);
    dice.style.visibility = 'hidden';
  }
};
const roller = () => {
  diceSelector();
  if (random !== 0) {
    current += random + 1;
    currentActive();
  } else {
    current = 0;
    currentActive();
    holder();
  }
};
const opener = () => popUp.classList.remove('hidden');
const closer = () => popUp.classList.add('hidden');
const newGamer = () => {
  p1ScoreNumber = 0;
  p2ScoreNumber = 0;
  current = 0;
  p2Overlay.classList.remove('hidden');
  p1Overlay.classList.add('hidden');
  p1Score.textContent = String(p1ScoreNumber);
  p1Current.textContent = String(current);
  p2Score.textContent = String(p2ScoreNumber);
  p2Current.textContent = String(current);
  dice.style.visibility = 'hidden';
};

roll.addEventListener('click', roller);
hold.addEventListener('click', holder);
close.addEventListener('click', closer);
overlay.addEventListener('click', closer);
newGame.addEventListener('click', newGamer);
