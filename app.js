// import functions and grab DOM elements
const adjInput1 = document.getElementById('adj-Input1');
const button = document.getElementById('submit');
const animalInput = document.getElementById('animal1');
const add1 = document.getElementById('adj1');
const add2 = document.getElementById('animal-input');


// initialize global state
button.addEventListener('click', () =>{
    add1.textContent = adjInput1.value;
    add2.textContent = animalInput.value;


});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
