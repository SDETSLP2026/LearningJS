/*
Functions_Assignment-3
PS: Validate Username - Create a function validateUsername(username).
Rules:
• Username must not be empty.
• Username must contain at least 5 characters.
• Return true if valid.
• Return false otherwise.
*/

/**
 * 
 * @param {string} username 
 * @returns 
 */
//Define function
function validateUsername(username){
    if(username != "" && username.length >= 5){
        return true;
    } else {
        return false;
    }
}

//Call function
let result = validateUsername("Admin");
console.log(result);
