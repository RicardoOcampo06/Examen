
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const taskInput = document.querySelector('input[type="text"]');
    const taskList = document.querySelector('ul');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(completeButton);
        taskList.appendChild(li);
    }
});