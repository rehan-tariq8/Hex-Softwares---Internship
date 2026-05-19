 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function displayTasks() {

            let taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            tasks.forEach((task, index) => {

                taskList.innerHTML += `

                <div class="task-item">

                    <p class="task-text ${task.completed ? 'completed' : ''}">
                        ${task.text}
                    </p>

                    <div class="task-buttons">

                        <button class="complete-btn" onclick="toggleTask(${index})">
                            <i class="fa fa-check"></i>
                        </button>

                        <button class="delete-btn" onclick="deleteTask(${index})">
                            <i class="fa fa-trash"></i>
                        </button>

                    </div>

                </div>
                `;
            });
        }

        function addTask() {

            let taskInput = document.getElementById("taskInput");
            let taskValue = taskInput.value.trim();

            if (taskValue === "") {
                alert("Please enter a task");
                return;
            }

            tasks.push({
                text: taskValue,
                completed: false
            });

            saveTasks();
            displayTasks();
            taskInput.value = "";
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        }

        displayTasks();
