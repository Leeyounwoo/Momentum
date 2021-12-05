# 바닐라 JS로 크롬 앱 만들기

## 1. Welcome to Javascript

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









## 2. JavaScript on the Browser

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

