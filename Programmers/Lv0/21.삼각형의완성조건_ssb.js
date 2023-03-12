function solution(arr) {
  const sort = arr.sort((a, b) => a - b);
  return sort[0] + sort[1] > sort[2] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
