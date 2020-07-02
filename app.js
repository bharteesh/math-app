
let correct = 0;
let wrong = 0;
let total = 0;
startAndNext();
function startAndNext() {
	//generate random numbers
	let firstNumber = parseInt(Math.random()*100);
	let secondNumber = parseInt(Math.random()*100/2);

	//get the total
	total = firstNumber + secondNumber;

	//display numbers on the canvas
	let primary = document.getElementById('primary-number');
	    primary.innerHTML = `<p>${firstNumber}</p>`;

	let secondary = document.getElementById('secondary-number');
	    secondary.innerHTML = `<p>${secondNumber}</p>`

}
	//get guess from user
	let button = document.getElementById('btn')

	button.addEventListener('click', function(){

		let guess = document.getElementById('guess').value;
	    guess = Number(guess);
		//check answer
		if (guess === total){
		    correct++;
		    document.getElementById('resultLbl').innerHTML = `<p>Correct: ${correct}, Wrong: ${wrong}</p>`;
		    startAndNext();
		} else {
		    wrong++;
		    document.getElementById('resultLbl').innerHTML = `<p>Correct: ${correct}, Wrong: ${wrong}</p>`;
		    startAndNext();
		}
    });

