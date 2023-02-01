// ProgressBG course JS Advanced by Iva Popova, Lesson 2

// Solution 1: Calculate Factorial - Iterative Solution
function factorialIterative(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) result *= i;

    return result;
}

console.log(factorialIterative(50));


// Solution 2: Calculate Factorial - Recursive Solution
function factorialRecursive(n) {
    if (n === 0) return 1;
    else return (n * factorialRecursive(n - 1));
}

console.log(factorialRecursive(50));

/**
 * Calculate Factorial - Recursive Solution - Diagram
 * 
 * +---------+---------------+---------------------+---+
 * | Stack 1 | factorial(3)  ->  3 * factorial(2)  = 6 |
 * +---------+---------------+---------------------+---+
 * |         |    call v     |      ^ return       |   |
 * +---------+---------------+---------------------+---+
 * | Stack 2 | factorial(2)  ->  2 * factorial(1)  = 2 |
 * +---------+--------------+----------------------+---+
 * |         |    call v     |      ^ return       |   |
 * +---------+---------------+---------------------+---+
 * | Stack 3 | factorial(1)  ->  1                 = 1 |
 * +---------+---------------+---------------------+---+
 * 
 */