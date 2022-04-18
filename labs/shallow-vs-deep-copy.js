const obj = {
    name: 'Ada',
    address: {
        town: 'Sofia',
        zip: 1715  // we will change only this value to illustrate Shallow vs Deep copy
    }
}

const arr = [1, 3, obj];

// Create Shallow copy of 'obj'
const objShallowCopy = Object.assign({}, obj);
// Create Shallow copy of 'arr'
const arrShallowCopy = [...arr];

// Create Deep copy of 'obj;
const objDeepCopy = JSON.parse(JSON.stringify(obj));
// Create Deep copy of 'obj;
const arrDeepCopy = JSON.parse(JSON.stringify(arr));

// Change 'obj', respectively 'arr'
obj.address.zip = 1000;

// Output the inspected 'property' of the Shallow copies
console.log('Shallow copies:');
console.log(objShallowCopy.address.zip);        // 1000
console.log(arrShallowCopy[2].address.zip);     // 1000

// Output the inspected 'property' of the Deep copies
console.log('Deep copies:');
console.log(objDeepCopy.address.zip);        // 1715
console.log(arrDeepCopy[2].address.zip);     // 1715