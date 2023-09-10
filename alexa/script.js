
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');


function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.innerText = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function removeTask(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
}

function completeTask(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
}


taskList.addEventListener('click', removeTask);


taskList.addEventListener('click', completeTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskLabel = document.createElement('label');
        taskLabel.innerText = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}


function removeTask(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', removeTask);
