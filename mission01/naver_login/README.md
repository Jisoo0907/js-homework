# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

### 과제 요구 사항

1. email 정규 표현식을 사용한 조건 처리
2. pw 정규 표현식을 사용한 validation

```javascript
//   - false면 해당 input에 is--invalid 추가
node.classList.remove("is--invalid");
//  - true면 해당 input에 is--invalid 제거
node.classList.add("is--invalid");
```

##### 작성한 코드

```javascript
emailInput.addEventListener("input", () => {
  if (emailReg(emailInput.value)) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
});

pwInput.addEventListener("input", () => {
  if (pwReg(pwInput).value) {
    pwInput.classList.remove("is--invalid");
  } else {
    pwInput.classList.add("is--invalid");
  }
});
```

##### 결과

![로그인과제](https://github.com/Jisoo0907/js-homework/assets/102653945/991dda00-6d1e-4eb6-9cc6-9450be5f931b)

3. 로그인 버튼 클릭 -> user.id/user.pw와 input 값 비교
4. 두 값이 일치 -> welcome.html로 이동

```javascript
value === user.id;
value === user.pw;

window.location.href = "welcome.html";
```

##### 작성한 코드

```javascript
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
```

#### 문제점

- 로그인 버튼 클릭 시 HTTP ERROR 405가 뜸

##### 시도해 본 것

- 아이디와 비밀번호 검증하는 코드를 함수로 만듦
- preventDefault()를 추가함
- 로그인 버튼에 이벤트 리스너 추가했던 것을 form에 추가하는 것으로 변경함

##### 하지 못한 것

- 상태 변수 관리
