/*
Array_Assignment-1
PS: Employee Management System
Scenario: A company stores employee names in an array.
Question: Declare an array with employee names "Rahul", "Priya", "Amit" and perform the following operations:
1. Add "Sneha" to the employee list
2. Remove the last employee from the list
3. Add "Manager" at the beginning of the list
4. Remove the first employee from the list
*/

let empArr = ["Rahul", "Priya", "Amit"];
console.log("Initial Employee Array: " + empArr);

// 1. Add "Sneha" to the employee list
empArr.push("Sneha");
console.log(empArr); //[ 'Rahul', 'Priya', 'Amit', 'Sneha' ]

// 2. Remove the last employee from the list
let lastEle = empArr.pop();
console.log(lastEle); //Sneha
console.log(empArr); //[ 'Rahul', 'Priya', 'Amit' ]

// 3. Add "Manager" at the beginning of the list
empArr.unshift("Manager");
console.log(empArr); //[ 'Manager', 'Rahul', 'Priya', 'Amit' ]

// 4. Remove the first employee from the list
let firstEle = empArr.shift();
console.log(firstEle); //Manager
console.log(empArr); //[ 'Rahul', 'Priya', 'Amit' ]



