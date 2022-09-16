const squares = document.querySelectorAll('.square')
const player1 =document.querySelector('.player1-img')
const player2 = document.querySelector('.player2-img')
const image= document.createElement('img')
let i=1
for(let square of squares){
    square.setAttribute('grid-area',`${i}`)
    i++;
}
const winValue = 2

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
        for(let winningCondition of winningConditions){
          for(let winning of winningCondition){
            let currentValue = 0
            if(winning.classList.contains('player1')){
              currentValue++
              if(currentValue === winValue ){
                console.log('player 1 won')
              }
            }
          }
        }
        Player = false;
      } else {
        square.classList.add("player2");
        Player = true
      }
    }
  });
}
