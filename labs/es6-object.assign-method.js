const obj1 = {
    name: 'A',
    id: 1
};

const obj2 = {
    name: 'B',
    length: 15
};

const obj3 = {};

Object.assign(obj3, obj1, obj2);
console.log(obj3);  // {name: 'B', id: 1, length: 15}

const obj4 = Object.assign({}, obj3, obj1);
console.log(obj4);  // {name: 'A', id: 1, length: 15}
