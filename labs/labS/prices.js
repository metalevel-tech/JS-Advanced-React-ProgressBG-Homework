const prices1 = [2, 5, 1, 4]; // 8
const prices2 = [4, 9, 2, 3]; // 10
const prices3 = [1, 2, 3, 4]; // 7

function calculateAmount(prices) {
    // Write your code here
    const discounts = [];
    const cost = [];

    discounts[0] = 0;
    discounts[1] = prices[0];
    discounts[2] = Math.min(prices[0], prices[1]);
    discounts[3] = Math.min(prices[0], prices[1], prices[2]);
    
    cost[0] = prices[0] - discounts[0];
    cost[1] = prices[1] - discounts[1];
    cost[2] = prices[2] - discounts[2];
    cost[3] = prices[3] - discounts[3];

    return cost.map(price => price < 0 ? 0 : price).reduce((acc, price) => acc + price);
}

function calculateAmount2(prices) {
    // Write your code here
    const discounts = [];
    const cost = [];

    for (let i = 0; i < prices.length; i++) {
        if (i === 0) discounts[i] = 0;
        else if (i === 1) discounts[i] = prices[i - 1];
        else {
            const arr = prices.slice(0, i);
            discounts[i] = Math.min(...arr);
        }
        
        cost[i] = prices[i] - discounts[i];
    }

    return cost.map(price => price < 0 ? 0 : price).reduce((acc, price) => acc + price);
}

console.log(calculateAmount(prices1));
console.log(calculateAmount2(prices1));

console.log(calculateAmount(prices2));
console.log(calculateAmount2(prices2));

console.log(calculateAmount(prices3));
console.log(calculateAmount2(prices3));

