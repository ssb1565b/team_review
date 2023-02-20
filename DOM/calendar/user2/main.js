const input = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector(".ul");

let targetEl; // 이벤트 target 을 저장할 전역 변수

// 2. addListTask 함수 구현
function addListTask(e) {
  // 3. 내용 입력 안하면 placeholder 문구 띄우기
  if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력해주세욧");
    return;
  }

  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  checkBox.setAttribute("type", "checkbox");
  deleteBtn.textContent = "삭제";

  // 4. checkbox 클릭하면 line-through 주기
  checkBox.addEventListener("click", function () {
    checkBox.checked ? (checkBox.parentNode.style.textDecoration = "line-through") : (checkBox.parentNode.style.textDecoration = "none");
  });

  // 5. 삭제 버튼 누르면 li 삭제
  deleteBtn.addEventListener("click", function (e) {
    targetEl = e.target;
    targetEl.parentNode.remove(); // button의 부모인 li 삭제
  });

  // 6. li 리스트 추가
  li.append(checkBox, " ", input.value, "  ", deleteBtn);
  ul.append(li);

  // 7. 추가 후 input 에 입력한 값 없어지게
  input.value = "";
}

// 1. '추가' 버튼 누르면 addListTask 함수 실행
addBtn.addEventListener("click", addListTask);
