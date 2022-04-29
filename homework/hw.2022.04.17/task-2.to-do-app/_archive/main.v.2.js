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
    data = {
        id: this.constructor.generateTaskId(),
        title: '',
        progress: 0,
        note: '',
        completed: false
    }
    domEl = nodes.taskTemplate;

    constructor() {
        this.data;
        this.domEl;
    }

    /**
     * Prototype model
     */

    addTaskToDom(trigger) {
        const { taskListContainer: tasks, taskTemplate } = nodes;
        const { id, title, progress, note, completed } = this.data;
        this.domEl = taskTemplate.cloneNode(true);

        // The task form container
        this.domEl.id = `task-${id}`;
        this.domEl.dataset.id = id;
        this.domEl.onclick = taskButtonsHandler;
        if (trigger === 'new') {
            this.domEl.classList.add('new-task-not-saved');
        }

        // Title section
        this.domEl.querySelector('label.label-task-title').htmlFor = `task-title-${id}`;
        this.domEl.querySelector('input.input-task-title').id = `task-title-${id}`;
        this.domEl.querySelector('input.input-task-title').value = title;

        // Number section
        this.domEl.querySelector('label.label-progress-number').htmlFor = `task-percentage-${id}`;
        this.domEl.querySelector('input.input-progress-number').id = `task-percentage-${id}`;
        this.domEl.querySelector('input.input-progress-number').value = progress;
        this.domEl.querySelector('input.input-progress-number').oninput = percentSliderHandler;
        
        // Slider section
        this.domEl.querySelector('label.label-progress-slider').htmlFor = `task-progress-${id}`;
        this.domEl.querySelector('input.input-progress-slider').id = `task-progress-${id}`;
        this.domEl.querySelector('input.input-progress-slider').value = progress;
        this.domEl.querySelector('input.input-progress-slider').oninput = percentNumberHandler;

        // Note section
        this.domEl.querySelector('label.label-task-note').htmlFor = `task-note-${id}`;
        this.domEl.querySelector('input.input-task-note').id = `task-note-${id}`;
        this.domEl.querySelector('input.input-task-note').value = note;

        // Add task to the DOM list
        if (trigger === 'new') tasks.prepend(this.domEl);
        else tasks.append(this.domEl);
    }

    updateTaskDataByDomValues() {
        this.data.title = this.domEl.querySelector('input.input-task-title').value;
        this.data.progress = Number(this.domEl.querySelector('input.input-progress-number').value);
        this.data.note = this.domEl.querySelector('input.input-task-note').value;
        this.data.completed = this.domEl.querySelector('input.input-progress-slider').checked;
    }

    saveTaskDataToDataBase(e) {
        this.updateTaskDataByDomValues();
  
        if (this.domEl.classList.contains('new-task-not-saved')) {
            this.addTaskToDataBase();
        } else {
            await fetch(`${dataBase.fqdn}/${this.data.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.data)
            })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok');
            })
            .then(data => { console.log(data); })
            .catch(error => { console.log(error); });
        }
    }

    addTaskToDataBase() {

        await fetch(`${dataBase.fqdn}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data)
        }).then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok');
        })
        .catch(error => { console.log(error); });

        /////////////////////
            this.domEl.classList.remove('new-task-not-saved');
            

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
                data.forEach(taskData => {
                    const task = new Task();
                    task.data = taskData;
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
    const taskObj = Task.taskListArray.find(task => task.data.id === taskId);

    const button = e.target;
    const btnRole = button.dataset.btnRole;

    if (btnRole === 'remove') {
        taskDom.remove();
        // .......
    } else if (btnRole === 'save') {
        taskObj.saveTaskDataToDataBase(e);
    }
};

// Initialization
(async function init() {
    await Task.getTaskListFromDataBase();
    Task.addTaskListToDom();

    nodes.newTaskButton.addEventListener('click', () => { Task.addNewTask(); } );
})();
