const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [0, 31, 24, 10, 1, 9];

function solution(numbers) {
  numbers.sort((a, b) => b - a); // 내림차순 정렬
  return numbers[0] * numbers[1]; // 가장 큰 수 2개 곱하기기
}

console.log(solution(numbers1));
console.log(solution(numbers2));
