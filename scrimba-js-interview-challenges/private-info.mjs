import userData from "./private-info.data.mjs";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data) {
    // return data.map(item => ({
    //     fullName: `${item.name.first} ${item.name.last}`,
    //     birthday: new Date(item.dob.date).toDateString()
    // }));

    // Using destructure
    return data.map(({ name, dob }) => ({
        fullName: `${name.first} ${name.last}`,
        birthday: new Date(dob.date).toDateString()
    }));
}

console.dir(transformData(userData)[0]);
console.dir(transformData(userData)[1]);
console.dir(transformData(userData)[2]);
console.dir(transformData(userData));
