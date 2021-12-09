const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}

// function paintGreetings(username) {
//   greeting.classList.remove(HIDDEN_CLASSNAME);
//   greeting.innerText = `Hello ${username}`;
// }

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
  // paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  // paintGreetings(savedUsername);
}