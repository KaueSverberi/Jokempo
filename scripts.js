const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const botScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empatou"
    } else if (
        human === 'Rock' && machine === 'Scissors' ||
        human === 'Paper' && machine === 'Rock' ||
        human === 'Scissors' && machine === 'Paper'
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou"
    } else{
        machineScoreNumber++
        botScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu"
    }
}