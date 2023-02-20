// 출처 : https://velog.io/@jinjinhyojin/JavaScript-%EC%97%B0%EC%8A%B5-%EB%AC%B8%EC%A0%9C

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.

const arr = [20, 200, 23, 1, 3, 9];
for (let minNum of arr) {
  Math.min(minNum);
}
