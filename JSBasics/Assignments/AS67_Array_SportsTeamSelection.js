/*
Array_Assignment-14
PS: Sports Team Selection
Scenario: A coach manages selected players.
Question: Declare an array with "Virat", "Rohit", "Gill" and:
1. Add "Hardik" to the team
2. Replace "Gill" with "KL Rahul"
3. Display players in reverse order
*/

let players = ["Virat", "Rohit", "Gill"];

// 1. Add "Hardik" to the team
players.push("Hardik");
console.log(players);//[ 'Virat', 'Rohit', 'Gill', 'Hardik' ]

// 2. Replace "Gill" with "KL Rahul"
players.splice(2,1,"KL Rahul");
console.log(players);//[ 'Virat', 'Rohit', 'KL Rahul', 'Hardik' ]

// 3. Display players in reverse order
console.log(players.reverse());//[ 'Hardik', 'KL Rahul', 'Rohit', 'Virat' ]