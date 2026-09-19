/*
Array_Assignment-13
PS: Mobile Contacts List
Scenario: A mobile app stores contact names.
Question: Declare an array with "Ram", "Shyam", "Mohan" and:
1. Add "Sita" at the beginning
2. Remove the last contact
3. Extract only the first 2 contacts
*/

let myContacts = ["Ram", "Shyam", "Mohan"];

// 1. Add "Sita" at the beginning
myContacts.unshift("Sita");
console.log(myContacts); //[ 'Sita', 'Ram', 'Shyam', 'Mohan' ]

// 2. Remove the last contact
myContacts.pop();
console.log(myContacts);//[ 'Sita', 'Ram', 'Shyam' ]

// 3. Extract only the first 2 contacts
let extracted = myContacts.slice(0,2);
console.log(extracted);//[ 'Sita', 'Ram' ]