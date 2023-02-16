const tableEl = document.querySelector("table");
const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");

let targetTdEl;
const emptyMessage = "내용을 입력하세요";
function addList(e) {
  // Node 클릭 이벤트 발생 시 날짜 input 값에 값 할당
  switch (e.target.tagName) {
    case "P":
      targetTdEl = e.target.parentNode;
      break;
    case "TD":
      targetTdEl = e.target;
      break;
    case "DIV":
      e.target.remove();
      break;
    default:
      return;
  }
  console.log(e.target);
  // 빈칸 선택 여부 확인 및 선택값이 숫자인지 확인
  if (
    e.target.textContent.trim() !== "" &&
    // !isNaN(e.target.textContent.trim())
    /[0-9]/.test(e.target.textContent)
  ) {
    // 날짜 input의 값 규칙 설정
    dateEl.setAttribute(
      "value",
      `2023/02/${
        (e.target.innerText.length < 2 ? "0" : "") + e.target.innerText
        // 출력값 2023/02/10. 단, day가 1자리수일경우 앞에 0붙이기 ex) 2023/02/01
      }`
    );
    return;
  }
}

function writeSchedule() {
  // input 값 공백의 경우 placeholder 처리
  if (!dateEl.value && !contentEl.value) {
    dateEl.setAttribute("placeholder", emptyMessage);
    contentEl.setAttribute("placeholder", emptyMessage);
  } else if (!dateEl.value) {
    dateEl.setAttribute("placeholder", emptyMessage);
  } else if (!contentEl.value) {
    contentEl.setAttribute("placeholder", emptyMessage);
  }
  const divEl = document.createElement("div");
  divEl.append(contentEl.value);
  targetTdEl.innerText !== "" && targetTdEl.append(divEl);

  contentEl.value = "";
}

tableEl.addEventListener("click", addList);
