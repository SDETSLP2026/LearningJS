/*
Functions_Assignment-1
PS: Calculate Test Score - Create a function calculateScore() that accepts three marks and returns the total score.
Requirements:
    • Accept three numbers as parameters.
    • Calculate the total.
    • Return the result.
    • Call the function and print the result.
*/


/**
 * 
 * @param {number} m1 
 * @param {number} m2 
 * @param {number} m3 
 * @returns 
 */

// Define function
function calculateScore(m1, m2, m3){
       return m1 + m2 + m3;
}


// Call function
let totalScore = calculateScore(60,70,90);
console.log(totalScore); //220