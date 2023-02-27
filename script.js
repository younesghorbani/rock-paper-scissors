function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function capitalize(word) {
    return word.slice(0, 1).toUpperCase().concat(word.slice(1).toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    if (capitalize(playerSelection).localeCompare(computerSelection) === 0) {
        return `It's a tie! Both of you chose ${computerSelection}.`;
    } else if (capitalize(playerSelection) === 'Rock' && computerSelection === 'Scissors') {
        return `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (capitalize(playerSelection) === 'Scissors' && computerSelection === 'Paper') {
        return `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (capitalize(playerSelection) === 'Paper' && computerSelection === 'Rock') {
        return `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else {
        return `You lost! ${computerSelection} beats ${capitalize(playerSelection)}.`;
    }
}

function game() {
    let playerScore = computerScore = 0;
    let round = 0;
    let result;

    while (playerScore < 5 && computerScore < 5) {
        round++;

        const playerSelection = prompt('Choose one. "Rock", "Paper" or "Scissors" (Case Insensitive)', 'Rock');
        const computerSelection = getComputerChoice();
        
        result = playRound(playerSelection, computerSelection);

        if (result.includes('won')) playerScore++;
        if (result.includes('lost')) computerScore++;

        console.log(`Round #${round}: ${result}`);
        console.log(`You ${playerScore} - ${computerScore} Computer`);
    }

    console.log('Final result:');

    if (playerScore > computerScore) {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('Hooray! You are the WINNER :)');
    } else {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('Sorry! You LOST :(');
    }
}

game();