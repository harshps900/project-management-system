        let projects = [];
        let tasks = [];

        function renderProjects() {
            const list = document.getElementById("projectList");
            const taskSelect = document.getElementById("taskProject");
            list.innerHTML = "";
            taskSelect.innerHTML = "";
            projects.forEach((proj, index) => {
                const div = document.createElement("div");
                div.innerHTML = `<strong>${proj.name}</strong> - $${proj.price} - Due: ${proj.due_date}<br>${proj.description}<br>
                    <button onclick="editProject(${index})">Edit</button>
                    <button onclick="deleteProject(${index})">Delete</button><hr>`;
                list.appendChild(div);

                const option = document.createElement("option");
                option.value = index;
                option.textContent = proj.name;
                taskSelect.appendChild(option);
            });
        }

        function renderTasks() {
            const list = document.getElementById("taskList");
            list.innerHTML = "";
            tasks.forEach((task, index) => {
                const projName = projects[task.project_id]?.name || "Unknown";
                const div = document.createElement("div");
                div.innerHTML = `<strong>${task.name}</strong> (Project: ${projName}) - Due: ${task.due_date}<br>${task.description}<br>
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button><hr>`;
                list.appendChild(div);
            });
        }

        function deleteProject(index) {
    projects.splice(index, 1);
    tasks = tasks
        .filter(t => t.project_id !== index)
        .map(t => ({
            ...t,
            project_id: t.project_id > index ? t.project_id - 1 : t.project_id
        }));
    renderProjects();
    renderTasks();
}


        function editProject(index) {
            const proj = projects[index];
            document.getElementById("editProjectIndex").value = index;
            document.getElementById("projectName").value = proj.name;
            document.getElementById("projectPrice").value = proj.price;
            document.getElementById("projectDueDate").value = proj.due_date;
            document.getElementById("projectDescription").value = proj.description;
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        function editTask(index) {
            const task = tasks[index];
            document.getElementById("editTaskIndex").value = index;
            document.getElementById("taskName").value = task.name;
            document.getElementById("taskProject").value = task.project_id;
            document.getElementById("taskDueDate").value = task.due_date;
            document.getElementById("taskDescription").value = task.description;
        }

        document.getElementById("projectForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const index = parseInt(document.getElementById("editProjectIndex").value);
            const project = {
                name: document.getElementById("projectName").value,
                price: parseFloat(document.getElementById("projectPrice").value),
                due_date: document.getElementById("projectDueDate").value,
                description: document.getElementById("projectDescription").value,
                updated_at: new Date().toISOString(),
            };
            if (index === -1) {
                project.created_at = new Date().toISOString();
                projects.push(project);
            } else {
                projects[index] = { ...projects[index], ...project };
            }
            document.getElementById("editProjectIndex").value = -1;
            e.target.reset();
            renderProjects();
        });

        document.getElementById("taskForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const index = parseInt(document.getElementById("editTaskIndex").value);
            const task = {
                name: document.getElementById("taskName").value,
                project_id: parseInt(document.getElementById("taskProject").value),
                due_date: document.getElementById("taskDueDate").value,
                description: document.getElementById("taskDescription").value,
                updated_at: new Date().toISOString(),
            };
            if (index === -1) {
                task.created_at = new Date().toISOString();
                tasks.push(task);
            } else {
                tasks[index] = { ...tasks[index], ...task };
            }
            document.getElementById("editTaskIndex").value = -1;
            e.target.reset();
            renderTasks();
        });

        renderProjects();
        renderTasks();