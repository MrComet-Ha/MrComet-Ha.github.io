const USERNAME_KEY = "username"
const HIDDEN_WORD = "hidden"

const loginForm = document.querySelector("#login");
const inputName = document.querySelector("input");
const greetUser = document.querySelector("#greet");
const toDo = document.querySelector("#todolist")
const savedName = localStorage.getItem(USERNAME_KEY);


function greeting(){
    greetUser.innerText = `${localStorage.getItem(USERNAME_KEY)}, I'm glad to serve you.`
    greetUser.classList.remove(HIDDEN_WORD);
    toDo.classList.remove(HIDDEN_WORD);
}

function handleLogin(evt){
    evt.preventDefault();
    const username = inputName.value;
    loginForm.classList.add(HIDDEN_WORD);
    localStorage.setItem(USERNAME_KEY, username);
    greeting();
}

if (savedName === null){
    loginForm.classList.remove(HIDDEN_WORD);
    toDo.classList.add(HIDDEN_WORD);
    loginForm.addEventListener("submit", handleLogin);
}
else{
    greeting();
}