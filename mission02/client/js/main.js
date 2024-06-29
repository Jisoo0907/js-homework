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
const h1 = document.querySelector("h1");

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");

  if (!target) return;

  const index = target.dataset.index;
  const children = document.querySelectorAll(".nav li");

  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]}`;

  h1.textContent = `${data[index - 1].name}`;

  visualImg.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImg.alt = data[index - 1].alt;

  children.forEach((li) => {
    li.classList.remove("is-active");
  });

  target.classList.add("is-active");
}

nav.addEventListener("click", handleClick);
