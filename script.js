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
    if (playerSelection.localeCompare(computerSelection) === 0) {
        return `It's a tie! Both of you chose ${computerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
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

        const computerWeapon = document.querySelector(
            `.computer-side .card.${computerSelection.toLowerCase()}`);

        setTimeout(() => computerWeapon.classList.add('shrink'), 150);
        setTimeout(() => computerWeapon.classList.remove('shrink'), 350);
        
        result = playRound(playerSelection, computerSelection);

        if (result.includes('won')) playerScore++;
        if (result.includes('lost')) computerScore++;

        setTimeout(() => {
            content[0].innerHTML += `<span>Round #${round}: ${result}<br>` +
            `You ${playerScore} - ${computerScore} Computer</span><br>`;
        }, 650);
    } else {
        userWeapons.forEach(weapon => weapon.style.pointerEvents = 'none');
        userWeapons.forEach(weapon => weapon.removeEventListener('click', game));
        
        showResult();
    }
}

const userWeapons = document.querySelectorAll('.player-side div');

userWeapons.forEach(weapon => weapon.addEventListener('click', game));