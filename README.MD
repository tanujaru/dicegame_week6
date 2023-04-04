## DICE GAME


**About Game:** In this DIce game, User Interface (UI) contains user/player that can do three things, they are as follows<br>


There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.<br>

**Roll the dice:** The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.<br>

**Add and Exit:** If the current player clicks on Add and Exit, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100  Or the score ented, then the current player wins else the players are switched.<br>

**New Game:** All the scores are set to 0 and Player 1 is set as the starting player (current player).<br>

**Making of Game:** Being a game rendered by the web browser, it is built by the help of HTML, CSS (for the Front-end) and JavaScript (for the Back-end). The main logic of the game lies in the JS file whereas the appearance and the User Interface is rendered by HTML and CSS. In this project, there are basically four types of files:<br>

## File (index.html)<br>
## CSS File (style.css)<br>
## JavaScript File (script.js file)<br>
## Images (dice-*.png file)<br>


![Image](/images/dice_pro1.png)
![Image](/images/dice_pro2.png)
![Image](/images/dice_pro3.png)


 ### Rules to Playe Pig Game:

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "Add and Exit":

 1.If the player rolls a 1, they score nothing and it becomes the next player's turn.<br>
 2.If the player rolls any other number, it is added to their turn total and the player's turn continues.<br>
 3.If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.<br>
 4.The first player to score the scor we entered or more points wins.<br>

**For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-6, after which she chooses to hold, and adds her turn total of 23 points to her score.**<br>


_Challenges: I want to add more module with two dice and more rule to implement to make it more challenging and interesting._











