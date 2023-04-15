 // Function to get computer's choice
 function getComputerChoice() {
     const choices = ["rock", "paper", "scissors"];
     const randomIndex = Math.floor(Math.random() * 3);
     return choices[randomIndex];
 }

 // Function to play a single round of Rock Paper Scissors
 function playRound(playerSelection, computerSelection) {
     // Convert playerSelection to lowercase for case-insensitive comparison
     playerSelection = playerSelection.toLowerCase();

     // Check for a tie
     if (playerSelection === computerSelection) {
         return "It's a tie!";
     }

     // Check for all possible win scenarios
     if (
         (playerSelection === "rock" && computerSelection === "scissors") ||
         (playerSelection === "paper" && computerSelection === "rock") ||
         (playerSelection === "scissors" && computerSelection === "paper")
     ) {
         return `You win! ${playerSelection} beats ${computerSelection}.`;
     }

     // If it's not a tie or a win, then it's a loss
     return `You lose! ${computerSelection} beats ${playerSelection}.`;
 }

 // Function to play a 5 round game and keep score
 function game() {
     let playerScore = 0;
     let computerScore = 0;

     for (let i = 1; i <= 5; i++) {
         const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
         const computerSelection = getComputerChoice();
         const result = playRound(playerSelection, computerSelection);
         console.log(result);

         // Update score based on result
         if (result.includes("win")) {
             playerScore++;
         } else if (result.includes("lose")) {
             computerScore++;
         }
     }

     // Determine the winner based on the scores
     if (playerScore > computerScore) {
         console.log("You win the game!");
     } else if (playerScore < computerScore) {
         console.log("You lose the game!");
     } else {
         console.log("It's a tie game!");
     }
 }

 // Call the game function to start the game
 game();