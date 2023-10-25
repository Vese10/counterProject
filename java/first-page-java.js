
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
