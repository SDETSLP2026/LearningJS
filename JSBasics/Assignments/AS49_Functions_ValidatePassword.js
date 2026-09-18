/*
Functions_Assignment-5
PS: Validate Password
Create a function validatePassword() that accepts a password and validates it based on the following conditions:
• Password must contain at least 8 characters.
• Password must not be empty.
• Password must contain at least one number.
The function should return true if the password is valid; otherwise, return false.
*/
/**
 * 
 * @param {string} password 
 */
function validatePassword(password){
    if (password === "") {
        console.log("Password should not be empty.");
        return false;
    }

    if (password.length < 8) {
        console.log("Password length is less than 8 characters.");
        return false;
    }

    if (!/\d/.test(password)) {
        console.log("Password must contain at least one number.");
        return false;
    }

    return true;
}

console.log(validatePassword(""));              // Password should not be empty. - false
console.log(validatePassword("abc"));           // Password length is less than 8 characters. - false
console.log(validatePassword("abcdefgh"));      // Password must contain at least one number. - false
console.log(validatePassword("abcdefg1"));      // true
console.log(validatePassword("Password123"));   // true