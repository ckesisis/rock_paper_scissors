function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

function playRound( computerChoice, playerChoice ){

    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    let result = '';

    switch( computerChoice ){
        case 'rock':
            if( playerChoice === 'rock' ){
                result = 'Tie!';
            }else if( playerChoice === 'paper' ){
                result = 'Player Won!';
            }else if( playerChoice === 'scissors' ){
                result = 'Computer Won!';
            }
            break;
        case 'paper':
            if( playerChoice === 'rock' ){
                result = 'Computer Won!';
            }else if( playerChoice === 'paper' ){
                result = 'Tie!';
            }else if( playerChoice === 'scissors' ){
                result = 'Player Won!';
            }

            break;
        case 'scissors':
            if( playerChoice === 'rock' ){
                result = 'Player Won!';
            }else if( playerChoice === 'paper' ){
                result = 'Computer Won!';
            }else if( playerChoice === 'scissors' ){
                result = 'Tie!';
            }
            break;
        default :
            result = 'No game played.';
            break;
    }
    return result;
}

const playerChoice = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerChoice, computerSelection));