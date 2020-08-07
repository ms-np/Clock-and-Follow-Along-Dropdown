'use strict';
console.log('--- loading handler: leaveHandler');

const background = document.querySelector('.dropdownBackground');

const leaveHandler = (event) => {
  //debugger;
  const target = event.target;
  const currentTarget = event.currentTarget;

  currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
};
