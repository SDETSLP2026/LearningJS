/*
push()
pop()
shift()
unshift()
*/

let color = ["Yellow","Pink","Blue","Orange"];

console.log(color); //[ 'Yellow', 'Pink', 'Blue', 'Orange' ]

console.log("-------------------------------------"); 

//CRUD Operations - Create, Retrieve, Update, Delete

/*
Unshift & Shift methods deals with first element operations.
Push & Pop methods deals with last element operations.

Unshift() - First Element add
Push() - Last Element add
Shift() - First Element remove
Pop() - Last Element remove
*/

//Create OR Insertion methods

//push():Appends new elements to the end of an array, and returns the new length of the array.

color.push("Black");
console.log(color); // [ 'Yellow', 'Pink', 'Blue', 'Orange', 'Black' ]

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift("White");
console.log(color); // [ 'White', 'Yellow', 'Pink', 'Blue', 'Orange', 'Black' ]

console.log("-------------------------------------"); 

//Delete OR Remove methods

//pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedElement1=color.pop(); // To know which element is deleted - it is saved in a var
console.log(deletedElement1); //Black
console.log(color); //[ 'White', 'Yellow', 'Pink', 'Blue', 'Orange' ]

//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedElement2=color.shift();
console.log(deletedElement2);//White
console.log(color);//[ 'Yellow', 'Pink', 'Blue', 'Orange' ]

console.log("-------------------------------------"); 

// Update OR Modifications methods

//join():Adds all the elements of an array into a string, separated by the specified separator string.
//array to string convertion
let words=["Hello","all","welcome","to","learn","array"];
console.log(words); //[ 'Hello', 'all', 'welcome', 'to', 'learn', 'array' ]
console.log(typeof words); //object - This is an array

let sentence = words.join(" "); //with join we have to give separator
console.log(sentence); //Hello all welcome to learn array
console.log(typeof sentence); //string

console.log("-------------------------------------"); 

//reverse():Reverses the elements in an array in place. 
// This method mutates the array and returns a reference to the same array.
let id=[10,20,30,40,50];
console.log(id);//[ 10, 20, 30, 40, 50 ]
console.log(id.reverse());//[ 50, 40, 30, 20, 10 ]

console.log("-------------------------------------"); 

// concat():Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
let a = [10,20,30];
let b = [100,200,300];
let res = a.concat(b);
console.log(res); //[ 10, 20, 30, 100, 200, 300 ]

console.log("-------------------------------------"); 

/*
Spread Operator in Js/Rest parameters(...)
=============================================
Using spread operator we can store n number of entries in array and 
even we can pass n number of parameters into function

1. How to copy array[...]
2. Destructuring of array elements
*/

let first = [1,2,3,4];
console.log(first); //[ 1, 2, 3, 4 ]

let second = [...first];
console.log(second); //[ 1, 2, 3, 4 ]

let third = [10,20,30,...second];
console.log(third); //[10,20,30,1,2,3,4]
console.log(third.length); //7

let fourth = [100,...first,200,300];
console.log(fourth); //[100,1,2,3,4,200,300]

//multiple arrays
let fifth = [...first, ...color];
console.log(fifth); //[ 1, 2, 3, 4, 'Yellow', 'Pink', 'Blue', 'Orange' ]