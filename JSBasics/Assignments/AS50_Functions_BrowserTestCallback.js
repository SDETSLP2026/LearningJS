/*
Functions_Assignment-6
PS: Browser Test Using Callback
Create a function runBrowserTest() that accepts a browser name and a callback function.
The function should simulate executing a test on the specified browser and pass the browser name and test result to the callback.
Requirements:
    • Accept browser and callback.
    • Execute the test for the specified browser.
    • Pass the browser name and test result to the callback.
    • Display the result.
*/


function runBrowserTest(browserName, callBackFun){
    
    // simulating browser test
    let testResult = true;

    //pass the browser name and test result to the callback
    callBackFun(browserName, testResult);
}

function displayResults(browserName, testResult){
    console.log("These tests are executed on " + browserName + " browser.");
    console.log("Test Result:", testResult ? "PASS" : "FAIL");
}

// Calling the function
runBrowserTest("Chrome", displayResults);
