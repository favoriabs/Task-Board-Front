<template>
  <div class="dashboard">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <i class="fa fa-tasks fa-2x" aria-hidden="true">
          </i>
          <strong class="app-title">TASK-BOARD</strong>
        </a>

        <a class="navbar-item is-hidden-desktop" href="#">
          <span>
            LOGIN
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="#">
          <span>
            REGISTER
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

        <div id="navMenuTransparentExample" class="navbar-menu">
          <div class="navbar-start">

          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <!-- <a href="/login" class="button is-info is-outlined">LOGIN</a> -->
                  <router-link class="button is-info is-outlined" to="login">LOGIN</router-link>
                </p>
                <p class="control">
                  <!-- <a href="/register" class="button is-info is-outlined">REGISTER</a> -->
                  <router-link class="button is-info is-outlined" to="register">REGISTER</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="app-content">
        <img src="../assets/task.png" width="300px" height="300px">
        <p class="is-capitalized has-text-info has-text-weight-bold">solve all problems with your teams!!!</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dashboard{
    /*background-color: red;*/
    height: 100vh;
    width: 100%;
    /*background-color: #75DBF1;*/
    background-color: #D0D5F6;
  }
  .app-title{
    padding-left: 10px
  }
  .app-content{
    display: block;
    margin-left: 550px;
    margin-top: 200px;
  }
</style>
