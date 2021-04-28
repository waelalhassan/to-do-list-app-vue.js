<template>
    <div class="search-tasks">
        <div>
            <label :class="{ac_img: isActive, ac_img_hover: hoverActive}" for="search">
                <img src="../icons/search.svg">
            </label>
            <input v-model="val" @blur="sBlur" @keyup="search"  @focus="sFocus" @mouseover="hoverActive = true" @mouseleave="hoverActive = false" id="search" type="text" placeholder="Find for completed and incomplete tasks..">
        </div>
        <ul class="list-task-ser" v-show="isEmpty">
            <li v-show="notFoundBoolean"> {{notFound}} </li>
            <li v-for="(task ,index) in allTasks" :key="index">
                {{ 
                    `${task.task}`
                }}
                 <span v-if="task.isCompleted === true"> 
                     <img src="../icons/right.svg">
                </span>
                <span v-if="task.isCompleted === false"> 
                     <img src="../icons/close.svg">
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"search-tasks",
    data: function() {
        return {
            allTasks: [],
            val: "",
            isEmpty: true,
            notFound: "Not Found",
            notFoundBoolean: false,
            isActive: false,
            hoverActive: false
        }
    },
    methods: {
        search() {
            // get the list of uncompleted tasks from local storage
            let notCompleted = JSON.parse(localStorage.getItem("tasks"));
            // get the list of completed tasks from local storage
            let Completed = JSON.parse(localStorage.getItem("completedTasks"));
            //! fix map of null
            if (notCompleted && Completed) {
            // give property to uncompleted tasks, Indicates that it is incomplete
            let unCompleted = notCompleted.map(function(e) {
                return {
                    task: e,
                    isCompleted: false
                }
            })
             // give property to completed tasks, Indicates that it is completed
            let completed = Completed.map(function(e) {
                return {
                    task: e,
                    isCompleted: true
                }
            })
            // merge the completed tasks and uncompleted
            let merge = [...unCompleted, ...completed]
            // get input search value then convert letters to lowercase
            let val = this.val.toLowerCase();
            // filter all tasks to return search result based on the letters 
            let filterSer = merge.filter(function(e) {
                return e.task.toLowerCase().indexOf(val) > -1;
            });
            // cache the result in array
            this.allTasks = filterSer;
            // if input search is empty, hide/show the tasks list
            val === "" ? this.isEmpty = false : this.isEmpty = true;
            // if no there tasks while searching, hide/show word [Not Found]
            this.allTasks.length === 0 ? this.notFoundBoolean = true : this.notFoundBoolean = false

        } // end if
    
        },
        sBlur() {
            // when clicking out of the input search
             // make input search empty
            this.val = ""
            // hide the tasks list
            this.isEmpty = false
            // remove class from label tag
            this.isActive = false
        },
        sFocus() {
            // when clicking on input search, add class to label tag for some style
            this.isActive = true
        }
    },
    mounted: function() {
        // in globally, when the search input field is empty toggle between hide/show the tasks list
        if (this.val === "") {
            this.isEmpty = false
        } else {
            this.isEmpty = true
        }
    }
}
</script>
