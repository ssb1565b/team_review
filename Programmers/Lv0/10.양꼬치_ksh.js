function solution(n, k) {
  let service = 0; // 음료수 서비스 몇 병인지 담을 service 변수 초기화
  service = Math.floor(n / 10); // 양꼬치 n인분을 10으로 나누고 소수점 버림으로 음료수 서비스 몇 병인지 service 변수에 저장
  return n * 12000 + (k - service) * 2000; // (양꼬치n인분 * 12000원) + ((마신음료수갯수 - 서비스갯수) * 2000원)
}

console.log(solution(10, 3));
console.log(solution(64, 6));
