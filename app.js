// import functions and grab DOM elements
const adjInput1 = document.getElementById('adjInput1');
const button = document.getElementById('submit');
const animalInput = document.getElementById('animal1');
const inputs = document.getElementById('adj1');
// initialize global state
button.addEventListener('click', () =>{
    inputs.textContent = adjInput1.value;
    inputs.textContent = animalInput.value;

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
