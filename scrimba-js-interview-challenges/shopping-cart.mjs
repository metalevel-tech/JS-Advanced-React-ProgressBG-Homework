import shoppingCart from "./shopping-cart.data.mjs";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr = []) {
    // return parseFloat(arr.reduce((prev, current) => prev + current.price, 0)).toFixed(2);
    return parseFloat(arr.reduce((acc, { price }) => acc + price, 0)).toFixed(2);
}

console.log(total(shoppingCart));
