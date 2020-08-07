'use strict';
console.log('--- loading handler: leaveHandler');

const dropdownBackground = document.querySelector('.dropdownBackground');

const leaveHandler = (event) => {
  debugger;
  const target = event.target;
  const currentTarget = event.currentTarget;

  currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBackground.classList.remove('open');
};
