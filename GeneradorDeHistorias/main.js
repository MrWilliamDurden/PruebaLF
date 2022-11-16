const customName = document.getElementById('customname');
const customName2 = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'En una plaza pública había un señor, llamado Luis :insertx: y la gente le consultaba sobre lo que ocurriría en el futuro. Pero un día un vecino del adivino de nombre Santiago se le acercó :inserty:, El adivino, desesperado, salió corriendo, pero un hombre lo frenó y le preguntó: :insertz:.  El adivino no supo qué contestarle.';
const insertX = ['que decía ser adivino', 'que anunciaba saberlo todo', 'que predecía el futuro'];
const insertY = ['y le dijo que unos ladrones habían entrado en su casa y que le habían robado todo. ', 'y le dijo que se habia incendiado su casa', 'y le dijo que se habia inundado su casa'];
const insertZ = ['“Si eres adivino, ¿cómo no sabías lo que iba a suceder?”.', '“Si eres adivino, ¿por qué no viste el futuro para evitarlo?”.', '“Si eres adivino, ¿cómo no te enteraste que eso pasaría?”.'];
randomize.addEventListener('click', result);


function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName2.value !== '') {
    const name2 = customName2.value;
    newStory = newStory.replaceAll('Luis', name2);
  }
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Santiago', name);
  }

  

  story.textContent = newStory;
  story.style.visibility = 'visible';
}