// 1. 1 부터 100 까지의 숫자가 들어 있는 배열을 for 문으로 만들기

let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

// 2. 배열의 합산 구하기
// 2-1. for 문으로 해당 배열의 합산 구하기
let forSum = 0;
for (let sumNums of arr) {
  forSum += sumNums;
}
console.log(forSum);

// 2-2. Map 메소드를 이용하여 해당 배열의 합산을 구하기!
let mapSum = 0;
const useMap = arr.map((el) => {
  return (mapSum += el);
});
console.log("useMap", mapSum);

// 2-3. reduce 메소드를 이용하여 해당 배열의 합산을 구하기!
const useReduce = arr.reduce((acc, el) => {
  return (acc += el);
}, 0);
console.log("useReduce", useReduce);
