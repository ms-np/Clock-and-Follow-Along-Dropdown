'use strict';
console.log('--- loading handler: _');

/*const _ = (event) => {

};*/
function setDate() {
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.getHours();
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

let suffix = ' ';
if( hour < 12){
    suffix = 'am';
  }
else{
    suffix = 'pm';
  }
  digital.textContent= hour + ':' + mins + ':' +  seconds + suffix;
}
setInterval(setDate, 1000);

setDate();

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
