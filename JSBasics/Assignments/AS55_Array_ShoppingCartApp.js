/*
Array_Assignment-2
PS: Shopping Cart Application
Scenario: An e-commerce website manages products in a shopping cart.
Question: Declare an array with "Mobile", "Laptop", "Mouse" and:
1. Add "Keyboard" to the cart
2. Display all products in reverse order
3. Convert all cart items into a single string separated by " | "
*/

let cartItems = ["Mobile", "Laptop", "Mouse"];

// 1. Add "Keyboard" to the cart
cartItems.push("Keyboard");
console.log(cartItems); //[ 'Mobile', 'Laptop', 'Mouse', 'Keyboard' ]


// 2. Display all products in reverse order
console.log(cartItems.reverse()); //[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

//3. Convert all cart items into a single string separated by " | "
let allInOne = cartItems.join(" | ");
console.log(allInOne); //Keyboard | Mouse | Laptop | Mobile