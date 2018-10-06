var app = new Vue({
  el: '#app',
  components: {
    'task': {
      props: ['task'],
      template: `
              <div class="ui segment task"
                   v-bind:class="task.completed ? 'done' : 'todo' ">
                     <div class="ui grid">
                       <div class="left floated twelve wide column">
                         <div class="ui checkbox">
                          <input type="checkbox" name="task" v-on:click="app.toggleDone($event, task.id)" :checked="task.completed">
                          <label>{{ task.name }} <span class="description">{{ task.description }}</span></label>
                          </div>
                         </div>
                        <div class="right floated three wide column">
                        <i class="icon pencil blue" alt="Edit" v-on:click="app.editTask($event, task.id)"></>
                       <i class="icon trash red" alt="Delete" v-on:click="app.deleteTask($event, task.id)"></i>
                     </div>
                   </div>
              </div>
              `
    }
  },
  data: {
    tasks: [
      {
        id: 1,
        name: 'ToDo 1',
        description: 'This is a todo',
        completed: false
      },
      {
        id: 2,
        name: 'ToDo 2',
        description: 'This is a todo',
        completed: false
      },
      {
        id: 3,
        name: 'ToDo 3',
        description: 'This is a complete todo',
        completed: true
      },
      {
        id: 4,
        name: 'ToDo 4',
        description: 'This is a complete todo',
        completed: true
      },
      {
        id: 5,
        name: 'ToDo 5',
        description: 'This is a complete todo',
        completed: true
      },
      {
        id: 6,
        name: 'ToDo 6',
        description: 'This is a todo',
        completed: true
      }
    ],
    task: {},
    message: 'Hello World!'
  },
  computed: {
    completedTasks: function() {
      return this.tasks.filter(item => item.completed == true);
    },
    todoTasks: function() {
      return this.tasks.filter(item => item.completed == false);
    }
  },
  methods: {
    toggleDone: function(event, id) {
      let task = this.tasks.find(item => item.id == id);

      if(task) {
        task.completed = !task.completed;
        console.log('task toggled');
      }
    },
    editTask: function(event, id){
        let task = this.tasks.find(item => item.id == id);
        if(task){
            this.task = { name: task.name, description: task.description, completed: task.completed };
        }
    },
    deleteTask: function(event, id) {
      event.stopImmediatePropagation();
      
      let taskIndex = this.tasks.findIndex(item => item.id == id);
      
      if(taskIndex > -1){
          this.$delete(this.tasks, taskIndex);
      }
      
      console.log('task deleted');
    }
  }
})
