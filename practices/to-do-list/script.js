const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

button.addEventListener("click",function()
{
    const task = input.value.trim();

    if(task === "") {
        alert("Lutfen bir gorev girin:");
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
});