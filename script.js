const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button'); // Buttons should be only used in this function

let userChoice;
let computerChoice;
let randomNumber;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	resultDisplay.innerHTML = result
	computerChoiceDisplay.innerHTML = computerChoice
	generateComputerChoice()
	getResult()
	console.log(result)
}))

function generateComputerChoice() {
	randomNumber=Math.floor(Math.random()*possibleChoice.length)+1;

	if (randomNumber === 1) {
		computerChoice = "rock"
	};
	if (randomNumber === 2) {
		computerChoice = "paper"
	};
	if (randomNumber === 3) {
		computerChoice = "scissoir"
	};
}

function getResult(){
	if (computerChoice === userChoice) {
		result = "It is a tie"
	};

	if (computerChoice === "rock" && userChoice  === "paper") {
		result = "You win!!!"
	};
	if (computerChoice === "paper" && userChoice  === "scissoir") {
		result = "You win!!!"
	};
	if (computerChoice === "scissoir" && userChoice  === "rock") {
		result = "You win!!!"
	};
	if (computerChoice === "paper" && userChoice  === "rock") {
		result = "You lost!!!"
	};
	if (computerChoice === "scissoir" && userChoice  === "paper") {
		result = "You lost!!!"
	};
	if (computerChoice === "rock" && userChoice  === "scissoir") {
		result = "You lost!!!"
	};
}
