const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDo();
}

function doneToDo(event){
    const li = event.target.parentElement;
    const checkbox = li.querySelector("checkbox");
    if (li.classList.contains("yet")){
        li.classList.remove("yet");
        li.classList.add("finished");
    }
    else{
        li.classList.remove("finished");
        li.classList.add("yet");
    }
    toDos = toDos.map(todo => todo.id === parseInt(li.id) ? {...todo, isdone : li.className} : todo);
    saveToDo();
}

function paintToDo(newToDo){
    const checkbox = document.createElement("input")
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    checkbox.type = "checkbox"
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    checkbox.id = "checkbox";
    checkbox.addEventListener("click",doneToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    li.classList.add(newToDo.isdone);
    li.id = newToDo.id;
    span.innerText = newToDo.todo;
    if(li.classList.contains("finished")){
        checkbox.checked = true;
    }
    else{
        checkbox.checked = false;
    }
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = {
        todo: toDoInput.value,
        isdone: "yet",
        id: Date.now()
    }
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function loadToDos(item){
    paintToDo(item);
}
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}