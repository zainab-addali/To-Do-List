const inputTask=document.getElementById("input-task");
const addTaskButton=document.getElementById("add-task-icon");
const newTaskContainer=document.getElementById("new-task-container");

addTaskButton.addEventListener("click", function(){

    let newTask=document.createElement("div");
    newTask.classList.add("new-task");

    let li=document.createElement("li");
    li.innerText=inputTask.value;
    newTask.appendChild(li);
    
    let checkButton=document.createElement("button");
    checkButton.innerHTML=`<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add("check-task");
    newTask.appendChild(checkButton);

    let deleteButton=document.createElement("button");
    deleteButton.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("delete-task");
    newTask.appendChild(deleteButton);

    if(inputTask.value===""){
        alert("please Enter A Task");
    }
    else{
        newTaskContainer.appendChild(newTask);
    }
    inputTask.value="";

    checkButton.addEventListener("click", function(){
        checkButton.parentElement.style.textDecoration="line-through";
        checkButton.parentElement.style.color="green";
    });

    deleteButton.addEventListener("click", function(e){
        
        e.target.parentElement.parentElement.remove();
        
    })



});