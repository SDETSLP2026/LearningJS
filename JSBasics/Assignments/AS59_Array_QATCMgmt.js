/*
Array_Assignment-6
PS: QA Test Case Management
Scenario: A QA engineer stores executed test cases.
Question: Declare an array with "LoginTest", "PaymentTest", "SearchTest" and:
1. Create another copy of the same array
2. Extract only the first 2 test cases
3. Display test cases in reverse order
*/

let tcarr = ["LoginTest", "PaymentTest", "SearchTest"];

// 1. Create another copy of the same array
let tc_arr = [...tcarr];
console.log(tc_arr); //[ 'LoginTest', 'PaymentTest', 'SearchTest' ]

// 2. Extract only the first 2 test cases
let slicedArr = tcarr.slice(0,2);
console.log(slicedArr); //[ 'LoginTest', 'PaymentTest' ]


// 3. Display test cases in reverse order
let tc_rev = tcarr.reverse();
console.log(tc_rev); //[ 'SearchTest', 'PaymentTest', 'LoginTest' ]