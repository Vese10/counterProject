
let showAnimalChoice = document.getElementById('fall-down');
let animalChoiceButtons = document.getElementById('animal-choice');
let clickCounter = 0;

showAnimalChoice.onclick = function(){
  clickCounter++;
    if (clickCounter % 2 == 0) {
      animalChoiceButtons.style.display = 'none';
  } else {
      animalChoiceButtons.style.display = 'flex';
  }
}

let sheepAudio = document.getElementById('sheeps')
let audioSheep = document.getElementById('audioSheep');

sheepAudio.onclick = function(){
  audioSheep.play();
}

let catAudio = document.getElementById('cats')
let audioCat = document.getElementById('audioCat');

catAudio.onclick = function(){
  audioCat.play();
}

let alpacaAudio = document.getElementById('alpacas')
let audioAlpaca = document.getElementById('audioAlpaca');

alpacaAudio.onclick = function(){
  audioAlpaca.play();
}