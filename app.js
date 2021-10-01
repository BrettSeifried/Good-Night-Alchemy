// inputs
const adjInput1 = document.getElementById('adj1-Input');
const button = document.getElementById('submit');
const animalInput = document.getElementById('animal1');
const animalInput2 = document.getElementById('animal2-Input');
const noun1 = document.getElementById('noun1-Input');
const adjective2 = document.getElementById('adj2-Input');
const noun2 = document.getElementById('noun2-Input');
const verb1 = document.getElementById('verb1-Input');
const verb2 = document.getElementById('verb2-Input');
//spans
const add1 = document.getElementById('adj1');
const add2 = document.getElementById('animal-input');
const add3 = document.getElementById('animal2');
const add4 = document.getElementById('noun1');
const add5 = document.getElementById('adj2');
const add6 = document.getElementById('noun2');
const add7 = document.getElementById('animal3');
const add8 = document.getElementById('animal4');
const add9 = document.getElementById('verb1');
const add10 = document.getElementById('verb2');

// initialize global state
button.addEventListener('click', () =>{
    add1.textContent = adjInput1.value;
    add2.textContent = animalInput.value;
    add3.textContent = animalInput2.value;
    add4.textContent = noun1.value;
    add5.textContent = adjective2.value;
    add6.textContent = noun2.value;
    add7.textContent = animalInput2.value;
    add8.textContent = animalInput.value;
    add9.textContent = verb1.value;
    add10.textContent = verb2.value;
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
