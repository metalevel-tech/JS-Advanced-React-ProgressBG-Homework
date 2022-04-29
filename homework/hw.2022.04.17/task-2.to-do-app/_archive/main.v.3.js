// Select the necessary DOM nodes
const nodes = {
    taskListContainer: document.querySelector('#tasks'),
    newTaskButton: document.querySelector('#navigator .task-nav-add-new'),
    taskTemplate: document.querySelector('#task-template')
}

// Data base connection
const dataBase = {
    url: '127.0.0.1',
    port: '3000',
    uri: 'tasks',
    protocol: 'http',
    get fqdn() {
        return `${this.protocol}://${this.url}:${this.port}/${this.uri}`;
    }
    // We could have fetch() method here,
    // that accepts {init} object
    // and returns the response's {data}.
}

class Task {
    /**
     * Instances model
     */
    data = {
        id: 0,
        title: '',
        progress: 0,
        note: '',
        completed: false
    };
    domEl = {};
    controls = {};
    
    constructor(data) {
        this.data = data;
        this.domEl = nodes.taskTemplate.cloneNode(true);
        this.generateControls();
    }
    
    /**
     * Prototype model
     */
    async generateControls() {
        this.controls = {
            // Title section
            taskTitle: this.domEl.querySelector('input.input-task-title'),
            titleLabel: this.domEl.querySelector('label.label-task-title'),

            // Number section
            progressNumber: this.domEl.querySelector('input.input-progress-number'),
            numberLabel: this.domEl.querySelector('label.label-progress-number'),

            // Slider section
            progressSlider: this.domEl.querySelector('input.input-progress-slider'),
            sliderLabel: this.domEl.querySelector('label.label-progress-slider'),

            // Note section
            taskNote: this.domEl.querySelector('input.input-task-note'),
            noteLabel: this.domEl.querySelector('label.label-task-note'),

            // Buttons section
            btnSave: this.domEl.querySelector('.task-btn.task-save'),
            btnCompleted: this.domEl.querySelector('.task-btn.task-completed'),
            btnClone: this.domEl.querySelector('.task-btn.task-clone'),
            btnRemove: this.domEl.querySelector('.task-btn.task-remove'),
            btnRmConfirm: this.domEl.querySelector('.task-btn.task-remove-confirm'),
            btnRmCancel: this.domEl.querySelector('.task-btn.task-remove-cancel'),
        };

        this.domEl.onclick = this.buttonsHandler.bind(this);
        this.domEl.oninput = this.taskElementsEventHandler.bind(this);
    }

    taskElementsEventHandler(e) {
        // Return an arrow function if you don't want to bind the context explicitly
        // return (e) => {
            const {
                taskTitle, progressNumber, 
                progressSlider, taskNote
            } = this.controls;

            if (e.target === progressNumber ) progressSlider.value = progressNumber.value;
            if (e.target === progressSlider) progressNumber.value = progressSlider.value;
            this.domEl.classList.add('task-changed-not-saved');
        // };
    }

    buttonsHandler(e) { 
        const { 
            btnSave, btnCompleted, btnClone, 
            btnRemove, btnRmConfirm, btnRmCancel
        } = this.controls;
                
        switch (e.target) {
            case btnSave:
                this.putTaskDataToDataBase(e);
                break;
            case btnCompleted:
                this.putTaskDataToDataBase(e);
                break;
            case btnClone:
                // this.cloneTask();
                break;
            case btnRemove:
                this.domEl.classList.add('task-to-remove');
                break;
            case btnRmConfirm:
                // this.confirmRemoveTask();
                this.domEl.remove();
                break;
            case btnRmCancel:
                this.domEl.classList.remove('task-to-remove');
                break;
        }
    }

    addTaskToDom(trigger) {
        const { taskListContainer: tasks } = nodes;
        
        this.updateTaskDom();
        
        // Add task to the DOM list
        if (trigger === 'new') {
            this.domEl.classList.add('new-task-not-saved');
            tasks.prepend(this.domEl);
        } else {
            tasks.append(this.domEl);
        }
    }

    updateTaskDom() {
        const { id, title, progress, note, completed } = this.data;
        const { 
            taskTitle, titleLabel,
            progressNumber, numberLabel,
            progressSlider, sliderLabel,
            taskNote, noteLabel
        } = this.controls;

        // The task container
        this.domEl.id = `task-${id}`;
        this.domEl.dataset.id = id;

        // Title section
        taskTitle.value = title;
        taskTitle.id = `task-title-${id}`;
        titleLabel.htmlFor = `task-title-${id}`;

        // Slider section
        progressNumber.id = `task-percentage-${id}`;
        progressNumber.value = progress;
        numberLabel.htmlFor = `task-percentage-${id}`;

        // Number section
        progressSlider.id = `task-progress-${id}`;
        progressSlider.value = progress;
        sliderLabel.htmlFor = `task-progress-${id}`;
          
        // Note section
        taskNote.id = `task-note-${id}`;
        taskNote.value = note;
        noteLabel.htmlFor = `task-note-${id}`;

        // Completed section
        if (completed) {
            this.domEl.classList.add('completed-task');
        } else {
            this.domEl.classList.remove('completed-task');
        }
    }

    updateTaskDataByDomValues() {
        const { taskTitle, progressNumber, progressSlider, taskNote } = this.controls;

        const percentComplete = Number(progressNumber.value);
        
        if (percentComplete >= 100) {
            this.data.completed = true;
        } else {
            this.data.completed = false;
        }

        this.data.title = taskTitle.value;
        this.data.progress = percentComplete;
        this.data.note = taskNote.value;
        this.data.note = this.domEl.querySelector('input.input-task-note').value;
    }

    putTaskDataToDataBase(e) {
        this.updateTaskDataByDomValues();
  
        if (this.domEl.classList.contains('new-task-not-saved')) {
            this.addTaskToDataBase();
        } else {
            fetch(`${dataBase.fqdn}/${this.data.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.data)
            })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok');
            })
            .then(data => { 
                this.data = data;
                this.updateTaskDom();
                this.domEl.classList.remove('task-changed-not-saved');
             })
            .catch(error => { console.log(error); });
        }
    }

    // async addTaskToDataBase() {

    //     await fetch(`${dataBase.fqdn}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(this.data)
    //     }).then(response => {
    //         if (response.ok) return response.json();
    //         throw new Error('Network response was not ok');
    //     })
    //     .catch(error => { console.log(error); });

    //     /////////////////////
    //         this.domEl.classList.remove('new-task-not-saved');
    //         
            

    // }

    

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
                    this.taskListArray.push(new Task(taskData));
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
            (acc, task) => (task.data.id > acc) ? acc = task.data.id : acc, 0
        );
        return lastId + 1;
    }

    static addNewTask() {
        const data = {
            id: this.generateTaskId(),
            title: '',
            progress: 0,
            note: '',
            completed: false
        }
        const task = new Task(data);
        task.addTaskToDom('new');
        this.taskListArray.push(task);
    }
}

// Initialization
(async function init() {
    await Task.getTaskListFromDataBase();
    Task.addTaskListToDom();

    nodes.newTaskButton.addEventListener('click', () => { Task.addNewTask(); } );
})();
