const concat = ( arr1, arr2) => [...arr1, ...arr2];

function concatMulti() {
    return [...arguments].reduce((acc, arr) => [...acc, ...arr], []);
}