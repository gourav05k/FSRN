console.log("Hello form App.js");
const inputTask = document.querySelector(".input-item");
const listTask = document.getElementById("list-container");
console.log("input: ", inputTask);
console.log("list items: ", listTask);


function addTask() {
    const task = inputTask.value.trim();
    console.log(task);
    if (!task) {
        alert("Please enter a valid task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML =
        `
            <label>
                <input type="checkbox">
                <span>${task}</span>
                </label>
                <span class="edit-btn">Edit</span>
            <span class="delete-btn">Delete</span>
            `;

    // add task to list
    listTask.appendChild(li);
    inputTask.value = "";
    
    console.log("listTask: ", listTask);

    const checkbox = li.querySelector("input");
    const editTask = li.querySelector(".edit-btn");
    const deleteTask = li.querySelector(".delete-btn");
    const textSpan = li.querySelector("span");
    
    // activate checkbox to mark task as completed and strike through it.
    checkbox.addEventListener("click", function () {
        // add "completed" class to li when it is checked
        li.classList.toggle("completed", checkbox.checked);
        updateCounter();

    })
    
    //activate edit task
    editTask.addEventListener("click", function () {
        const update = prompt("Edit task:", task);
        if (update) {
            console.log(update);
            textSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounter();

        }
    })
    
    // enable delete task
    deleteTask.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounter();
        }
    })

    const completed = document.querySelector('#completed-tasks');
    const unCompleted = document.querySelector('#pending-tasks');
    
    // update counters
    function updateCounter() {
        const completeCount = document.querySelectorAll(".completed").length;
        const unCompleteCount = document.querySelectorAll("li:not(.completed)").length;

        completed.textContent = completeCount;
        unCompleted.textContent = unCompleteCount;
    }

    updateCounter();
    
}