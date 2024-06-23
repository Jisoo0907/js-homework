const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const form = document.querySelector("form");
const emailInput = document.querySelector(".user-email-input");
const pwInput = document.querySelector(".user-password-input");
const loginButton = document.querySelector(".btn-login");

/* 1 */
emailInput.addEventListener("input", () => {
  if (emailReg(emailInput.value)) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
});
/* 2 */
pwInput.addEventListener("input", () => {
  if (pwReg(pwInput.value)) {
    pwInput.classList.remove("is--invalid");
  } else {
    pwInput.classList.add("is--invalid");
  }
});

/* 3, 4, 5 */
loginButton.addEventListener("submit", () => {
  if (emailInput.value !== "" && pwInput.value !== "") {
    if (emailInput.value !== user.id) {
      alert("아이디가 일치하지 않습니다!");
    } else if (pwInput.value !== user.pw) {
      alert("비밀번호가 일치하지 않습니다!");
    } else if (emailInput.value === user.id && pwInput.value === user.pw) {
      window.location.href = "welcome.html";
    }
  } else {
    alert("아이디와 비밀번호를 입력하세요!");
  }
});
