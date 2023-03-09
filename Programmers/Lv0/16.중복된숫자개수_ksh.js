function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) answer++;
  }
  return answer;
}

const arr1 = [1, 1, 2, 3, 4, 5];
const arr2 = [0, 2, 3, 4];
console.log(solution(arr1, 1));
console.log(solution(arr2, 1));
