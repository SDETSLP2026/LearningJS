/*
Array_Assignment-9
PS: Online Course Platform
Scenario: An online learning platform stores enrolled courses.
Question: Declare an array with "JavaScript", "Playwright", "Cypress" and:
1. Remove the first course
2. Add "TypeScript" at the beginning
3. Extract only the last 2 courses
*/

let courses = ["JavaScript", "Playwright", "Cypress"];

// 1. Remove the first course
let remFirstEle = courses.shift();
console.log(remFirstEle); //JavaScript
console.log(courses); //[ 'Playwright', 'Cypress' ]

// 2. Add "TypeScript" at the beginning
courses.unshift("TypeScript");
console.log(courses); //[ 'TypeScript', 'Playwright', 'Cypress' ]

// 3. Extract only the last 2 courses
console.log(courses.slice(-2)); //[ 'Playwright', 'Cypress' ]