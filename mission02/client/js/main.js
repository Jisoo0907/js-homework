/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const nav = document.querySelector(".nav");
const visualImg = document.querySelector(".visual img");
const body = document.body;

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");

  if (!target) return;

  const h1 = document.querySelector("h1");
  const index = target.dataset.index;
  const children = document.querySelectorAll(".nav li");

  setBgColor(body, index);
  setImage(visualImg, index);
  setNameText(h1, index);

  children.forEach((li) => {
    li.classList.remove("is-active");
  });
  target.classList.add("is-active");
}

/* 배경 색상 변경 */
function setBgColor(target, index) {
  target.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]}`;
}

/* 이미지 변경 */
function setImage(image, index) {
  image.src = `./assets/${data[index - 1].name}.jpeg`;
  image.alt = data[index - 1].alt;
}

/* 이름 변경 */
function setNameText(target, index) {
  target.textContent = `${data[index - 1].name}`;
}

nav.addEventListener("click", handleClick);
