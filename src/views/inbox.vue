<template>
    <div class="inbox">
        <div class="to-do-list">
            <button v-show="toggleAdd" @click="addNewTask" class="add-task"> <img class="icon-add" src="../icons/add.svg"> Add task</button>
            <div class="controls-input">
            </div>
            <div class="controls-task">
                <button v-show="isthereTask" @click="saveTheTask" class="save-task">save task</button>
                <button v-show="isthereTask" @click="cancelTask" class="cancel-task">cancel</button>
            </div>
            <div class="info">
              <h1>Tasks <span class="numberOfTasks"> {{ numberOftasks }} </span> </h1>
              <button @click="delAllTasks" v-if="btnDelAll" class="del-all">Delete All</button>
            </div>
            <ul class="listOfTasks">
              <img v-show="showTaskImage" class="tasks-hero-image" src="../icons/tasks.jpg">
                <li v-for="(task, index) in tasks" :key="index" class="task">
                    <div class="col-one-t">
                        <label :data-complete="index" class="completedTask" @click="complete">
                        <input type="radio" id="complete">
                        <img :data-complete="index" src="../icons/check (1).svg" >
                      </label>
                      <span> {{ task.task }} </span>
                    </div>
                    <div class="col-tow-t">
                      <span class="task-date"> {{ task.taskDate }} </span>
                      <button :data-delete="index" @click="deleteTask" class="del" > <img src="../icons/trash.svg"> </button>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "inbox",
    data: function() {
        return {
            isthereTask: false,
            toggleAdd: true,
            // the tasks
            tasks: [],
            completed: [],
            showTaskImage: true,
            btnDelAll: false,
            numberOftasks: 0
      }
    },
    methods: {
        addNewTask() {
          // parent the input field that will be created
          let controls_input = document.querySelector(".controls-input");
          // create new input field 
          let newTask = document.createElement("input");
          newTask.classList.add("inputTask");
          newTask.setAttribute("type", "text");
          newTask.setAttribute("placeholder", "add text here ..");
          newTask.style.cssText = `
              padding: 20px;
              width: 100%;
              font-size: 17px;
              outline: none;
              border: 1px solid rgb(195 195 195);
              border-radius: 5px;
              transition: all 10s ease;
          `;
          // if controls_input existe
          if (controls_input) {
            controls_input.append(newTask);
            newTask.focus();
          };
          // button for save a new task
          let save_task = document.querySelector(".save-task");
          // if button existe
          if (save_task) {
            // disable the save button
            save_task.disabled = true;
            // add keyup event on input field
            newTask.addEventListener("keyup", function(e) {
            // if the value of input is empty, disable the save button else that enabling
            e.target.value === "" ? save_task.disabled = true :
            save_task.disabled = false;
          })
          };
          // toggle between show / hide [button save task, button cancel task] if input field exists
          this.isthereTask = true;
          // toggle between show / hide [button add task]
          this.toggleAdd = false;
          // the add task button in top bar
          let create_new = document.querySelector(".create-new");
          // when create new task by the main button, disable the add task button in top bar
          if (create_new) {
            create_new.disabled = true;
          };
          
        },
        cancelTask() {
          // remove input field
          document.querySelector(".to-do-list .inputTask").remove();
          // enable the add task button that in top bar
          document.querySelector(".create-new").disabled = false;
          // hide the main add task button
          this.toggleAdd = true;
          // hide the save task button and cancel button
          this.isthereTask = false;
        },
        saveTheTask() {
          // the input field
          let inputTask = document.querySelector(".inputTask");
          // get value of input field
          let val = inputTask.value;
          // when save the task, remove input field
          inputTask.remove();
          // hide the save task button and cancel button
          this.isthereTask = false;
          // hide the main add task button
          this.toggleAdd = true;
          // get date
          let mDate = new Date();
          let tds = mDate.toDateString();
          // make array from input field value
          this.tasks.push({
            task: val,
            taskDate: tds
          });

            //? start localStorage
          // add the array of input field values to local storage
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          // hide the main image in inbox page
          this.showTaskImage = false;
          // show the delete all button
          this.btnDelAll = true;
          // get the number of incomplete tasks from local storage
          this.numberOftasks = JSON.parse(localStorage.getItem("tasks")).length;
          // enable add task button that in top bar
          document.querySelector(".create-new").disabled = false;
        },
        complete(e) {
          // list of tasks in document
          let listTasks = document.querySelectorAll(".listOfTasks li"),
              // get the target index number of a task 
              indexTask = e.target.getAttribute("data-complete"),
              // get the target text of the task
              // textOfTask = listTasks[indexTask].textContent,
              eleC1 = listTasks[indexTask].querySelector(".col-one-t"),
              eleC2 = listTasks[indexTask].querySelector(".col-tow-t"),
              taskD = eleC2.querySelector(".task-date").textContent,
              taskT = eleC1.querySelector("span").textContent;
          // make array from task text
          let tDate = new Date();
          let taskDate = tDate.toDateString()
          this.completed.push({
            task: taskT,
            taskDate: taskD,
            taskEndDate: taskDate
          });
          // add the array of the task text to local storage
          localStorage.setItem("completedTasks", JSON.stringify(this.completed));
          //? delete the target task from incomplete tasks that in local storage
          let tasksStorage = JSON.parse(localStorage.getItem("tasks")) 
          tasksStorage.splice(indexTask, 1);
          localStorage.setItem("tasks", JSON.stringify(tasksStorage));
          //! refresh the page after move the task to completed list 
          window.location.reload();
        },
        deleteTask(e) {
          // get the target task index throwgh delete button 
          let indexTask = e.target.getAttribute("data-delete"),
              // window confirm task delete
              conf = confirm("Are you sure ?"),
              // get the list incomplete tasks from local storage
              items = JSON.parse(localStorage.getItem("tasks"));
          // If approved, clear the target task from local Storage
          if (conf === true) {
              items.splice(indexTask, 1);
              localStorage.setItem("tasks", JSON.stringify(items));
              //! refresh the page after delete task
              window.location.reload();
          }
        },
        delAllTasks() {
          // window confirm the all task delete
          let confirmDelete = confirm("All incomplete tasks will be deleted !");
          // if approved, clear all incomplete tasks from local storage and refresh the page
          if (confirmDelete === true) {
            localStorage.removeItem("tasks");
            window.location.reload();
          }
        }
    },
    mounted: function() {
      //! global functions
      // cache the tasks list uncompleted from local storage, if null, set array
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      // cache the completed tasks list from local storage, if null, set array
      this.completed = JSON.parse(localStorage.getItem("completedTasks")) || [];
      // get the uncompleted tasks from local storage
      let thetasksfromlocal = JSON.parse(localStorage.getItem("tasks"))
      // if not null, and there is tasks existe, toggle between show / hide main image, and delete button all tasks 
      if (thetasksfromlocal) {
        if (thetasksfromlocal.length > 0) {
          this.showTaskImage = false;
          this.btnDelAll = true;
        } else {
          this.showTaskImage = true;
          this.btnDelAll = false;
        }
        // get the number of incomplete tasks from local storage
        this.numberOftasks = thetasksfromlocal.length;
      };
      // get add task button that in top bar
      let create_new = document.querySelector(".create-new");
      // get the create task function
      let newTask = this.addNewTask;
      // when click on add task button, run create task function
      create_new.addEventListener("click", function() {
      newTask();
      // after created task, make add task button unclickable
      create_new.disabled = true;

      //? this function for resolve some bugs when create task and leave input field opened, Then move on to the second page, and return on the page for add new task by button in top bar.
      //! The bug is when clicking on the add task button in top bar, it will create more than one input field.
      let controls_input = document.querySelector(".controls-input");
      if (controls_input) {
        let dom = controls_input.children,
            loThrowCh = Array.from(dom),
            i = 1;
        while(i < loThrowCh.length) {
          loThrowCh[i].remove()
          i++
        };
      };
    })
  }
}
</script>

<style lang="scss">
@import "../css/main.scss";
</style>
















































