
// // light flash order
// let order = [];
// //user presses pad order
// let playerOrder = [];
// //an interger, num of flashes in a round
// let flash;
// // displays what turn user on in the counter
// let turn;
// // boolean whether hit all the right colors or not
// let good;
// // boolean tracker whether computer's turn or users
// let compTurn;
// let intervalId;
// // works once strict button is checked/depressed
// let strict = false;
// // keeps the noise defaulted on, can be turned off by manually pressing speaker off
// let noise = true;
// //if the program is not on it doesn't work, need a manual check in checkbox to switch on
// let on = false;
// //indicates win when the user has won
// let win;

// const turnCounter = document.querySelector("#turn");
// const tl = document.querySelector("#tl1");
// const tr = document.querySelector("#tr2");
// const bl = document.querySelector("#bl1");
// const br = document.querySelector("#br2");
// const strictButton = document.querySelector("#strict");
// const onButton = document.querySelector("#on");
// const startButton = document.querySelector("#start");

// strictButton.addEventListener('click', (event) => {
//   if (strictButton.checked == true) {
//     strict = true;
//   } else {
//     strict = false;
//   }
// });

// onButton.addEventListener('click', (event) => {
//   if (onButton.checked == true) {
//     on = true;
//     turnCounter.innerHTML = "-";
//   } else {
//     on = false;
//     turnCounter.innerHTML = "";
//     clearColor();
//     clearInterval(intervalId);
//   }
// });

// startButton.addEventListener('click', (event) => {
//   if (on || win) {
//     play();
//     let audio = document.getElementById("Cymbal");
//     audio.play();
//   }
// });

// function play() {
//   win = false;
//   order = [];
//   playerOrder = [];
//   flash = 0;
//   intervalId = 0;
//   turn = 1;
//   turnCounter.innerHTML = 1;
//   good = true;
//   for (var i = 0; i < 5; i++) {
//     order.push(Math.floor(Math.random() * 4) + 1);
//   }
//   compTurn = true;

//   intervalId = setInterval(gameTurn, 800);
// }

// function gameTurn() {
//   on = false;

//   if (flash == turn) {
//     clearInterval(intervalId);
//     compTurn = false;
//     clearColor();
//     on = true;
//   }

//   if (compTurn) {
//     clearColor();
//     setTimeout(() => {
//       if (order[flash] == 1) one();
//       if (order[flash] == 2) two();
//       if (order[flash] == 3) three();
//       if (order[flash] == 4) four();
//       flash++;
//     }, 200);
//   }
// }

// function one() {
//   if (noise) {
//     let audio = document.getElementById("c1");
//     audio.play();
//   }
//   noise = true;
//   tl.style.backgroundColor = "lightgreen";
// }

// function two() {
//   if (noise) {
//     let audio = document.getElementById("c2");
//     audio.play();
//   }
//   noise = true;
//   tr.style.backgroundColor = "tomato";
// }

// function three() {
//   if (noise) {
//     let audio = document.getElementById("c3");
//     audio.play();
//   }
//   noise = true;
//   bl.style.backgroundColor = "yellow";
// }

// function four() {
//   if (noise) {
//     let audio = document.getElementById("c4");
//     audio.play();
//   }
//   noise = true;
//   br.style.backgroundColor = "lightskyblue";
// }

// function clearColor() {
//   tl.style.backgroundColor = "darkgreen";
//   tr.style.backgroundColor = "darkred";
//   bl.style.backgroundColor = "goldenrod";
//   br.style.backgroundColor = "darkblue";
// }

// function flashColor() {
//   tl.style.backgroundColor = "lightgreen";
//   tr.style.backgroundColor = "tomato";
//   bl.style.backgroundColor = "yellow";
//   br.style.backgroundColor = "lightskyblue";
// }

// tl.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(1);
//     check();
//     one();
//     if(!win) {
//       setTimeout(() => {
//         clearColor();
//       }, 300);
//     }
//   }
// })

// tr.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(2);
//     check();
//     two();
//     if(!win) {
//       setTimeout(() => {
//         clearColor();
//       }, 300);
//     }
//   }
// })

// bl.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(3);
//     check();
//     three();
//     if(!win) {
//       setTimeout(() => {
//         clearColor();
//       }, 300);
//     }
//   }
// })

// br.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(4);
//     check();
//     four();
//     if(!win) {
//       setTimeout(() => {
//         clearColor();
//       }, 300);
//     }
//   }
// })

// function check() {
//   if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
//     good = false;

//   if (playerOrder.length == 5 && good) {
//     winGame();
   
//     let audio = document.getElementById("Tamba");
//     audio.play();
// }

//   if (good == false) {
//     flashColor();
//     turnCounter.innerHTML = "NO!";
//     let audio = document.getElementById("Cackle");
//     audio.play();
//     setTimeout(() => {
//       turnCounter.innerHTML = turn;
//       clearColor();

//       if (strict) {
//         play();
//       } else {
//         compTurn = true;
//         flash = 0;
//         playerOrder = [];
//         good = true;
//         intervalId = setInterval(gameTurn, 800);
//       }
//     }, 800);

//     noise = false;
//   }

//   if (turn == playerOrder.length && good && !win) {
//     turn++;
//     playerOrder = [];
//     compTurn = true;
//     flash = 0;
//     turnCounter.innerHTML = turn;
//     intervalId = setInterval(gameTurn, 800);
//   }

// }

// function winGame() {
//   flashColor();
//   turnCounter.innerHTML = "WIN!";
//   on = false;
//   win = true;
// }

// function greet(Instructions) {
// alert("Instructions"   + ': Check the Power checkbox, then press start to start the game. Copy the sounds by tapping the pads. Get over 5 rounds right to win.')
// }
// greet ("Instructions") 


 
