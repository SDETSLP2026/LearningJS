/*
Functions_Assignment-9
PS: Filter Failed Test Cases
Create an array of test case objects containing the test name and test status.
Example:
[
    { name: "Login Test", status: "PASS" },
    { name: "Search Test", status: "FAIL" },
    { name: "Checkout Test", status: "PASS" },
    { name: "Payment Test", status: "FAIL" }
]
Use the filter() method with a callback function to return only the failed test cases.
*/

let testCases = [
    { name: "Login Test", status: "PASS" },
    { name: "Search Test", status: "FAIL" },
    { name: "Checkout Test", status: "PASS" },
    { name: "Payment Test", status: "FAIL" }
];

let failedTestCases = testCases.filter((testCase) => {
    return testCase.status === "FAIL";
});

console.log(failedTestCases);
/*
[
  { name: 'Search Test', status: 'FAIL' },
  { name: 'Payment Test', status: 'FAIL' }
]
*/
