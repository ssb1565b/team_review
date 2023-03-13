// 1. map
const mapSolution = (arr) => arr.map((el) => el * 2);

// 2. reduce로 값 재정의
const reduceSolution = (arr) => arr.reduce((acc, cur) => [...acc, cur * 2], []);

console.log(mapSolution([1, 2, 3, 4, 5]));
console.log(reduceSolution([1, 2, 3, 4, 5]));
