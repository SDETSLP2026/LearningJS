/*
Array_Assignment-8
PS: Product Inventory Management
Scenario: An admin manages product inventory.
Question: Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and:
1. Remove "Tablet" from inventory
2. Add "Smart Watch" after "Laptop"
3. Create a duplicate copy of updated inventory
*/

let products = ["Mobile", "Laptop", "Tablet", "Camera"];

// 1. Remove "Tablet" from inventory
let removeElement = products.splice(2,1);
console.log(removeElement); //[ 'Tablet' ]
console.log(products); //[ 'Mobile', 'Laptop', 'Camera' ]

// 2. Add "Smart Watch" after "Laptop"
let addElement = products.splice(1,0,"Smart Watch");
console.log(products); //[ 'Mobile', 'Smart Watch', 'Laptop', 'Camera' ]

// 3. Create a duplicate copy of updated inventory
let updatedInventory = [...products];
console.log(updatedInventory); //[ 'Mobile', 'Smart Watch', 'Laptop', 'Camera' ]
