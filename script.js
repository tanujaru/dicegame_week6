

let scores, roundScore, activePlayer, gamePlaying;
var goal;

init();

// ROLL button

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //  Random number OF THE dICE
    let dice = Math.floor(Math.random() * 6) + 1;
 
    //  Display the result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      
      
    } else {
      diceDOM.src = "images/dice-1.png"
      diceDOM.style.display = "block";

      // Next player
      nextPlayer();
    }
  }
});

// HOLD button
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= goal) {
      document.querySelector("#name-" + activePlayer).textContent =document.querySelector("#name-" + activePlayer).textContent + " is winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      gamePlaying = false;
    } else {
      // Next player
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

// NEW-GAME button
document.querySelector(".btn-new").addEventListener("click", init);

function init() {




  // Reseting score vars
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  goal = prompt("Enter score to become winner!");


  document.querySelector(".dice").style.display = "none";
  // Reseting allscores
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Reseting Player Names

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
//model
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Modal Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

//Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

//open
function openModal() {
  modal.style.display ="block";
}
//Close
function closeModal() {
  modal.style.display = "none";
}

//Close if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}





//model

