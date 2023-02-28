// 배열의 평균 구하기

// 1. for문 사용
function forSolution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 2. reduce 사용
function reduceSolution(arr) {
  return (
    arr.reduce((acc, el) => {
      return (acc += el);
    }, 0) / arr.length
  );
}

console.log(forSolution([1, 2, 3, 4]));
console.log(reduceSolution([4, 5, 6, 7]));
