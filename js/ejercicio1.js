const head = ( [first] = arr) => first;

const tail = ( [first, ...tail] ) => tail;

const Init = arr => arr.slice(0, -1);

const last = arr => arr[arr.length - 1]

const arr = [1,2,3,4,5,6]

let lastElement = last(arr);

lastElement = 67;

console.log(arr, lastElement);