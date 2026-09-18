/*
Functions_Assignment-4
PS: Validate Login Credentials
Create a JavaScript function validateLogin() that accepts a username and password. 
The function should validate the credentials and return whether the login is successful or unsuccessful.
Requirements:
• Accept username and password as parameters.
• Consider "admin" as the valid username.
• Consider "admin123" as the valid password.
• Return "Login Successful" when both are correct.
• Otherwise, return "Invalid Username or Password"
*/
/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
//Define function
function validateLogin(username, password){
    if(username === "admin" && password === "admin123"){
        return "Login Successful.";
    } else {
        return "Invalid Username or Password."
    }
}

//Call function
let loginStatus = validateLogin("admin","admin123");
console.log(loginStatus);
