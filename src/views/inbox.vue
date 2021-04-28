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
                    <label :data-complete="index" class="completedTask" @click="complete">
                      <input type="radio" id="complete">
                      <img :data-complete="index" src="../icons/check (1).svg" >
                    </label>
                    {{ task }}
                    <button :data-delete="index" @click="deleteTask" class="del" > <img src="../icons/trash.svg"> </button>
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
          `
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
          //? start localStorage
          // make array from input field value
          this.tasks.push(val);
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
              textOfTask = listTasks[indexTask].textContent;
          // make array from task text
          this.completed.push(textOfTask);
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

<style scoped lang="scss">
    .inbox {
        background-color: #FFF;
        padding-top: 85px;
        margin-left: 250px;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        .to-do-list {
            width: 70%;
            margin: 0 auto;
            .add-task {
                padding: 5px;
                border: none;
                background-color: #FFF;
                color: #333;
                cursor: pointer;
                .icon-add {
                  display: inline-block;
                  vertical-align: sub;
                  width: 17px;
                  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
                }
                &:hover {
                  color: #1771f1;
                  
                }
                &:hover > .icon-add {
                  transform: rotate(90deg);
                  filter: invert(31%) sepia(60%) saturate(3242%) hue-rotate(206deg) brightness(98%) contrast(93%);
                }
            }
            .cancel-task {
              border: none;
              outline: none;
              cursor: pointer;
              padding: 3px;
              background-color: #FFF;
              color: #333;
              &:hover {
                color: red;
              }
            }
            .controls-task {
              .save-task {
                    border: none;
                    padding: 7px 10px;
                    background-color: #1771f1;
                    color: #FFF;
                    font-weight: bold;
                    margin: 15px;
                    cursor: pointer;
                    border-radius: 5px;
                    &:disabled {
                      background-color: #acc7ef;
                      cursor: no-drop;
                    }
                }
            }
            .info {
              padding: 15px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              h1 {
                font-size: 1.7em;
                .numberOfTasks {
                  font-size: 17px;
                }
              }
              .del-all {
                border: none;
                outline: none;
                cursor: pointer;
                height: 29px;
                width: 75px;
                border-radius: 5px;
                background-color: rgb(255, 185, 185);
                color: #FFF;
                opacity: 0;
                transition: all .5s ease;
                &:hover {
                  background-color: rgb(255, 55, 55);
                }
              }
              &:hover > .del-all {
                opacity: 1;
              }
            }
            .listOfTasks {
              .tasks-hero-image {
                display: block;
                margin: 0 auto;
                width: 600px;
                opacity: .5;
              }
                height: 410px;
                overflow-y: auto;
                &::-webkit-scrollbar {
                width: 5px;
                }
                &::-webkit-scrollbar-track {
                background-color: rgb(226,226,226);;
                border-radius: 5px;
                }
                &::-webkit-scrollbar-thumb {
                background: #1771f1; 
                border-radius: 5px;
                }
                &::-webkit-scrollbar-thumb:hover {
                background: #0e3e83; 
                }
                .task {
                    padding: 10px;
                    border-bottom: 1px solid rgb(226,226,226);
                    margin-bottom: 10px;
                    width: 95%;
                    .completedTask {
                        #complete {
                          display: none;
                        }
                      display: inline-block;
                      cursor: pointer;
                      width: 17px;
                      height: 17px;
                      border-radius: 50%;
                      border: .7px solid #8c8c8c;
                      background-color: transparent;
                      vertical-align: middle;
                      img {
                        display: block;
                        opacity: 0;
                        height: inherit;
                        line-height: inherit;
                        width: inherit;
                        margin: 0 auto;
                      }
                      &:hover > img {
                        opacity: .4;
                        filter: grayscale(100%);
                      }
                      #complete:checked ~ img {
                        opacity: 1;
                        filter: grayscale(0);
                        animation: check .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        transform: scale(1.2);
                      }
                      @keyframes check {
                        0% {transform: scale(1.2);}
                        50% {transform: scale(1.5);}
                        100% {transform: scale(1.2);}
                      }
                    }
                    .del {
                      position: relative;
                      z-index: 2;
                      float: right;
                      padding: 5px 7px;
                      cursor: pointer;
                      border: none;
                      outline: none;
                      background-color: transparent;
                      display: inline;
                      opacity: 0;
                      transition: all .5s ease;
                      img {
                        position: relative;
                        width: 15px;
                        z-index: -1;
                      }
                    }
                    &:hover > .del {
                      opacity: 1;
                    }
                }
            }
        }
    }
    
</style>
















































