// 1. filter,includes
function solution(s1, s2) {
  const sameEl = s1.filter((el) => s2.includes(el));
  return sameEl.length;
}

// 2. for문 사용
function solution(s1, s2) {
  let count = 0;
  for (let i of s1) if (s2.includes(i)) count++;
  // i안에 s1 원소 담김 of는 배열의 값을 가져올떄 사용하기 좋다!
  return count;
}

console.log(solution(["a", "b", "co"], ["com", "b", "d", "p", "c"]));
