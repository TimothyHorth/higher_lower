let valid_input = false;                                        // Defines valid_input as false. Allows while loop to run.
let max_num, input;                                             // Defines max_num and input.

while(!valid_input) {
    input = window.prompt("What should the maximum number be?");// Window prompt for maximum number.

    max_num = Math.ceil(Number(input));                         // Defines input string as a number and rounds up.

    if(max_num != NaN && max_num > 0) {                         // Checks if input is a positive number or not.
        valid_input = true;                                     // A valid input will change boolean to true and exit while loop.
    }
}    

let div = document.querySelector(".container");                 // Selects container class and assigns it to div

let newNode = document.createElement("p");                      // Defines newNode as a paragraph HTML element
newNode.innerHTML = 'Guess a number between 1 and ' + max_num;  // New message that inludes the maximum number provided by the input.

let p1 = div.getElementsByTagName("p")[0];                      // Defines p1 as the paragraph in div.container.

div.replaceChild(newNode, p1);                                  // Replaces p1 with newNode so that new text is shown.

let num = Math.floor(Math.random() * max_num) + 1;              // Generates a random number within range and assigns it to num.
console.log(num)
let guesses_arr = []                                            // Defines an empty array for tracking guesses.

function do_guess() {                                           // Function that is run when Guess button is clicked.
    let guess = Number(document.getElementById("guess").value); // 

    let message = document.getElementById("message");           // 

    let found = guesses_arr.includes(" " + guess);              // Checks for duplicate guesses. Returns true if a duplicate guess is found.
  


    if(found == false) {                                        // If no duplicate guesses were found, this code block will run.
        if(guess == '') {
            message.innerHTML = "Please enter a guess."
        }    
        else if(guess <= 0 || guess > max_num) {                     // If guess is out of range, this code block will run.
            message.innerHTML = "That number is not in range, try again!"
        }
        else if(guess == num) {                                 // If guess is equal to the random number, this code block will run.
            guesses_arr.push(" " + guess)
            if(guesses_arr.length == 1) {                       // If it only took 1 guess, grammar changes and the following message is displayed.
                message.innerHTML = "You got it! It took you 1 try and your guess was " + guesses_arr;
            }
            else {                                              // If it took more than 1 guess, the below message is displayed.
                message.innerHTML = "You got it! It took you " + guesses_arr.length + " tries and your guesses were" + guesses_arr;
            }
        }
        else if (guess > num) {                                 // If guess is greater than the random number, try a lower number.
            guesses_arr.push(" " + guess)
            message.innerHTML = "No, try a lower number.";
        }
        else if (guess < num) {                                 // If guess is lower than the random number, try a higher number.
            guesses_arr.push(" " + guess)
            message.innerHTML = "No, try a higher number.";
        }
        else {                                                  // If no previous conditions were met, guess is not a number.
            message.innerHTML = "That is not a number!";
        }
    } 
    else {                                                      // If a duplicate guess was detected, this code block will run.
        message.innerHTML = "You've already guessed this number!";
        if(guess < num) {                                       // Notify guesser that they need to try a higher number.
            message.innerHTML += " Try a higher number.";
        }
        else {                                                  // Notify the guesser that they need to try a lower number.
            message.innerHTML += " Try a lower number.";
        }
    }
    
}
