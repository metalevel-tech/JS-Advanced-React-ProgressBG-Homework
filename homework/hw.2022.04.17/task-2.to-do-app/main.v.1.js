const nodes = {
    taskListContainer: document.querySelector('#tasks'),
    newTaskButton: document.querySelector('#navigator .task-nav-add-new'),
    taskTemplate: document.querySelector('#task-template')
}

const dataBase = {
    url: '127.0.0.1',
    port: '3000',
    uri: 'tasks',
    protocol: 'http',
    get fqdn() {
        return `${this.protocol}://${this.url}:${this.port}/${this.uri}`;
    }
}

class Task {
    /**
     * Instances model
     */
    constructor() {
        this.id = this.constructor.generateTaskId();
        this.title = '';
        this.progress = 0;
        this.note = '';
        this.completed = false;
    }

    /**
     * Prototype model
     */

    addTaskToDom(trigger) {
        const { taskListContainer: tasks, taskTemplate } = nodes;
        const { id, title, progress, note, completed } = this;
        const taskDom = taskTemplate.cloneNode(true);

        // The task form container
        taskDom.id = `task-${id}`;
        taskDom.dataset.id = id;
        taskDom.onclick = taskButtonsHandler;
        if (trigger === 'new') {
            taskDom.classList.add('new-task-not-saved');
        }

        // Title section
        taskDom.querySelector('label.label-task-title').htmlFor = `task-title-${id}`;
        taskDom.querySelector('input.input-task-title').id = `task-title-${id}`;
        taskDom.querySelector('input.input-task-title').value = title;

        // Slider section
        taskDom.querySelector('label.label-percent-number').htmlFor = `task-percentage-${id}`;
        taskDom.querySelector('input.input-percent-number').id = `task-percentage-${id}`;
        taskDom.querySelector('input.input-percent-number').value = progress;
        taskDom.querySelector('input.input-percent-number').oninput = percentSliderHandler;

        // Number section
        taskDom.querySelector('label.label-percent-slider').htmlFor = `task-progress-${id}`;
        taskDom.querySelector('input.input-percent-slider').id = `task-progress-${id}`;
        taskDom.querySelector('input.input-percent-slider').value = progress;
        taskDom.querySelector('input.input-percent-slider').oninput = percentNumberHandler;

        // Note section
        taskDom.querySelector('label.label-task-note').htmlFor = `task-note-${id}`;
        taskDom.querySelector('input.input-task-note').id = `task-note-${id}`;
        taskDom.querySelector('input.input-task-note').value = note;

        // Add task to the DOM list
        if (trigger === 'new') tasks.prepend(taskDom);
        else tasks.append(taskDom);
    }

    updateTaskByDomValues() {
        const { taskListContainer: tasks } = nodes;
        const taskDom = tasks.querySelector(`#task-${this.id}`);

        this.title = taskDom.querySelector('input.input-task-title').value;
        this.progress = Number(taskDom.querySelector('input.input-percent-number').value);
        this.note = taskDom.querySelector('input.input-task-note').value;
        this.completed = taskDom.querySelector('input.input-percent-slider').checked;
    }

    saveTaskToDataBase() {
        this.updateTaskByDomValues();

        fetch(`${dataBase.fqdn}/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok');
        }).catch(error => { console.log(error); });
    }

    addTaskToDataBase() {

        const { taskListContainer: tasks } = nodes;
        const taskDom = tasks.querySelector(`#task-${this.id}`);
        
    }

    /**
     * Constructor model
     */

    static taskListArray = [];

    static async getTaskListFromDataBase() {
        return fetch(`${dataBase.fqdn}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok');
            })
            .then(data => {
                data.forEach(task => {
                    task = Object.assign(new Task(), task);
                    this.taskListArray.push(task);
                });
                return new Promise(resolve => resolve(`${this.taskListArray.length} tasks loaded`));
            })
            .catch(error => { console.log(error); });
    }

    static addTaskListToDom() {
        this.taskListArray.forEach(task => task.addTaskToDom('append'));
    }
    
    static generateTaskId() {
        const lastId = this.taskListArray.reduce(
            (acc, task) => (task.id > acc) ? acc = task.id : acc, 1
        );
        return lastId + 1;
    }

    static addNewTask() {
        const task = new Task();
        task.addTaskToDom('new');
        this.taskListArray.push(new Task());
    }
}

// Event handler functions
const percentNumberHandler = (e) => {
    // Find the slider field of this task
    const numberField = e.target.parentElement.previousElementSibling.querySelector('input');
    // Set the value of the number field to the value of the slider field
    numberField.value = e.target.value;
}

const percentSliderHandler = (e) => {
    // Find the number field of this task
    const sliderField = e.target.parentElement.nextElementSibling.querySelector('input');
    // Set the value of the slider field to the value of the number field
    sliderField.value = e.target.value;
}

const taskButtonsHandler = (e) => {
    const taskDom = e.currentTarget;
    const taskId = Number(taskDom.dataset.id);
    const taskObj = Task.taskListArray.find(task => task.id === taskId);

    const button = e.target;
    const btnRole = button.dataset.btnRole;

    if (btnRole === 'remove') {
        taskDom.remove();
        // .......
    } else if (btnRole === 'save') {
        taskObj.save();
    }
};

// Initialization
(async function init() {
    await Task.getTaskListFromDataBase();
    Task.addTaskListToDom();

    nodes.newTaskButton.addEventListener('click', () => { Task.addNewTask(); } );
})();
