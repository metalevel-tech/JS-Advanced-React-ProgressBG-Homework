// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/3/3

// Example - using array index in callbackFn
console.log('map(): example 1');
(function() { 

    const input = ['a', 'b', 'c'];
    const output = input.map((e,i) => e.toLocaleUpperCase()+i);
    console.log(output); 
})();

// TASK 1: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
console.log('map(): task 1');
(function() { 
    const cities = [
        {name: 'Sofia', population: 1236000},
        {name: 'Plovdiv', population: 343424},
        {name: 'Burgas', population: 202766},
        {name: 'Varna', population: 335177}
    ];
    
    const cityNames = cities.map(e => e.name);
    console.log(cityNames);
})();  

// TASK: from 'cities' array generate a new array 'bgCityNames' which will contain only the names
// of the cities, but mapped to their Bulgarian equivalent. The create a new array but with the BG names.
console.log('map(): task 2');
(function() { 
    const dict = {
        'Sofia' : 'София',
        'Plovdiv' : 'Пловдив',
        'Burgas' : 'Бургас',
        'Varna' : 'Варна'
    }
    const cities = [
        {name: 'Sofia', population: 1236000},
        {name: 'Plovdiv', population: 343424},
        {name: 'Burgas', population: 202766},
        {name: 'Varna', population: 335177}
    ];
      
    const bgCityNames = cities.map(e => dict[e.name]);
    console.log(bgCityNames);

    const bgCities = cities.map(e => ({name: dict[e.name], population: e.population}));
    bgCities.forEach(e => console.log(e));
})();  

// filter() example 1
console.log('filter(): example 1');
(function() { 
    const input = [1, 2, 3, 4, 5, 6, 7];

    const outputOdd = input.filter(x => x%2);
    const outputEven = input.filter(x => !(x%2));

    console.log(outputOdd, outputEven);
})();  

// TASK: filter only cities which population is greater than 340_000
console.log('filter(): task 1');
(function() { 
    const cities = [
        {name: 'Sofia', population: 1236000},
        {name: 'Plovdiv', population: 343424},
        {name: 'Burgas', population: 202766},
        {name: 'Varna', population: 335177}
    ];

    const filtered = cities.filter(e => e.population > 340000);
    // console.log(filtered);
    filtered.forEach(e => console.log(e));
})();  


// reduce() example 1 - sum array
console.log('reduce(): example 1');
(function() { 
    const input = [1, 2, 3, 4];

    const output = input.reduce((sum, current) => current + sum);
    console.log(output);    // 10

    const output100 = input.reduce((sum, current) => current + sum, 100);
    console.log(output100); // 110
})();  

// reduce() example 2 - filter even and sum them
console.log('reduce(): example 2');
(function() { 
    const input = [1, 2, 3, 4];

    const output = input.filter(e => e%2 === 0).reduce((sum, current) => current + sum);
    console.log(output);    
})();

