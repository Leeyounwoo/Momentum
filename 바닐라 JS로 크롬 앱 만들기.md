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



