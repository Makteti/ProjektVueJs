new Vue({
    el: '#app',
    data: {
        tasks: [
            
        ],
        newTask: {
            title: '',
            category: '',
            dueDate: '',
        },
    },
    methods: {
        addTask() {
            if (this.newTask.title && this.newTask.category && this.newTask.dueDate) {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    title: this.newTask.title,
                    category: this.newTask.category,
                    dueDate: this.newTask.dueDate,
                    completed: false,
                });
                this.resetNewTask();
            } else {
                alert('Please fill in all fields.');
            }
        },
        editTask(index) {
            
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        completeTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        resetNewTask() {
            this.newTask = {
                title: '',
                category: '',
                dueDate: '',
            };
        },
    },
    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed);
        },
    },
});
