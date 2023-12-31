function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];

	return choices[Math.floor(Math.random() * 3)];
}

function playRound(computerChoice, playerChoice) {
	switch (computerChoice) {
		case 'rock':
			if (playerChoice === 'rock') {
				result = 'Tie!';
			} else if (playerChoice === 'paper') {
				result = 'Player Won!';
			} else if (playerChoice === 'scissors') {
				result = 'Computer Won!';
			}
			break;
		case 'paper':
			if (playerChoice === 'rock') {
				result = 'Computer Won!';
			} else if (playerChoice === 'paper') {
				result = 'Tie!';
			} else if (playerChoice === 'scissors') {
				result = 'Player Won!';
			}

			break;
		case 'scissors':
			if (playerChoice === 'rock') {
				result = 'Player Won!';
			} else if (playerChoice === 'paper') {
				result = 'Computer Won!';
			} else if (playerChoice === 'scissors') {
				result = 'Tie!';
			}
			break;
		default:
			result = 'No game played.';
			break;
	}
	return result;
}

let playerPoints = 0;
let computerPoints = 0;
let gameButtonsDiv = document.querySelector('#game_buttons');

gameButtonsDiv.addEventListener('click', (event) => {
	const playerClickedSelection = event.target.id;

	let result = '';

	let computerChoice = getComputerChoice();
	console.log(playerClickedSelection);

	if (playerClickedSelection === 'choose_rock') {
		result = playRound(computerChoice, 'rock');
	} else if (playerClickedSelection === 'choose_paper') {
		result = playRound(computerChoice, 'paper');
	} else if (playerClickedSelection === 'choose_scissors') {
		result = playRound(computerChoice, 'scissors');
	}
	increasePoints(result);
});

function increasePoints(result) {
	if (result === 'Tie!') {
		playerPoints++;
		computerPoints++;
	} else {
		result === 'Player Won!' ? playerPoints++ : computerPoints++;
	}
	// console.log(`Player Points : ${playerPoints} \nComputer Points : ${computerPoints}`);
	updateScoreUI();
}

function updateScoreUI() {
	document.querySelector('#playerScore').textContent = playerPoints;
	document.querySelector('#computerScore').textContent = computerPoints;

	if (playerPoints == 5 || computerPoints == 5) {
		const winner = playerPoints > computerPoints ? 'player' : 'computer'
		alert(`${winner} won!`)
	}
}
