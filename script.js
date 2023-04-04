//Declaring the variable.

let  roundScore, activePlayer,scores, gamePlaying;
var goal;

init();

// ROLL button is like rolling the dice .

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    
    // Genrate random number  from the dice.

    let dice = Math.floor(Math.random() * 6) + 1;
 
    //  Display the result of the dice and select the proper image of the dice.
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    //  Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      
      
    } else {
      diceDOM.src = "images/dice-1.png"
      diceDOM.style.display = "block";

      //  Else  loop calls the function for Next player's turn.
      nextPlayer();
    }
  }
});

// Add score and Exit the turn .
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL Score
    scores[activePlayer] += roundScore;

    // Update the UI with scores
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game if it equqls or greater then the limit.
    if (scores[activePlayer] >= goal) {
      document.querySelector("#name-" + activePlayer).textContent =document.querySelector("#name-" + activePlayer).textContent + " is winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

      gamePlaying = false;
    } else {
      // Next player's turn
      nextPlayer();
    }
  }
});


function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

// NEW-GAME button to start new game
document.querySelector(".btn-new").addEventListener("click", init);

function init() {




  // Reseting score variables.
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  // seting the winning score.
  goal = prompt("Enter Score in Numbers to become a winner!");


  document.querySelector(".dice").style.display = "none";

  // Reseting allscores the scores 
  
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Reseting Player Names by adding the names.

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 3";
  
  document.getElementById("name-0").textContent = document.getElementById("fname").value;
  document.getElementById("name-1").textContent = document.getElementById("sname").value;
  



  // Removing classes from panels

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// Intructions

const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

//Adding event Listener on the  click event

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

//open the instruction.
function openModal() {
  modal.style.display ="block";
}
//Close the Instruction.
function closeModal() {
  modal.style.display = "none";
}

//Close if outside click.

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}







