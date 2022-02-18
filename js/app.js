
const gameBoard = document.querySelector('#gameBoard')
const boardCells = document.querySelectorAll('boardCell')

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

let message = document.getElementById ('message')

let currentPlayer ='X'
let turn = 0
let winnerFound = false


const makeMove = (event) => {
   
    if (event.target.innerText === '') {
        event.target.innerText = currentPlayer
        turn++
    } 

    // Invokes checkWinner() to see if there is a winner, if not, switches players & displays next player
    if (currentPlayer === 'X') {
        checkWinner()
        currentPlayer = 'O'
        message.innerText  = `Player ${currentPlayer}: Please make your selection`

       } else{
           checkWinner()
           currentPlayer = 'X'
           message.innerText  = `Player ${currentPlayer}: Please make your selection`
       }
    }

        
const checkWinner = () => {
    
    // Winning combos
        let combo1 = [box1.innerText,box2.innerText,box3.innerText]
        let combo2 = [box4.innerText,box5.innerText,box6.innerText]
        let combo3 = [box7.innerText,box8.innerText,box9.innerText]
        let combo4 = [box1.innerText,box4.innerText,box7.innerText]
        let combo5 = [box2.innerText,box5.innerText,box8.innerText]
        let combo6 = [box3.innerText,box6.innerText,box9.innerText]
        let combo7 = [box1.innerText,box5.innerText,box9.innerText]
        let combo8 = [box3.innerText,box5.innerText,box7.innerText]
        let winnerCombos = [combo1,combo2,combo3,combo4,combo5,combo6,combo7,combo8]

        // Checks if there is a winning combo
        for (let i = 0; i < winnerCombos.length; i++) {
            if (winnerCombos[i].join('') === 'XXX' || winnerCombos[i].join('') === 'OOO') {
                winnerFound = true
                
                endGame()
            }

        }
        // Checks if there is a tie
        if (turn >=9  && winnerFound === false) {
            message.innerText = 'It is a tie!'
            
            endGame()
        }

}
    
// Removes eventlisteners once game is over
const endGame = () => {
    
    box1.removeEventListener('click', makeMove)
    box2.removeEventListener('click', makeMove)
    box3.removeEventListener('click', makeMove)
    box4.removeEventListener('click', makeMove)
    box5.removeEventListener('click', makeMove)
    box6.removeEventListener('click', makeMove)
    box7.removeEventListener('click', makeMove)
    box8.removeEventListener('click', makeMove)
    box9.removeEventListener('click', makeMove)
        
}

// Restarts the game    

resetButton.addEventListener('click',()=>{
    
    currentPlayer = 'X'
    winnerFound = false
    turn = 0
    box1.addEventListener('click', makeMove)
    box2.addEventListener('click', makeMove)
    box3.addEventListener('click', makeMove)
    box4.addEventListener('click', makeMove)
    box5.addEventListener('click', makeMove)
    box6.addEventListener('click', makeMove)
    box7.addEventListener('click', makeMove)
    box8.addEventListener('click', makeMove)
    box9.addEventListener('click', makeMove)

    box1.innerText = ''
    box2.innerText = ''
    box3.innerText = ''
    box4.innerText = ''
    box5.innerText = ''
    box6.innerText = ''
    box7.innerText = ''
    box8.innerText = ''
    box9.innerText = ''
    message.innerText  = `Player ${currentPlayer}: Please make your selection`

})    
    
    box1.addEventListener('click', makeMove)
    box2.addEventListener('click', makeMove)
    box3.addEventListener('click', makeMove)
    box4.addEventListener('click', makeMove)
    box5.addEventListener('click', makeMove)
    box6.addEventListener('click', makeMove)
    box7.addEventListener('click', makeMove)
    box8.addEventListener('click', makeMove)
    box9.addEventListener('click', makeMove)
