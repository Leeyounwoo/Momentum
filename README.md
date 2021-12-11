# 바닐라 JS로 크롬 앱 만들기

## 1. WELCOME TO JAVASCRIPT

#### 1) const and let

- const는 상수 즉, 바뀌지 않을 변수
- let은 변수. 
- const를 기본으로 사용하고 나중에 업데이트를 할 변수는 let으로 선언





#### 2) Booleans

- booleans 타입: true, false
- null 타입: 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용(절대 자연적으로 발생 X)
- undefined: 변수가 존재하는데, 값이 주어지지 않은 상태





#### 3) Arrays

~~~javascript
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Add one more day to the array
daysOfWeek.push("sun");
~~~





#### 4) Objects

~~~javascript
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player["name"]);
console.log(player.name);

// update
player.fat = false;

// add
player.lastName = "potato";
~~~





#### 5) Functions

```javascript
function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + "and I'm " + age)
}

sayHello('Lee', 26)
```

```javascript
const player = {
    name: 'Lee',
    sayHello: function(otherPersonsName) {
        console.log('Hello ' + otherPersonsName + "nice to meet you!")
    },
};

player.sayHello("lynn");

```

> Homework

```javascript
const calulator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    powerOf: function(a, b){
        console.log(a ** b);
    }
};
```





#### 6) Conditionals

> typeof varName

~~~javascript
const age = prompt("How old are you?");

console.log(typeof age);
~~~

> parseInt("15")
>
> 만약, parseInt("aa") ==> NaN (Not a Number) 반환

~~~javascript
const age = parseInt(prompt("How old are you?"));

console.log(age);
~~~

> isNaN(varName) ==> NaN이면 true
>
> and 연산자 &&
>
> or 연산자 ||

~~~javascript
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age>= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80 {
    console.log("You should exercise");
} else {
    console.log("You can do whatever you want.");
}
~~~









## 2. JAVASCRIPT ON THE BROWSER

#### 1) The Document Object

- Javascript에서 HTML을 읽어오거나 변경할 수 있게 해주는 객체

- HTML과 JavaScript를 연결시켜줌

~~~javascript
document
~~~





#### 2) HTML in JavaScript

- HTML element를 JavaScript로 접근

```javascript
document.getElementById("title")
```





#### 3) Searching for Elements

- querySelector가 최고

```javascript
document.querySelectorAll(".hello h1")
document.querySelector("div.hello:first-child h1")
```





#### 4) Events

```javascript
const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick () {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
// title.addEventListener("click", handleTitleClick()) - X
```

- handleTitleClick() - X 
  - 그저 JavaScript에 function만을 넘겨주고 JavaScript가 우리 대신 실행시켜줌







#### 5) More Events

```javascript
h1.addEventListener("mouseenter", handleMouseEnter) 
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```





#### 6) CSS in JavaScript

```javascript
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  } else{
    newColor = "blue";
  }
  h1.style.color = newColor;  
}

h1.addEventListener("click", handleTitleClick);
```

- style을 JavaScript에서 변경할 수 있지만, CSS 에서 바꾸는 것이 더 나음

~~~css
.clicked {
  color: tomato;
}
~~~

