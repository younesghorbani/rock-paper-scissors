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

function showResult() {
    const player = document.getElementsByClassName('player');
    const computer = document.getElementsByClassName('computer');
    const message = document.getElementsByClassName('message');
    const status = document.createElement('span');

    if (playerScore > computerScore) {
        player[0].textContent = playerScore;
        computer[0].textContent = computerScore;
        status.textContent = 'WINNER';
        status.style.color = '#90ee90';
        message[0].innerHTML = 'Hooray! You are the ' + status.outerHTML + ' :)';

    } else {
        player[0].textContent = playerScore;
        computer[0].textContent = computerScore;
        status.textContent = 'LOST';
        status.style.color = '#f08080';
        message[0].innerHTML = 'Sorry! You ' + status.outerHTML + ' :(';
    }
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

const content = document.getElementsByClassName('content');

let playerScore = computerScore = 0;
let round = 0;

function game(event) {
    let result;

    if (playerScore < 5 && computerScore < 5) {
        round++;

        const playerSelection = capitalize(event.target.classList[1]);
        const computerSelection = getComputerChoice();
        
        result = playRound(playerSelection, computerSelection);

        if (result.includes('won')) playerScore++;
        if (result.includes('lost')) computerScore++;

        content[0].innerHTML += `Round #${round}: ${result}<br>` +
                                `You ${playerScore} - ${computerScore} Computer<br>`;
    } else {
        weapons.forEach(weapon => weapon.style.pointerEvents = 'none');
        weapons.forEach(weapon => weapon.removeEventListener('click', game));
        
        showResult();
    }
}

const weapons = document.querySelectorAll('.player-side div');

weapons.forEach(weapon => weapon.addEventListener('click', game));