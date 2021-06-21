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

<style lang="scss">
@import "../css/main.scss";
</style>

