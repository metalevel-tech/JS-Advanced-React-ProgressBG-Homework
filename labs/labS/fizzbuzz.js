function fizzBuzz(n) {
    for (let number = 1; number <= n; number++ ) {
        let answer;

        if (number % 3 === 0 && number % 5 === 0) {
            answer = 'FizzBuzz';
        } else if (number % 3 === 0) {
            answer = 'Fizz';
        } else if (number % 5 === 0) {
            answer = 'Buzz';
        } 
        
        console.log(answer ? answer : number);
    }
}

fizzBuzz(15);