/*
Array_Assignment-15
PS: Real-Time Automation Framework Scenario
Scenario: An automation framework stores failed test names.
Question: Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and:
1. Add "ProfileFail"
2. Remove the first failed test
3. Create another copy of the failed tests array
4. Extract only the first 2 failed tests
5. Replace "CheckoutFail" with "PaymentFail"
6. Convert all failures into a single comma-separated string
*/

let failedTCs = ["LoginFail", "CheckoutFail", "SearchFail"];

// 1. Add "ProfileFail"
failedTCs.push("ProfileFail");
console.log(failedTCs); //[ 'LoginFail', 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

// 2. Remove the first failed test
failedTCs.shift();
console.log(failedTCs); //[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

// 3. Create another copy of the failed tests array
let copy_failedTCs = [...failedTCs];
console.log(copy_failedTCs); //[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

// 4. Extract only the first 2 failed tests
console.log(failedTCs.slice(0,2)); //[ 'CheckoutFail', 'SearchFail' ]

// 5. Replace "CheckoutFail" with "PaymentFail"
let replaceEle = failedTCs.splice(0,1,"PaymentFail");
console.log(failedTCs); //[ 'PaymentFail', 'SearchFail', 'ProfileFail' ]

// 6. Convert all failures into a single comma-separated string
let allFailures = failedTCs.join(",");
console.log(allFailures); //PaymentFail,SearchFail,ProfileFail
