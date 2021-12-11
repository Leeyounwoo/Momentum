const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteToDoItem = event.target.parentNode;
  deleteToDoItem.remove()
  toDos = toDos.filter(todo => todo.id !== parseInt(deleteToDoItem.id))
  saveToDos()
}

function paintToDo(newTodoObj) {
  const toDoItem = document.createElement("li");
  toDoItem.id = newTodoObj.id;
  const content = document.createElement("span");
  content.innerText = newTodoObj.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo)
  toDoItem.appendChild(content);
  toDoItem.appendChild(deleteButton);
  toDoList.appendChild(toDoItem);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos()
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos)

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 새로 페이지가 만들어질 때마다 배열이 초기화되는 문제 해결
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
}