~~~javascript
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
  // clicked를 바로 쓰는게 아니라 const 변수로 저장해서 사용
  const clickedClass = "clicked";
  if(h1.className === clickedClass){
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
~~~

- 변수를 적을 때 실수를 할 수도 있기 때문에 ==const 변수를 만들어서 원하는 클래스 이름을 저장==
- 현재 방법은 클래스 이름을 바꾸기 때문에 좋은 방법 아님(className 속성 이용했기 때문)

```javascript
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
```

- ==toggle 함수==
  - removing it if it's present and adding it if it's not present

```javascript
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
  // h1의 classList에 clickedClass가 있는지 확인해서 있으면 없애고 없으면 추가
  h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick);
```









## 3. LOGIN

#### 1) Input Values

- JavaScript에서 input 값 가져오기

```html
<div id="login-form">
  <input type="text" placeholder="What is your name?">
  <button>Log In</button>
</div>
```



```javascript
// document에서 id 이름으로 HTML element 가져오기
const loginForm = document.querySelector('#login-form')

// HTML element에서 태그이름으로 내부 HTML element 가져오기
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
```

```javascript
// document에서 id이름으로 찾고 그 안의 태그이름으로 찾기
const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("clcik", onLoginBtnClick);
```





#### 2) Form Submission

```javascript
function onLoginBtnClick() {
  const username = loginInput.value
  if (username === ""){
    alert("Please write your name.")
  } else if (username.length > 15){
    alert("Your name is Too long.")
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
```

- 위와 같이 JS로 유효성 검사를 해줄 수 있지만, 브라우저 자체의 기능을 사용할 수도 있음
  - HTML의 input 태그 자체에서 required와 maxlength 등의 속성을 제공함
  - 대신 ==input의 유효성 검사를 작동시키기 위해서는 input이 form 안에 있어야 함==

- 하지만, <span style="color:red">button을 클릭하거나 엔터를 누르면 form이 sumit 되면서 웹페이지 전체를 새로고침함.</span>
  - ==브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit 하도록 되어있음.==
- 우리가 하고 싶은건 페이지를 새로고침하지 않고 정보를 저장하는 것.





#### 3) ==Events==

- 이젠 loginForm 자체에서 submit 이벤트가 발생하는 것을 감지

```javascript
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", onLoginSubmit)
```

- addEventListener를 사용할 때 함수를 onLoginSubmit()으로 사용하지 않고 onLoginSubmit으로 사용
  - ==()를 추가==하는건 function을 =='즉시' 실행==한다는 뜻
  - **()을 작성하지 않으면 브라우저가 function을 실행시켜줌**
    1. onLoginSubmit 함수를 호출
    2. onLoginSubmit 함수의 첫 번째 인자로써 추가적인 정보(==방금 일어난 event에 대한 정보==)를 가진 채로 호출

```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit)
```

- ==event.preventDefault()==: 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작을 막아줌.





#### 4) Getting Username

- 입력 ==> form 안보이게, Hello {유저이름} 보이게

```html
<form id="login-form">
</form>
<h1 id="greeting" class="hidden"></h1>
```

```css
.hidden {
  display: none;
}
```

```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

// hidden이 2번 이상 사용되서 상수로 만들어줌
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;

  greeting.classList.remove(HIDDEN_CLASSNAME)
}


loginForm.addEventListener("submit", onLoginSubmit)

```

- ==\`Hello ${username}\`==
  - 문자열 안에서 변수 사용하기





#### 5) Saving Username

- 유저이름을 한 번 입력하면 브라우저가 그 값을 저장하기

```javascript
localStorage.setItem('username', username)
```

- localStorage

  - 브라우저에 뭔가 저장할 수 있게 해줌
  - 항목 추가 (localStorage.setItem('myCat', 'Tom');)
  - 항목 가져오기 (const cat = localStorage.getItem('myCat');)
  - 항목 제거하기 (localStorage.removeItem('myCat');)

  - https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage





#### 6) Loading Username

- 만약 localStorage에 username이 있다면 greeting, 없다면 form이 보이도록 한다

```javascript
// "username"이 여러번 쓰이므로 상수로 만들어준다.
// localStorage 에서 username을 가져온다.
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 여러번 실행되는 부분은 함수로 만든다
function paintGreeing(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

// 이름이 없으면 form 보여주고 eventListener 추가
// 없으면 greeting 보여주기
if (savedUsename === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}
```







## 5. CLOCK

#### 1) Intervals

- Interval: '매번' 일어나야 하는 무언가

  ex) 매 2초마다 무슨 일이 일어나게 하고 싶을 때 사용

- ==setInterval(funciontName, 1000);==

```javascript
function sayHello() {
    console.log("Hello");
}

// 첫 번째 인자: 실행하고자 하는 function
// 두 번째 인자: 호출되는 function 간격을 몇 ms으로 할지
setInterval(sayHello, 5000);
```





#### 2) Timeouts and Dates

- setTimeout(functionName, 1000);
  - 1초 뒤에 functionName을 호출

- Date객체

  ```javascript
  const date = new Date()
  
  date.getHours()
  date.getMinutes()
  date.getSeconds()
  ```

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// setInterval은 1초를 기다렸다가 실행되기 때문에
// getClock()을 먼저 한 번 실행
getClock()
setInterval(getClock, 1000);
```





#### 3) PadStart

- padStart(2, '0')
  - String에 쓸 수 있는 함수
  - 첫 번째 인자: 원하는 최소 문자 길이
  - 두 번째 인자: __앞에__ 추가할 문자
- padEnd(2, '0')
  - 두 번째 인자: __뒤에__ 추가할 문자

```javascript
const data = new Data();

const hours = String(data.getHours()).padStart(2, '0');
// const hours = data.getHours().toString().padStart(2, '0');
```









## QUOTES AND BACKGROUND

#### 1) Quotes

- Math.random(): 0부터 1 사이의 랜덤한 숫자를 제공

  ==> 0 ~ <span style="color:red;">9</span>까지의 숫자 

  ```javascript
  Math.random() * 10
  ```

- Math.round(): 반올림

- Math.ceil(): 올림

- Math.floor(): 내림

```html
<div id="quote">
  <span></span>
  <span></span>
</div>
```

```javascript
const quote = document.querySelector("#quote span:first-child");
const author = document.qurySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
```





#### 2) Background

- JavaScript에서 HTML 요소 만들고 추가하기
  - document.createElement("tagName")으로 요소 만들기
  - document.body.appendChild() 로 HTML에 추가
    - appendChild(): 가장 뒤에 추가
    - prepend(): 가장 앞에 추가

```javascript
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`

document.body.appendChild(bgImg);
```









## 7. TO DO LIST

#### 1) Deleting To Dos

- 버튼을 만들면서 EventListener를 추가한다.

  ```javascript
  function deleteToDO(event) {
      const deleteToDoItem = event.target.parentNode;
      deleteToDoItem.remove()
  }
  ```





#### 2) Saving To Dos

- todos를 localStorage에 저장

  - 하지만, localStorage는 문자열만 저장 가능
  - Array를 문자열로 변환(<span style="color:red;">JSON.stringify()</span>)

  ```javascript
  const todos = [];
  function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDOs));
  }
  ```

  

#### 3) Loading To Dos

- localStorage에 있는 todos를 가져오기

  - 문자열을 Array로 바꾸기 (<span style="color:red;">JSON.parse()</span>)

  - Array에 있는 각각의 item에 대해서 function을 실행하고 싶음 (<span style="color:red">.forEach()</span>)
    ```javascript
    array.forEach(element => {
        console.log("Hello", element);
    })
    ```

  - 페이지가 새로고침될 때마다 toDos 배열이 초기화 되는 문제

    ```javascript
    let toDos = []
    
    const savedToDos = localStorage.getItem(TODOS_KEY);
    
    if (savedToDos) {
      const parsedToDos = JSON.parse(savedToDos);
      toDo = parsedToDos;
      parsedToDos.forEach(paintToDO);
    }
    ```

    



#### 4) Deleting To Dos

- toDos의 자료구조를 바꿔서 어떤 element를 삭제하는지 찾자

  ```javascript
  const newToDoObj = {
    text: newTodo,
    id: Date.now()
  };
  ```

- li를 저장할 때 id 값을 newToDoObj의 id로 사용

  ```javascript
  function paintToDo(newTodoObj) {
    const toDoItem = document.createElement("li");
    toDoItem.id = newTodoObj.id;
    const content = document.createElement("span");
    content.innerText = newTodoObj.text;
  }
  ```

- filter함수를 적용해서 새로운 toDos를 만들어서 localStorage에 저장

  ```javascript
  function deleteToDo(event) {
    const deleteToDoItem = event.target.parentNode;
    deleteToDoItem.remove()
    toDos = toDos.filter(todo => todo.id !== parseInt(deleteToDoItem.id));
    saveToDos()
  }
  ```

  
