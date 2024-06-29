bㅠ# Mission-2 과제

---

### 요구 사항

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

---

#### 1. 이벤트 처리 방식 사용하여 클릭 이벤트 활성화

> 이벤트 위임
> 반복문

```javascript
const nav = document.querySelector(".nav");

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");

  if (!target) return;

  children.forEach((li) => {
    li.classList.remove("is-active");
  });
  target.classList.add("is-active");
}

nav.addEventListener("click", handleClick);
```

- nav 전체에 클릭 이벤트를 걸어준 후 클릭된 li 요소에 대한 처리
- forEach를 사용해 클릭된 li 요소에 'is-active' 클래스 제거/추가
  </br>

#### 2. 배경 색상 및 메인 비주얼 이미지 변경

```javascript
const visualImg = document.querySelector(".visual img");
const body = document.body;

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");

  if (!target) return;

  const index = target.dataset.index;
  const children = document.querySelectorAll(".nav li");

  setBgColor(body, index);
  setImage(visualImg, index);

  children.forEach((li) => {
    li.classList.remove("is-active");
  });
  target.classList.add("is-active");
}

/* 배경 색상 변경 */
function setBgColor(target, index) {
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1] || "#000";
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB}`;
}

/* 이미지 변경 */
function setImage(image, index) {
  image.src = `./assets/${data[index - 1].name}.jpeg`;
  image.alt = data[index - 1].alt;
}
```

- 배경 색상 변경과 이미지 변경을 함수로 작성
- data.js의 color 속성과 name 속성 활용

#### 3. 비주얼 변경 시 상단의 이름도 변경

```javascript
const h1 = document.querySelector("h1");

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");

  if (!target) return;

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

/* 텍스트 변경 */
function setNameText(target, index) {
  target.textContent = `${data[index - 1].name}`;
}
```

- h1 태그 선택 후 해당 요소의 내용을 data의 name 속성에 해당하는 이름으로 변경

#### 4. 함수 분리

- 처음 코드 작성 시 하나의 함수에 넣음

```js
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
```

- 가독성, 재사용 측면에서 좋지 못함
- 각 기능들을 따로 하나의 함수로 분리함

```js
/* 배경 색상 변경 */
function setBgColor(target, index) {
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1] || "#000";
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB}`;
}

/* 이미지 변경 */
function setImage(image, index) {
  image.src = `./assets/${data[index - 1].name}.jpeg`;
  image.alt = data[index - 1].alt;
}

/* 텍스트 변경 */
function setNameText(target, index) {
  target.textContent = `${data[index - 1].name}`;
}
```

---

#### 결과 화면

![엘리멘탈](https://github.com/Jisoo0907/js-homework/assets/102653945/da11bae1-a5d1-41be-8080-0c16c7b5cd9a)
