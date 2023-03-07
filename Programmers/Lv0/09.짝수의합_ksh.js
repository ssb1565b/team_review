// 입력값
let n1 = 10;
let n2 = 4;

function solution(n) {
  let sum = 0;

  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) sum += i;
  }

  return sum;
}

console.log(solution(n1));
console.log(solution(n2));
