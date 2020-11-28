const concat = ( arr1, arr2) => [...arr1, ...arr2];

function concatMulti(...args) {
    return args.reduce((acc, arr) => [...acc, ...arr], []);
}

const comida = [ "🍕", "🍔", "🍛", "🍜"];
const transporte = ["🚲", "🚌", "🚂", "✈"];
const items = ["🛡", "🏹", "🗡", "⚔"];

const comidaTransporte = concat(comida, transporte);
const comidaTransporteItems = concatMulti(comida, transporte, items);

console.log(`


EJERCICIO 2
Arrays iniciales:`);
console.table({comida, transporte, items});
console.log("concat(comida, transporte)");
console.table({comidaTransporte});
console.log("concatMulti(comida, transporte, items)");
console.table({comidaTransporteItems})
