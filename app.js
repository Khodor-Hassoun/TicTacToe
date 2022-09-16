const squares = document.querySelectorAll('.square')
const player1 =document.querySelector('.player1-img')
const player2 = document.querySelector('.player2-img')
const image= document.createElement('img')
let i=1
for(let square of squares){
    square.setAttribute('grid-area',`${i}`)
    i++;
}

let Player = true;

for (let square of squares) {
  square.addEventListener("click", () => {
    if (
      !square.classList.contains("player1") &&
      !square.classList.contains("player2")
    ){
      if (Player) {
        square.classList.add("player1");
        Player = false;
      } else {
        square.classList.add("player2");
        Player = true
      }
    }
  });
}
