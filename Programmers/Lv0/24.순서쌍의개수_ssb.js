const solution = (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      ++sum;
    }
  }
  return sum + 1;
};

console.log(solution(20));
