// 1.filter 방식
function solution(num_list) {
  const even = num_list.filter((el) => el % 2 === 0);
  const odd = num_list.filter((el) => el % 2 === 1);
  return [even.length, odd.length];
}

// 2. reduce 방식
function solution(num_list) {
  return num_list.reduce(
    ([even, odd], cur) => {
      return [cur % 2 === 0 ? even + 1 : even, cur % 2 === 1 ? odd + 1 : odd];
    },
    [0, 0]
  );
}

console.log(solution([1, 2, 3, 4, 5]));
