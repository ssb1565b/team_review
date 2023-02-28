// 출처 : https://velog.io/@jinjinhyojin/JavaScript-%EC%97%B0%EC%8A%B5-%EB%AC%B8%EC%A0%9C

// 1. 날짜 출력 문제
// 1-1 년,월,일의 3개의 인자를 받고 하단 콘솔로그의 결과와 같이 출력하기

function meetAt(year = "", month = "", day = "") {
  return (year && year + "년") + (month && month + "월") + (day && day + "일");
}

console.log(meetAt(2022)); // 결과 --> "2022년"
console.log(meetAt(2032, 3)); // 결과 --> "2032년 3월"
console.log(meetAt(1987, 10, 28)); // 결과 -->  "1987년 10월 28일"

// 1-2. 위의 조건중, 년도,월,일 인자를 전부 받았을 경우에만 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴하기

function meetAtTwo(year, month, day) {
  return year && month && day
    ? `${year} / ${month} / ${day}`
    : (year && year + "년") + (month && month + "월");
}

console.log(meetAt(2022)); // 결과 --> "2022년"
console.log(meetAt(2032, 3)); // 결과 --> "2032년 3월"
console.log(meetAtTwo(1987, 10, 28)); // 결과 -->  "1987/10/28"
