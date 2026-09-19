/*
Array_Assignment-5
PS: Student Attendance System
Scenario: A school application maintains student attendance.
Question: Declare an array with "Ankit", "Riya", "Karan" and:
1. Add "Neha" at the beginning
2. Remove the last student from the list
3. Create a separate copy of the attendance list
*/

let students = ["Ankit", "Riya", "Karan"];

// 1. Add "Neha" at the beginning
students.unshift("Neha");
console.log(students);

// 2. Remove the last student from the list
console.log("Picking up the last student in the list - " + students.pop());


// 3. Create a separate copy of the attendance list
let learners = [...students]
console.log("Learners: " + learners);