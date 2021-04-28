<template>
    <div class="completed">
        <div class="completedTasks">
            <div class="info">
                <h1>Completed Tasks <span class="numberOfTasks"> {{ numberOftasksCompleted }} </span> </h1>
                <button v-if="btnDelAll" @click="delAllTasks" class="del-all">Delete All</button>
            </div>
            <ul class="listOfTasks">
                <img v-show="showTaskImage" class="tasks-hero-image" src="../icons/completed.jpg">
                <li v-for="(taskComplete, index) in completedTask" :key="index" class="taskComplete">
                    {{ taskComplete }}
                    <button :data-delete="index" class="del" @click="deleteTask"> <img src="../icons/trash.svg"> </button>
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "completed",
    data: function() {
        return {
            completedTask: [],
            numberOftasksCompleted: 0,
            btnDelAll: false,
            showTaskImage: true
        }
    },
    methods: {
        deleteTask(e) {
            // get the target task index throwgh delete button 
            let index = e.target.getAttribute("data-delete");
            // window confirm task delete
            let conf = confirm("Are you sure ?");
            // get list completed tasks from local storage
            let TComplete = JSON.parse(localStorage.getItem("completedTasks"));
            // If approved, clear the target completed task from local Storage
            if (conf === true) {
                TComplete.splice(index, 1);
                localStorage.setItem("completedTasks", JSON.stringify(TComplete));
                // refresh the page after remove the completed task
                window.location.reload();
            }
        },
        delAllTasks() {
            // window confirm all task delete
            let confirmDelete = confirm("All completed tasks will be deleted !");
            // If approved, clear all completed tasks from local Storage
          if (confirmDelete === true) {
            localStorage.removeItem("completedTasks");
            window.location.reload();
          }
        }
    },
    mounted: function() {
        //! global functions
        // cache the completed tasks from local storage, if null, set array
        this.completedTask = JSON.parse(localStorage.getItem("completedTasks")) || [];
        // get the completed tasks from local storage
        let thetasksfromlocal = JSON.parse(localStorage.getItem("completedTasks"));
        // if not null, and there is tasks existe, toggle between show / hide main image, and delete button all tasks
        if (thetasksfromlocal) {
          if (thetasksfromlocal.length > 0) {
            this.showTaskImage = false;
            this.btnDelAll = true;
          } else {
            this.showTaskImage = true;
            this.btnDelAll = false;
          }
        // get the number of completed tasks from local storage
        this.numberOftasksCompleted = thetasksfromlocal.length;
        }
    }
}
</script>

<style scoped lang="scss">
    .completed {
        background-color: #FFF;
        padding-top: 85px;
        margin-left: 250px;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        .completedTasks {
            width: 70%;
            margin: 0 auto;
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
                    width: 440px;
                    margin: 0 auto;
                    opacity: .5;
                  }
                height: 450px;
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
                .taskComplete {
                    padding: 10px;
                    border-bottom: 1px solid rgb(226,226,226);
                    margin-bottom: 10px;
                    width: 95%;
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

