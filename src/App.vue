<template>
  <div id="app">
      <div class="top-bar">
        <div class="container flex">
          <div class="hamburger" @click="menuToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="search-bar">
            <searchTasks />
          </div>
          <div class="controls">
            <div class="btn_darkmode">
              <input @click="DarkMode" type="checkbox" id="darkmode" >
              <label for="darkmode">
                <img src="./icons/moon-style-1.svg">
                <img src="./icons/sun-style-1.svg">
              </label>
            </div>
            <button class="create-new">
              <img src="../src/icons/plus.svg">
            </button>
          </div>
        </div>
      </div>
      <nav>
        <ul>
            <li>
              <router-link  to="/">
              <img src="./icons/tasks.svg"> 
              Inbox
              </router-link>
            </li>
            <li @click="disBtn">
              <router-link to="/Completed"> 
              <img src="./icons/complete-icon.svg">
              Completed 
              </router-link>
            </li>
          </ul>
      </nav>
      <router-view />
  </div>
</template>

<script>
// search bar component
import searchTasks from "../src/components/search-tasks";

export default {
  name:"App",
  data: function() {
    return {
      // toggle menu
      menutog: false
    }
  },
  components: {
    searchTasks
      },
  methods: {
    menuToggle() {
      // side bar
      let sidebar = document.querySelector("nav"),
          // tasks page
          inbox = document.querySelector(".inbox"),
          // completed tasks page
          completed = document.querySelector(".completed");

    if (!this.menutog) {
          sidebar.style.transform = "translateX(-100%)"
          if (inbox) {
            inbox.style.marginLeft = "0"
          }
          if (completed) {
            completed.style.marginLeft = "0"
          }
          this.menutog = true
      } else {
        sidebar.style.transform = "translateX(0)"
          if (inbox) {
            inbox.style.marginLeft = "250px"
          }
          if (completed) {
            completed.style.marginLeft = "250px"
          }
          this.menutog = false
      }
    },
    disBtn() {
      //? if a user leave the input field opened, and not click on cancel and clicked on completed tasks page , this function will enable the create task button that in top
      document.querySelector(".create-new").disabled = false
    },
    DarkMode(event) {
      if (event.target.checked) {
        document.body.classList.add("ActiveDartkMode");
        localStorage.setItem("darkMode", JSON.stringify(true));
      } else {
        document.body.classList.remove("ActiveDartkMode");
        localStorage.setItem("darkMode", JSON.stringify(false));
      }
    },
  },
  mounted() {
    let darkModeInLocalS = JSON.parse(localStorage.getItem("darkMode"));
    let darkmode = document.querySelector("#darkmode");
    if (darkModeInLocalS) {
      document.body.classList.add("ActiveDartkMode");
      darkmode.checked = true;
    } else {
      document.body.classList.remove("ActiveDartkMode");
      darkmode.checked = false;
    }
  }
}
</script>

<style lang="scss">
@import "./css/main.scss";
</style>


