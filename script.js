let resultCalculator = document.getElementById('resultCalculator')
function clearscreen() {
    resultCalculator.value = " "; 
}
function display(value) {
  resultCalculator.value += value;
}

function calculate() {
    let p = resultCalculator.value;
    let c = eval(p);
    resultCalculator.value = c;
}

/*Tic Tac Toe*/

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restart');
let x = "<img src='x.png' width='30px' height='30px'>";
let o = "<img src='Red_circle.svg.png' width='30px' height='30px'>";


const winCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

let options=["","","","","","","","",""];
let currentPlayer = x;
let player = "X";
let running = false;
start();

function start() {
    cells.forEach(cell=>cell.addEventListener('click', cellClick));
    restartButton.addEventListener('click', restartGame);
    statusText.textContent = `${player} es tu Turno`
    running = true;
}
function cellClick(){
    const index = this.dataset.index;
    if(options[index] !="" || !running){
      return;
    };
    updateCell(this,index);
    checkWinner();
  }

  function updateCell(cell,index){
    options[index] = player;
    cell.innerHTML = currentPlayer;
  }

  function changePlayer(){
    player = (player == 'X') ? "O" : "X";
    currentPlayer = (currentPlayer == x) ? o : x;
    statusText.textContent=`${player} Your Turn`;
}

function checkWinner(){
    let isWon = false;
    for(let i = 0; i < winCombinations.length; i++){
      const condition = winCombinations[i]; //[0,1,2]
      const cell1=options[condition[0]]; //x
      const cell2=options[condition[1]]; //''
      const cell3=options[condition[2]]; //''
      if(cell1=="" || cell2=="" || cell3==""){
        continue;
      }
      if(cell1==cell2 && cell2==cell3){
        isWon=true;
        cells[condition[0]].classList.add('win');
        cells[condition[1]].classList.add('win');
        cells[condition[2]].classList.add('win');
      }
    }
    if (isWon){
      statusText.textContent=`${player} gano!`;
      running=false;
    }else if(!options.includes("")){
      statusText.textContent=`Empate!`;
      running=false;
    }else{
      changePlayer();
    }
  
  }
  
  function restartGame(){
    options=["","","","","","","","",""];
    currentPlayer=x;
    player="X";
    running=true;
    statusText.textContent=`${player} es tu Turno`;
  
    cells.forEach(cell=>{
        cell.innerHTML="";
        cell.classList.remove('win');
    });
  }


  /* Number guessing */
  const numberGuess = Math.floor(Math.random() * 10 + 1)
  let guessText = document.getElementById('guessText')
  let guess = 1;

  document.getElementById("submitGuess").onclick = function() {
  let numberGuessUser = document.getElementById('guessField').value
    if (numberGuessUser == numberGuess) {
      win();
    } else if (numberGuessUser > numberGuess) {
      guess++;
      smallerNumber();
      }
      else {
      guess++;
      biggerNumber();
      }
    }
  
function win() {
  guessText.innerText = `FELICIDADES!! LO ADIVINASTE EN ${guess} INTENTOS`;
  guess = 1;
}
function smallerNumber() {
  guessText.innerText = "LO SIENTO!! INTENTA CON UN NUMERO MAS PEQUEÑO";
}
function biggerNumber() {
  guessText.innerText = "LO SIENTO!! INTENTA CON UN NUMERO MAS GRANDE";
}

/* Rock Paper Scissors */



let scissorsButton = document.getElementById('scissors')
let rockButton = document.getElementById('rock')
let paperButton = document.getElementById('paper')
let resultDisplay  = document.getElementById('result') 

rockButton.addEventListener('click', () => playRPS('rock'))
paperButton.addEventListener('click', () => playRPS('paper'))
scissorsButton.addEventListener('click', () => playRPS('scissors'))

function playRPS(playerChoice) {
  let optionsRPS = ['rock', 'paper', 'scissors']
  computerChoice = optionsRPS[Math.floor(Math.random() * optionsRPS.length)];
  if (computerChoice === playerChoice) {
    resultDisplay.textContent = 'Es un empate'
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')) {
      resultDisplay.textContent = 'Has ganado!'
    } else {
      resultDisplay.textContent = 'Has perdido!'
    };
}
