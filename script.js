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
    if (capitalize(playerSelection).localeCompare(computerSelection) == 0) {
        return;
    } else if (capitalize(playerSelection) === 'Rock' && computerSelection === 'Scissors') {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`
    } else if (capitalize(playerSelection) === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`
    } else if (capitalize(playerSelection) === 'Paper' && computerSelection === 'Rock') {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`
    } else {
        return `You lose! ${computerSelection} beats ${capitalize(playerSelection)}.`
    }
}

const playerSelection = prompt('Choose one. "Rock", "Paper" or "Scissors" (Case Insensitive)', 'Rock');
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));