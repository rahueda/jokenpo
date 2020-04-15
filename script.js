const buttons = document.querySelectorAll('button');
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
let pOne = 0
let pTwo = 0
p2.textContent = `${pOne} x ${pTwo}`

const computerSelection = () => {
    const cP= ['rock', 'paper', 'scissors']
    return cP[Math.floor(Math.random() * cP.length)]
} 

buttons.forEach((button) => {
    button.addEventListener('click', () =>
    playRound(button.className, computerSelection())
    )
})

function playRound(playerSelection, computerSelection) {
    const p = playerSelection
    const c = computerSelection
    
    if (p === c) {
        p1.textContent = `DRAW!`
    } else if ( (p == 'rock' && c == 'scissors')  || 
                (p == 'paper') && (c == 'rock') ||
                (p == 'scissors') && c == ('paper')) {
                    pOne += 1
                    p1.textContent = `You WON, ${p} beats ${c}`;
    } else if ( (p == 'rock' && c == 'paper')  || 
                (p == 'paper') && (c == 'scissors') ||
                (p == 'scissors') && c == ('rock')) {
                    pTwo += 1
                    p1.textContent = `You LOST, ${c} beats ${p}`;
    }

    p2.textContent = `${pOne} x ${pTwo}`
    game();
};

function game() {
    if(pOne == 5) {
        p1.textContent = 'GAME WON';
        p1.style.color = 'blue';
        p2.style.color = 'blue';
    resetButton()

    } else if (pTwo == 5) {
        p1.textContent = 'GAME LOST';
        p1.style.color = 'red';
        p2.style.color = 'red';
    resetButton()
    }
}

function resetButton() {
    let btn = document.createElement('button');
    let btnText = document.createTextNode("RESET");
    let p3 = document.getElementById('btns')

        btn.setAttribute("id", "newButton")
        btn.appendChild(btnText);
        p3.parentNode.replaceChild(btn, p3)
        btn.addEventListener ("click", () => {
            document.location.reload()
        });
}

