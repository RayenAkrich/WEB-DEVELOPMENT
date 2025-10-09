const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr = [...arr1, ...arr2];

const objCopy = [...arr];
objCopy[1] = 99;
console.log(arr, objCopy);