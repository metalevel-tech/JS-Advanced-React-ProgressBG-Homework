import shoppingCart from "./shopping-cart-savory.data.mjs";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr) {
    return parseFloat(
        arr
            .filter(({ type }) => type === "savory")
            .reduce((acc, { price }) => acc + price, 0)
    ).toFixed(2);

}

console.log(totalSavory(shoppingCart));

