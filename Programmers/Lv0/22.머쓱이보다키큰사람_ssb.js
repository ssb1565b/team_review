function solution(arr, height) {
  return arr.filter((el) => el > height).length;
}
