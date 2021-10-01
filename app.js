// inputs
const adjInput1 = document.getElementById('adj1-Input');
const button = document.getElementById('submit');
const animalInput = document.getElementById('animal1');
const animalInput2 = document.getElementById('animal2-Input');
const noun1 = document.getElementById('noun1-Input');
const adjective2 = document.getElementById('adj2-Input');
const noun2 = document.getElementById('noun2-Input');
//spans
const add1 = document.getElementById('adj1');
const add2 = document.getElementById('animal-input');
const add3 = document.getElementById('animal2');
const add4 = document.getElementById('noun1');
const add5 = document.getElementById('adj2');
const add6 = document.getElementById('noun2');
const add7 = document.getElementById('animal3');
const add8 = document.getElementById('animal4');

// initialize global state
button.addEventListener('click', () =>{
    add1.textContent = adjInput1.value;
    add2.textContent = animalInput.value;


});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
