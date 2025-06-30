// FORM VALIDATION
document.getElementById("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
        alert("Please fill in all fields.");
        event.preventDefault(); // prevent form submission
    } else if (!email.value.includes("@")) {
        alert("Please enter a valid email.");
        event.preventDefault();
    }
});

// TO-DO LIST FUNCTIONALITY
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
