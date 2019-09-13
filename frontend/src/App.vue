<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center mt-0 mb-0 h-100 w-100 p-3 container" style="background-color:#f6f5f5">
    <transition mode="out-in" name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
