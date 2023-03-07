function solution(my_string) {
  return [...my_string].reverse().join("");
  // === my_string.split("").reverse().join("");
}

console.log(solution("hello"));
