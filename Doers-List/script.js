console.log("Hi App");

const inputBox = document.getElementById("input-box");
console.log("Hi input:", inputBox);
const listContainer = document.getElementById("list-container");


function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
      alert("Please write down a task");
      return;
    }
}

const li = document.createElement("li");