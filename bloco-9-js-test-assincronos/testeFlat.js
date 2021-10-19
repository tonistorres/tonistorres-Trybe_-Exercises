const arr1 = [0, 1, 2, [3, 4, [2, 4]]];

const arr2 = arr1.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr);
  return acc.concat(curr);
}, []);
const arr3 = arr2.reduce((acc, curr) => acc.concat(curr), []);

const arr4 = arr1.map((item) => {
  if (Number(item * 2).toString() === 'NaN') return item;
  return item * 2;
}).flat(2);

arr3.forEach(element => {
  console.log(typeof element);
});

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);