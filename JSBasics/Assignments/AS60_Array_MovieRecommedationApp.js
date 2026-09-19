/*
Array_Assignment-7
PS: Movie Recommendation App
Scenario: A movie application stores recommended movies.
Question: Declare an array with "Inception", "Avatar", "Titanic" and:
1. Add "Interstellar" to the movie list
2. Replace "Titanic" with "Jawan"
3. Convert all movie names into a single string separated by "-"
*/

let movies = ["Inception", "Avatar", "Titanic"];

// 1. Add "Interstellar" to the movie list
movies.push("Interstellar");
console.log(movies); //[ 'Inception', 'Avatar', 'Titanic', 'Interstellar' ]

// 2. Replace "Titanic" with "Jawan"
//splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let replacedArr = movies.splice(2,1,"Jawan")
console.log(movies); //[ 'Inception', 'Avatar', 'Jawan', 'Interstellar' ]

// 3. Convert all movie names into a single string separated by "-"
let allMovies = movies.join("-");
console.log(allMovies);// Inception-Avatar-Jawan-Interstellar