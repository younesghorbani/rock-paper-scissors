function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function capitalize(word) {
    return word.slice(0, 1).toUpperCase().concat(word.slice(1).toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    if (capitalize(playerSelection).localeCompare(computerSelection) === 0) {
        return `Both of you chose ${computerSelection}. It is a tie!`;
    } else if (capitalize(playerSelection) === 'Rock' && computerSelection === 'Scissors') {
        return `You won this round! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (capitalize(playerSelection) === 'Scissors' && computerSelection === 'Paper') {
        return `You won this round! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (capitalize(playerSelection) === 'Paper' && computerSelection === 'Rock') {
        return `You won this round! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else {
        return `You lost this round! ${computerSelection} beats ${capitalize(playerSelection)}.`;
    }
}

function game() {
    let playerScore = computerScore = 0;
    let result;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt('Choose one. "Rock", "Paper" or "Scissors" (Case Insensitive)', 'Rock');
        const computerSelection = getComputerChoice();
        
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('won')) {
            playerScore++;
        } else if (result.includes('lost')) {
            computerScore++;
        } else {
            continue;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('Hooray! You are the winner :)');
    }
    
    if (playerScore < computerScore) {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('Sorry! You lost :(');
    }
    
    if (playerScore === computerScore) {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('We do not have a winner! Maybe next time ;)');
    }
}

game();