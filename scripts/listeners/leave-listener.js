'use strict';
console.log('--- loading listener: leave-listener');

const triggerAllLi = document.querySelectorAll('.cool > li');

for (const li of triggerAllLi) {
  li.addEventListener('mouseleave', leaveHandler);
}
