function solution(numbers) {
  const fisrtNum = Math.max(...numbers);
  const filter = numbers.filter((el) => {
    return el !== fisrtNum;
  });
  const secondNum = Math.max(...filter);

  return fisrtNum * secondNum;
}

console.log(solution([10, 2, 3, 0]));
solution([10, 2, 3, 0]);
