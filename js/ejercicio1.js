const Ejercicio1 = (() => ({
        head: ( [first] = arr) => first,

        tail: ( [, ...tail] ) => tail,

        init: arr => arr.slice(0, -1),

        last: arr => arr[arr.length - 1],
}))();

const arr = [1,2,3,4,5,6]

const head = Ejercicio1.head(arr);

const tail = Ejercicio1.tail(arr);

const init = Ejercicio1.init(arr);

const last = Ejercicio1.last(arr);

console.log(`EJERCICIO 1
Array original: `);
console.table({arr});
console.log("head = ", head);
console.log("last = ", last);
console.table( {tail, init});