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

nav.addEventListener("click", handleClick);

/* ---------------------------------- 범쌤 코드 --------------------------------- */
// const nav = document.querySelector("nav");
// const navList = [...document.querySelectorAll("nav li")];
// const visual = document.querySelector(".visual img");
// const nickName = document.querySelector(".nickName");

// function setChangeName(target, index) {
//   gsap.fromTo(target, { autoAlpha: 0, x: -30 }, { autoAlpha: 1, x: 0 });
//   // target.textContent = data[index-1].name;
// }

// function setChangeImage(target, index) {
//   if (!target.src) return;
//   gsap.fromTo(target, { autoAlpha: 0, x: 30 }, { autoAlpha: 1, x: 0 });
//   // target.src = `./assets/${data[index-1].name.toLowerCase()}.jpeg`
// }

// function setChangeBgColor({ target, colorA, colorB }) {
//   // if(typeof target === 'string') target = document.querySelector(target);
//   // target.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]},${data[index-1].color[1]})`;
//   gsap.to(target, {
//     backgroundImage: `linear-gradient(to bottom, ${colorA}, ${colorB})`,
//     duration: 1,
//   });

//   if (!colorB) {
//     target.style.background = colorA;
//     return;
//   }
//   target.style.backgroundImage = `linear-gradient(to bottom, ${colorA},${colorB})`;
// }

// const audioList = [
//   new AudioPlayer(`./assets/audio/ember.m4a`),
//   new AudioPlayer(`./assets/audio/wade.m4a`),
//   new AudioPlayer(`./assets/audio/clod.m4a`),
//   new AudioPlayer(`./assets/audio/gale.m4a`),
// ];

// function audio(arr, index) {
//   arr.forEach((audio) => audio.stop());

//   const target = arr[index - 1];

//   if (index === "2" || index === "4") {
//     target.volume = 0.3;
//   }

//   target.play();
// }

// function handleNav(e) {
//   const target = e.target.closest("li");

//   if (!target) return;

//   const index = e.target.closest("li").dataset.index;
//   const dataIndex = data[index - 1];

//   audio(audioList, index);

//   // if(audio.isPlaying()){

//   //   audio.pause()
//   // }

//   setChangeName(nickName, index);
//   setChangeImage(visual, index);
//   setChangeBgColor({
//     target: "body",
//     colorA: dataIndex.color[0],
//     colorB: dataIndex.color[1],
//   });

//   // document.body.style.background = `linear-gradient(to bottom, ${dataIndex.color[0]} , ${dataIndex.color[1]})`

//   navList.forEach((li) => li.classList.remove("is-active"));

//   target.classList.add("is-active");
// }

// nav.addEventListener("click", handleNav);
