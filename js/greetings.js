// const loginForm = document.getElementById("login-form")
// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
// const link = document.querySelector("a")
function onLoginSubmit(event) {
    // preventDefault() : 브라우저의 기본 동작을 막아준다
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // console.log(username)

    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings()
    // const username = loginInput.value;
    // console.log(username)
    // if (username === "") {
    //     alert("Please write your name")
    // } else if (username.length > 15) {
    //     alert("Your name is too long.")
    // }
    // console.dir("Hello", loginInput.value)
    // console.log("click!!")
}
// loginButton.addEventListener("click", handleBtnClick)

// function handleLinkClick(event){
//     event.preventDefault();
//     // console.dir(event)
//     // alert("click!")
// }
// link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY)
console.log(savedUsername)

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    paintGreetings()

}