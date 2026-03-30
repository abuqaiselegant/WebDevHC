
let todoIndex = 1;
function addTodo(){
    const element = document.getElementById("todoInput");
    const todo = elelment.value;
    element.value = "";

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","todo"+todoIndex);
   
    
}