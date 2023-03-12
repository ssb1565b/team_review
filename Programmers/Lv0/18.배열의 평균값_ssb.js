function soultion(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length;
}

console.log(soultion([2, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
