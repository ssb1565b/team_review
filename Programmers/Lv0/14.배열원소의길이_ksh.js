function solution(strlist) {
  const answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

const strlist = ["We", "are", "the", "world!"];
const strlist2 = ["I", "Love", "Programmers."];
console.log(solution(strlist));
console.log(solution(strlist2));
