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
function userValidation(userId, userPw) {
  if (userId.value === user.id && userPw.value === user.pw) {
    window.location.href = "welcome.html";
  } else if (userId.value !== user.id || userPw.value !== user.pw) {
    alert("아이디 혹은 비밀번호가 일치하지 않습니다!");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userValidation(emailInput, pwInput);
});

/* 진혁님 코드 */
const $emailInput = document.querySelector("#userEmail");
const $passwordInput = document.querySelector("#userPassword");
const $loginBtn = document.querySelector(".btn-login");

let emailCheckPass = false;
let pwCheckPass = false;

function handleEmailCheck() {
  const value = this.value;

  if (emailReg(value)) {
    this.classList.remove("is--invalid");
    emailCheckPass = true;
  } else {
    this.classList.add("is--invalid");
    emailCheckPass = false;
  }
}

function handlePasswordCheck() {
  const value = this.value;

  if (pwReg(value)) {
    this.classList.remove("is--invalid");
    pwCheckPass = true;
  } else {
    this.classList.add("is--invalid");
    pwCheckPass = false;
  }
}

function handleLogin(e) {
  e.preventDefault();

  if (emailCheckPass && pwCheckPass) {
    try {
      const id = $emailInput.value;
      const pw = $passwordInput.value;

      const getUserId = user.id;
      const getUserPw = user.pw;

      if (id === getUserId && pw === getUserPw) {
        location.href = "welcome.html";
      }
    } catch {
      // 통신 했는데 아이디 없다, 서버가 뻗었다 등등 에러 처리
    }
  }
}

$emailInput.addEventListener("input", handleEmailCheck);
$passwordInput.addEventListener("input", handlePasswordCheck);
$loginBtn.addEventListener("click", handleLogin);
