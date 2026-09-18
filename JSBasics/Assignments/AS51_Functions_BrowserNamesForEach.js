/*
Functions_Assignment-7
PS: Display Browser Names Using forEach()
Problem Statement:
Create an array containing the following browser names:
Chromium, Firefox, WebKit
Use the forEach() method to display:
Executing test on Chromium
Executing test on Firefox
Executing test on WebKit

Requirements:
• Use forEach().
• Pass a callback function to forEach().
• Do not use a traditional for loop.
*/

const browsers = ["Chromium", "Firefox", "WebKit"];

browsers.forEach(function(browser){
    console.log(`Executing test on ${browser}`);
});

/*
Executing test on Chromium
Executing test on Firefox
Executing test on WebKit
*/