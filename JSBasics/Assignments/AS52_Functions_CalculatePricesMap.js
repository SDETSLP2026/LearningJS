/*
Functions_Assignment-8
PS: Calculate Final Prices Using map()
Create an array containing product prices:
1000, 2000, 3000, 4000
Use the map() method with a callback function to calculate the price after adding 18% GST.
The function should return a new array containing the updated prices.
Expected Output: [1180, 2360, 3540, 4720] 
*/

let prod_prices = [1000, 2000, 3000, 4000];

console.log(prod_prices); //[ 1000, 2000, 3000, 4000 ]

//map(): Calls a defined callback function on each element of an array, and returns an array that contains the results. 

let finalProdPrices = prod_prices.map((price)=>{
    let gstonpp = price * 0.18;
    return price + gstonpp;
})

console.log(finalProdPrices); //[ 1180, 2360, 3540, 4720 ]
