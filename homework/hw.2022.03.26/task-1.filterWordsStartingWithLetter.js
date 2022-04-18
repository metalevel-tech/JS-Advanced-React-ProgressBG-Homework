const quoteOfDouglasAdams = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools';
const startWithTandlongerThan2 = quoteOfDouglasAdams.split(' ').filter(word => word.startsWith('t')).filter(word => word.length > 2);
console.log(startWithTandlongerThan2);