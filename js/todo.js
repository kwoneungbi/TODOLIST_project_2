window.onload = () => {
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = document.querySelector("#todo-form input");
  const toDoList = document.getElementById("todoList");

  //   const TODOS_KEY = "todos";

  let toDos = [];

  function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.stringify(toDos)을 통해서 localStorage에 스트링으로 저장되어 array로 볼수있게 만들어줘야 중복이 가능해짐
    // saveTodos 함수의 역할은 toDos array의 내용을 localStorage에 넣는다.
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
  }

  function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    //   console.log(newTodo, toDoInput.value);
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);

  const savedToDos = localStorage.getItem("todos");

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
};
