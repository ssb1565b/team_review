// function solution(numbers) {
//   const fisrtNum = Math.max(...numbers);
//   const filter = numbers.filter((el) => {
//     return el !== fisrtNum;
//   });
//   const secondNum = Math.max(...filter);
//   return fisrtNum * secondNum;
// }
// 이건 안됨! 왜냐면 [] 배열 내에 최대값이 여러개 있는 경우 최대값 전체가 다 제외되니까!

function solution(numbers) {
  let [fistNum, secondNum, ...etc] = numbers.sort((a, b) => b - a);
  return fistNum * secondNum;
}

console.log(solution([10, 10, 10, 2, 3, 0]));
