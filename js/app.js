const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string을 작성하다가 오타가 나면 js는 오류를 보여주지 않는다. string을 반복적으로 사용하게 되면 변수에 담아서 사용하는 것이 좋다.

const onLoginClick = (event) => {
  // console.log(loginInput.value);
  // console.dir(loginInput);

  /* username 입력하는 갓의 유효성을 if를 이용해서 확인하는 방법 
   const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    alert("your name is too long.");
  }
  */

  event.preventDefault();
  // preventDefault() 를 통해서 submit할때 브라우저가 새로고침되지 않도록 event룰 컨트롤 해주는것이다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

// loginForm.addEventListener("submit", onLoginClick);

/* form submit 은 엔터나 submit을 할때 브라우저가 새로고침됨
loginButton.addEventListener("click", onLoginClick);
*/

const paintGreetings = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginClick);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
