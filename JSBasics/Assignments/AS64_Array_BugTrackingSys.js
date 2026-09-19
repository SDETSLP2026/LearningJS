/*
Array_Assignment-11
PS: Bug Tracking System
Scenario: A software team tracks bugs using arrays.
Question: Declare an array with "Bug101", "Bug102", "Bug103" and:
1. Add "Bug104"
2. Remove "Bug102"
3. Create a copy of the bug list
*/

let buglist = ["Bug101", "Bug102", "Bug103"];

// 1. Add "Bug104"
buglist.push("Bug104");
console.log(buglist); //[ 'Bug101', 'Bug102', 'Bug103', 'Bug104' ]

// 2. Remove "Bug102"
let removeEle = buglist.splice(1,1);
console.log(removeEle); //[ 'Bug102' ]
console.log(buglist); //[ 'Bug101', 'Bug103', 'Bug104' ]

// 3. Create a copy of the bug list
let copy_buglist = [...buglist];
console.log(copy_buglist); //[ 'Bug101', 'Bug103', 'Bug104' ]