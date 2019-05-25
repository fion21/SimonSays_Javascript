
// light flash order, order up
let litGo = [];
//user presses pad order, playerOrder up
let myGo = []; 
//an interger, num of flashes in a round, flash around
let hManyl;
// displays what turn user on in the counter, turn
let whatGo;
// boolean whether hit all the right colors or not, good
let correct;
// boolean tracker whether computer's turn or users
let compTurn;

// speaks for itself
let intervalId;
// works once strict button is checked/depressed, strict
let tricky = false;
// keeps the noise defaulted on, can be turned off by manually pressing speaker off
let noise = true;
//if the program is not on it doesn't work, need a manual check in checkbox to switch on
let on = false;
//indicates win when the user has won
let win;

const turnCounter = document.querySelector("#turn");
const tl = document.querySelector("#tl1");
const tr = document.querySelector("#tr2");
const bl = document.querySelector("#bl1");
const br = document.querySelector("#br2");
const trickyBtn = document.querySelector("#tricky");
const onBtn = document.querySelector("#on");
const startBtn = document.querySelector("#start");

trickyBtn.addEventListener('click', (event) => {
  if (trickyBtn.checked == true) {
    tricky = true;
  } else {
    tricky = false;
  }
});

onBtn.addEventListener('click', (event) => {
  if (onBtn.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
   } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startBtn.addEventListener('click', (event) => {
  if (on || win) {
    play();
    let audio = document.getElementById("Cymbal");
    audio.play();
  }
});

function play() {
  win = false;
  litGo = [];
  myGo = [];
  hManyl = 0;
  intervalId = 0;
  whatGo = 1;
  turnCounter.innerHTML = 1;
  correct = true;
  for (var i = 0; i < 5; i++) {
    litGo.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (howManyl == whatGo) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[howManyl] == 1) one();
      if (order[howManyl] == 2) two();
      if (order[howManyl] == 3) three();
      if (order[howManyl] == 4) four();
      howManyl++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("c1");
    audio.play();
  }
  noise = true;
  tl.style.backgroundColor = "lightgreen";
}

function two() {
  if (noise) {
    let audio = document.getElementById("c2");
    audio.play();
  }
  noise = true;
  tr.style.backgroundColor = "tomato";
}

function three() {
  if (noise) {
    let audio = document.getElementById("c3");
    audio.play();
  }
  noise = true;
  bl.style.backgroundColor = "yellow";
}

function four() {
  if (noise) {
    let audio = document.getElementById("c4");
    audio.play();
  }
  noise = true;
  br.style.backgroundColor = "lightskyblue";
}

function clearColor() {
  tl.style.backgroundColor = "darkgreen";
  tr.style.backgroundColor = "darkred";
  bl.style.backgroundColor = "goldenrod";
  br.style.backgroundColor = "darkblue";
}

function flashColor() {
  tl.style.backgroundColor = "lightgreen";
  tr.style.backgroundColor = "tomato";
  bl.style.backgroundColor = "yellow";
  br.style.backgroundColor = "lightskyblue";
}

tl.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

tr.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bl.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

br.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    correct = false;

  if (playerOrder.length == 5 && correct) {
    winGame();
   
    let audio = document.getElementById("Tamba");
    audio.play();
}

  if (correct == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    let audio = document.getElementById("Cackle");
    audio.play();
    setTimeout(() => {
      turnCounter.innerHTML = whatGo;
      clearColor();

      if (tricky) {
        play();
      } else {
        compTurn = true;
        howManyl = 0;
        playerOrder = [];
        correct = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (whatGo == playerOrder.length && correct && !win) {
    whatGo++;
    playerOrder = [];
    compTurn = true;
    howManyl = 0;
    turnCounter.innerHTML = whatGo;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}

function greet(Instructions) {
alert("Instructions"   + ': Check the Power checkbox, then press start to start the game. Copy the sounds by tapping the pads. Get over 5 rounds right to win.')
}
greet ("Instructions") 


 
