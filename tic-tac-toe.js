////////////////////////////////////////
// Tic-tac-toe game by Karovackiy E. //
//////////////////////////////////////

let a = document.getElementsByClassName("wrapper");

for (let i of a) {
  i.addEventListener('click', cross)
  i.addEventListener('click', win)
  console.log(i);
}

let step = 0;

let arrX = [];
let arrO = [];

function cross() {
    let target = event.target;
    if (target.textContent !== "X" && target.textContent !== "O" && step % 2 !== 1) {
      target.textContent = "X";
      arrX.push(target.id)
      step += 1;
      console.log(step, arrX);
    } else if (target.textContent !== "X" && target.textContent !== "O" && step % 2 === 1) {
      target.textContent = "O";
      step += 1;
      arrO.push(target.id)
      console.log(step, arrO);
    } else {
      console.log('Vse idet po planu...');
    }
  }

function clean() {
  alert(winner);
  let field = document.querySelectorAll('.wrapper')
  console.log(field);
  for (let i of field) {
    i.textContent = '';
    console.log(i);
  }
  arrX.length = 0;
  arrO.length = 0;
  step = 0;
}

function win() {
     if (
     (arrX.includes("0") && arrX.includes("1") && arrX.includes("2")) ||
     (arrX.includes("3") && arrX.includes("4") && arrX.includes("5")) ||
     (arrX.includes("6") && arrX.includes("7") && arrX.includes("8")) ||
     (arrX.includes("0") && arrX.includes("3") && arrX.includes("6")) ||
     (arrX.includes("1") && arrX.includes("4") && arrX.includes("7")) ||
     (arrX.includes("2") && arrX.includes("5") && arrX.includes("8")) ||
     (arrX.includes("2") && arrX.includes("4") && arrX.includes("6")) ||
     (arrX.includes("0") && arrX.includes("4") && arrX.includes("8"))
   ) {
     winner = 'Crosses wins!';
     setTimeout(() => clean(), 100); } else if
       (
       (arrO.includes("0") && arrO.includes("1") && arrO.includes("2")) ||
       (arrO.includes("3") && arrO.includes("4") && arrO.includes("5")) ||
       (arrO.includes("6") && arrO.includes("7") && arrO.includes("8")) ||
       (arrO.includes("0") && arrO.includes("3") && arrO.includes("6")) ||
       (arrO.includes("1") && arrO.includes("4") && arrO.includes("7")) ||
       (arrO.includes("2") && arrO.includes("5") && arrO.includes("8")) ||
       (arrO.includes("2") && arrO.includes("4") && arrO.includes("6")) ||
       (arrO.includes("0") && arrO.includes("4") && arrO.includes("8"))
       ) {
       winner = 'Zeros wins!';
       setTimeout(() => clean(), 100);
     } else if (step >= 9) {
       winner = 'Draw!'
       setTimeout(() => clean(), 100);
     } else {
       console.log('Vse idet po planu...');
     }
};
