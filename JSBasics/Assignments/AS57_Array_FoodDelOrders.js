/*
Array_Assignment-4
PS: Food Delivery Orders
Scenario: A food delivery application maintains current orders.
Question: Declare an array with "Pizza", "Burger", "Pasta" and:
1. Add "Sandwich" to the orders
2. Remove the first order
3. Display all orders as a comma-separated string
*/

let currOrders = ["Pizza", "Burger", "Pasta"];

// 1. Add "Sandwich" to the orders
currOrders.push("Sandwich");
console.log(currOrders); // [ 'Pizza', 'Burger', 'Pasta', 'Sandwich' ]

// 2. Remove the first order
currOrders.shift();
console.log(currOrders); //[ 'Burger', 'Pasta', 'Sandwich' ]

// 3. Display all orders as a comma-separated string
currOrders.join(",");
console.log(currOrders); //[ 'Burger', 'Pasta', 'Sandwich' ]
