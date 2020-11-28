function clone(source) {

    return {...source};
}

function deepClone(source) {

    let sourceCopy = Array.isArray(source) ? [] : {};

    if (typeof source === 'object' && source !== null) {
        
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const objectProperty = source[key];
                
                sourceCopy[key] = deepClone(objectProperty);
            }
        }

        return sourceCopy;
    }

    return source;
}

function merge(target, source) {
    return Object.assign(source, target);
    // return {...source, ...target};
}

let jon = { 
    name: "Jon",
    lastname: "Doe",
    direccion: {
        calle: "Pintor Sorolla",
        cp: 29603,
        numero: 31
    }
}

let jane = {
    name: "Jane",
    lastname: "Doe",
    direccion: {
        calle: "Pintor Sorolla",
        cp: 29603,
        numero: 31
    }
}

let clonJon = clone(jon);
clonJon.direccion.numero = 33;

let clonJane = deepClone(jane);
clonJane.direccion.numero = 33;

const a = {name: 'Maria', surname: 'Ibañez', country: 'SPA', }
const b = {name: 'Luisa', age: 31, married: true};

console.log(`


EJERCICIO 3
Jon clonado y modificado:`);

console.table(jon);
console.table(clonJon);

console.log("Jane clonado profundo y modificada:");
console.table(jane);
console.table(clonJane);

console.log("Merge María y Luisa:");
console.log(merge(a, b));