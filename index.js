let todoIndex = 1;

function addTodo(){
    const element = document.getElementById("todoInput");
    const todo = element.value    
    element.value=""


    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","todo"+todoIndex);
    // newDiv.innerHTML = todo

    const newSpan = document.createElement("span");
    newSpan.innerHTML = todo;

    newDiv.appendChild(newSpan)

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "Delete todo"
    todoButton.setAttribute("onclick","deleteTodo("+todoIndex+")");

    newDiv.appendChild(todoButton);

    document.getElementById("todos").appendChild(newDiv);

    // const parentDiv = document.getElementById("todos");
    // parentDiv.appendChild(newDiv);

    todoIndex +=1
}

function deleteTodo(index){
    // alert("delet called with todo index "+index);

    const divElement = document.getElementById("todo"+index)
    divElement.parentElement.removeChild(divElement);
}

