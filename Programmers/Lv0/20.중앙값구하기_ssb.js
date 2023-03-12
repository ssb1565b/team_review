const solution = (arr) => {
  const sort = arr.sort((a, b) => a - b);
  return sort[Math.floor(sort.length / 2)];
};

console.log(solution([9, -1, 0]));
