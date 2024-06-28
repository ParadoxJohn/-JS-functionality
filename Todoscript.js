$(document).ready(function() {
    const todoList = $('#todo-list');
    const taskInput = $('#task-input');
    const addButton = $('#add-button');
    const tasks = [
        {
            id: 1,
            task: 'Buy groceries',
            completed: false
        },
        {
            id: 2,
            task: 'Finish homework',
            completed: false
        },
        {
            id: 3,
            task: 'Go for a run',
            completed: false
        }
    ];

    function addTaskToDOM(task) {
        const listItem = $('<li>');
        listItem.html(`
            <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.task}</span>
            <button data-id="${task.id}">Видалити</button>
        `);
        todoList.append(listItem);

        listItem.find('button').click(function() {
            const taskId = parseInt($(this).attr('data-id'), 10);
            tasks.splice(tasks.findIndex(task => task.id === taskId), 1);
            listItem.remove();
        });

        listItem.find('.task-checkbox').change(function() {
            const taskId = parseInt($(this).attr('data-id'), 10);
            const task = tasks.find(task => task.id === taskId);
            task.completed = this.checked;
            const taskText = listItem.find('.task-text');
            taskText.toggleClass('completed', this.checked);
        });
    }

    tasks.forEach(addTaskToDOM);

    addButton.click(function() {
        const taskText = taskInput.val().trim();
        if (taskText !== '') {
            const newTask = {
                id: tasks.length + 1,
                task: taskText,
                completed: false
            };
            tasks.push(newTask);
            addTaskToDOM(newTask);
            taskInput.val('');
        }
    });
});