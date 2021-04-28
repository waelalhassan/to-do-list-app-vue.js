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
    }
  }
}
</script>

<style lang="scss">
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  #app {
    .top-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #1771f1;
      height: 43px;
      .flex {
        display: flex;
        width: 100%;
        height: inherit;
        justify-content: space-between;
        align-items: center;
      }
      .hamburger {
        width: 30px;
        display: grid;
        align-items: center;
        height: 22.5px;
        cursor: pointer;
        span {
          display: block;
          background-color: #FFF;
          width: 25px;
          height: 2.3px;
          border-radius: 5px;
        }
        span:nth-child(1) {
          top: -10px;
          }
        span:nth-child(3) {
          top: 10px;
          }
      }
      .search-bar {
        position: relative;
        label {
          display: inline-block;
          transform: translateX(23px);
          img {
            display: inline-block;
            vertical-align: middle;
            width: 15px;
            filter: invert(100%) sepia(0%) saturate(7475%) hue-rotate(315deg) brightness(109%) contrast(99%);
          }
        }
        #search {
          width: 278px;
          height: 30px;
          padding: 5px 10px 5px 27px;
          outline: none;
          border: none;
          border-radius: 5px;
          background-color: #6eaaff;
          transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:focus {
            width: 370px;
            background-color: #FFF;
          }
          &:hover {
            background-color: #FFF;
          }
          &::placeholder {
            color: #fff;
            opacity: .7;
          }
          &:focus::placeholder {
            color: #333;
          }
          &:hover::placeholder {
            color: #333;
          }
        }
        .search-tasks {
          position: relative;
          .list-task-ser {
            position: fixed;
            width: 30%;
            max-width: 370px;
            padding: 10px;
            border-radius: 5px;
            transform: translate(13px, 10px);
            background-color: #FFF;
            box-shadow: 0 4px 7px rgba(0, 0, 0, .2);
            height: auto;
            max-height: 400px;
            overflow: auto;
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
            li {
              padding: 10px;
              border-bottom: 1px solid #e2e2e2;
              margin-bottom: 0;
              &:last-child {
                border: none;
              }
            }
            span {
              float: right;
              img {
                width: 15px;
              }
            }
          }
        }
        .ac_img {
            img {
              filter: invert(13%) sepia(52%) saturate(8%) hue-rotate(358deg) brightness(102%) contrast(84%);
              opacity: .7;
            }
          }
        .ac_img_hover {
            img {
              filter: invert(13%) sepia(52%) saturate(8%) hue-rotate(358deg) brightness(102%) contrast(84%);
              opacity: .7;
            }
          }
      }
      .controls {
        .create-new {
          border: none;
          outline: none;
          cursor: pointer;
          background-color: transparent;
          img {
            width: 27px;
            vertical-align: middle;
            border-radius: 50%;
            z-index: -1;
          }
          &:hover {
            img {
              box-shadow: 0 2px 7px rgba(0, 0, 0, .2);
            }
          }
          &:disabled {
            color: red;
          }
        }
      }
    }
    nav {
      background-color: #fafafa;
      color: #333;
      position: fixed;
      top: 43px;
      left: 0;
      width: 250px;
      height: 100vh;
      z-index: 20;
      transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
      ul {
        padding: 30px 0 20px 50px;
          li {
            a {
              img {
                width: 20px;
                vertical-align: middle;
              }
              padding: 10px 15px;
              border-radius: 5px;
              color: #333;
              display: block;
              transition: background-color .3s ease;
              &:hover {
                background-color: #EEE;
              }
            }
            .router-link-exact-active {
                background-color: #EEE;
            }
          }
        }
    }
  }


</style>


