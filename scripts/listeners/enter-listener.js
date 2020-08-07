'use strict';
console.log('--- loading listener: enter-listener');

  const triggers = document.querySelectorAll('.cool > li');

  for (const li of triggers) {
    li.addEventListener('mouseenter', enterHandler);
  } 
