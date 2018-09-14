const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e){
  console.log(this.classList.value);  
  // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  // capture: true // fires on event capture not bubble // default is false
  capture: false, // fires on event capture not bubble // default is false
  once: true // removes eventlistener after it fires once
}));

button.addEventListener('click', () => {
  console.log('click!!!');  
}, {
  once: true
});