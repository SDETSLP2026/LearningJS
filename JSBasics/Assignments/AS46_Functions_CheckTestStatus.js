/*
Functions_Assignment-2
PS: Check Test Status - Create a function checkTestStatus() that accepts a test score.
Rules:
• Score >= 40 → "PASS"
• Score < 40 → "FAIL"
*/

/**
 * 
 * @param {number} score 
 */

//Define function
function checkTestStatus(score){
    if(score >= 40){
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

//Call function
checkTestStatus(220);