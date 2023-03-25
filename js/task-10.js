function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes')

createBtn.addEventListener('click', onClick);

let step = 0;

function onClick(event) {
  step += 10;
  box.style.width = `${step}px`;
  box.style.height = `${step}px`;

  const color = getRandomHexColor();
  box.style.backgroundColor = color;

console.log(event.currentTarget);
};

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  event.currentTarget.reset()
}



