/*
Array_Assignment-12
PS: Daily Tasks Planner
Scenario: A task planner application stores daily tasks.
Question: Declare an array with "Wake Up", "Exercise", "Study" and:
1. Add "Meeting" to the task list
2. Remove the first task
3. Reverse all tasks
4. Display all tasks in a single string separated by " -> "
*/

let tasks = ["Wake Up", "Exercise", "Study"];

// 1. Add "Meeting" to the task list
tasks.push("Meeting");
console.log(tasks); //[ 'Wake Up', 'Exercise', 'Study', 'Meeting' ]

// 2. Remove the first task
tasks.shift();
console.log(tasks); //[ 'Exercise', 'Study', 'Meeting' ]

// 3. Reverse all tasks
let copyTasks = [...tasks]
console.log(copyTasks.reverse()); //[ 'Meeting', 'Study', 'Exercise' ]

// 4. Display all tasks in a single string separated by " -> "
let allTasks = tasks.join(" -> ");
console.log(allTasks); //Exercise -> Study -> Meeting
