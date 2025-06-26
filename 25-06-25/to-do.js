var taskInput=document.getElementById("taskInput")
var addTaskButton=document.getElementById("addTaskButton")
 var taskList=document.getElementById("tasks-list");


taskInput.addEventListener("keypress", pressEnter);

function pressEnter(event)
{
    if(event.key==="Enter")
    {
        event.preventDefault();
        addTaskButton.click()

    }
}
function addTask() {
    var test=taskInput.value.trim();
    if(test=="")
    {
        alert("Please enter a task");
        return;
    }

   
    var taskItem=document.createElement('li');
    var textSpan=document.createElement('span');
    textSpan.textContent=test;
    var deleteButton=document.createElement('button');
    deleteButton.textContent="Delete"

    taskList.appendChild(taskItem);
    taskItem.appendChild(textSpan)
    taskItem.appendChild(deleteButton);
   
    textSpan.addEventListener("click",upperLine)
    deleteButton.addEventListener("click",deleteItem)
   

}

function upperLine(event)
{
    event.target.style.textDecoration="line-through"
}
function deleteItem(event)
{
    event.target.parentElement.remove();
}
addTaskButton.addEventListener("click", addTask)