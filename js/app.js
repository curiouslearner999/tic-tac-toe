
const gameBoard = document.querySelector("#gameBoard")
const boardCells = document.querySelectorAll('.boardCell')
//identify the reset button
const resetButton = document.querySelector('#resetButton')


let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')

let currenPlayer ='X'
let turn = 0
let gameActive = false


const startGame = () => {
    boardCells.forEach(cell =>{
        cell.addEventListener('click',makeMove)
    })
}

startGame()

const makeMove = (event) => {
    if (event.target.innerHTML!=="") return;
    event.target.innerHTML=currentPlayer;
    turn++;


    // Invokes checkWinner() to see if there is a winner, if not, switches players & displays next player
    if (currentPlayer==="x") {
        e.target.classList.add("X_CLASS");
        checkWinner();
        if (winnerFound===true) return;
        currentPlayer="o";
        message.innerHTML="Player O: Please make your selection";

       }
    }

    else if (currentPlayer==="o"&&playerTwo==="player") {
        e.target.classList.add("O_CLASS");
        checkWinner();
        if (winnerFound===true) return;
        currentPlayer="x";
        message.innerHTML="Player X: Please make your selection";

    }
    
}