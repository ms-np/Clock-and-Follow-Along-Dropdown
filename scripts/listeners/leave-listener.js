'use strict';
console.log('--- loading listener: _');

const triggers = document.querySelectorAll('.cool > li');

for (let li of triggers) {
  li.addEventListener('mouseleave', leaveHandler);
}
