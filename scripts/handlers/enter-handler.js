'use strict';
console.log('--- loading handler: enter-handler');

const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const enterHandler = (event) => {
  const liEl = event.target;
  liEl.classList.add('trigger-enter');
  // to make sure that text will never appear before background we use '&&' logical operator
  setTimeout(() => liEl.classList.contains('trigger-enter') && liEl.classList.add('trigger-enter-active'), 150);

  background.classList.add('open');

  const dropdown = liEl.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
 // an object that contain the four dimensions width, height, top and left
 // we use offset by subtracting nav dimensions to have always the right position
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
   };
   
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
};
