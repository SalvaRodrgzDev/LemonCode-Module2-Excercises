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

let object1 = { 
    name: "Asd",
    lastname: "QWE",
    coords: {
        x: 0.23415235,
        y: 1.35464567
    }
}

let object2 = deepClone(object1);

console.log(object1.coords, object2);

object1.coords.x = 88;

console.log(object1.coords, object2);


const a = {name: 'Maria', surname: 'Ibañez', country: 'SPA', }
const b = {name: 'Luisa', age: 31, married: true};

console.log(merge(a, b));