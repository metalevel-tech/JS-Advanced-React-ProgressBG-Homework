const arr = [1,2,3,4,5,6,7,8,9,10];
const evenSquaresSum = arr.filter(el => !(el%2)).map(el => el**2).reduce((sum, current) => sum + current);
console.log(evenSquaresSum);