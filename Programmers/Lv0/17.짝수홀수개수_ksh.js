function solution(num_list) {
  const answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? answer[0]++ : answer[1]++;
  }
  return answer;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7];
console.log(solution(arr1));
console.log(solution(arr2));
