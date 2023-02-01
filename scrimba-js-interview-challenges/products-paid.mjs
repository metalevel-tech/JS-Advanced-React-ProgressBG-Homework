import products from "./products-paid.data.mjs";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
    return data
        .filter(({ type }) => type === "sweet")
        .map(({ item, price }) => ({ item, price }));
}

console.log(getSaleItems(products)[0]);
console.log(getSaleItems(products)[1]);
console.log(getSaleItems(products)[2]);
console.log(getSaleItems(products));