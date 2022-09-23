const squares = document.querySelectorAll('.square')
const player1 =document.querySelector('.player1-img')
const player2 = document.querySelector('.player2-img')
const image= document.createElement('img')
let i=0
for(let square of squares){
    square.setAttribute('grid-area',`${i}`)
    i++;
}
const winValue = 2
let currentValue = 0
// winning.classList.contains('player1')
const winningConditions = [
  [squares[0], squares[1], squares[2]],
  [squares[3], squares[4], squares[5]],
  [squares[6], squares[7], squares[8]],
  [squares[0], squares[3],squares[6]],
  [squares[1], squares[4], squares[7]],
  [squares[2], squares[5], squares[8]],
  [squares[0], squares[4], squares[8]],
  [squares[2], squares[4], squares[6]]
];

let Player = true;

for (let square of squares) {
  square.addEventListener("click", () => {
    if (!square.classList.contains("player1") &&!square.classList.contains("player2")){
      if (Player) {
        square.classList.add("player1");
        // winning conditions is an array of arrays. winning condition is a winning array
        for(let winningCondition of winningConditions){
          // Enter each element of array
          if(winningCondition[0].classList.contains('player1') && winningCondition[1].classList.contains('player1') && winningCondition[2].classList.contains('player1')){
            console.log('Player 1 wins')
          }
        }
        Player = false;
      } else {
        square.classList.add("player2");
        for(let winningCondition of winningConditions){
          // Enter each element of array
          if(winningCondition[0].classList.contains('player2') && winningCondition[1].classList.contains('player2') && winningCondition[2].classList.contains('player2')){
            console.log('Player 2 wins')
          }
        }
        Player = true
      }
    }
  });
}
