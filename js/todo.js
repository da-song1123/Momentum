const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = document.querySelector("#todo-form input") 
//toDoForm.querySelector("input")
// document.querySelector("#todo-form input")

const TODOS_KEY = "todos"

let todos = []

function saveTodos (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo (event){
    const li = event.target.parentElement
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodos()
}


function paintTodo(newTodo){
    const li = document.createElement("li.list-group-item")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button.btn")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}


function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo = toDoInput.value
    console.log(toDoInput.value)
    toDoInput.value = ""
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item){
//     console.log("this is the turn of ", item )
// }

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    // parsedTodos.forEach(sayHello);
    // 함수를 따로 만들지 않고 쓰는 방법
    parsedTodos.forEach(paintTodo)
}
