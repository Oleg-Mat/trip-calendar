<template >
  <nav class="align-self-stretch navbar navbar-expand-lg navbar-dark  bg-primary mb-3 ml-0 mr-0">

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'timeLine', params:{userId: user._id}}">Timeline</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'mapPage'}">Map</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button @click="logoutAndGo" v-if="user" class="mr-3 my-2 my-sm-0 btn btn-danger">Выйти</button>
        <p class="pointer my-2 my-sm-0 text-white" @click="$router.push(`/userPage/${user._id}`)">{{user.lastName}} {{user.firstName}}</p>
        <!--         <input class="form-control mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>-->
      </form>

  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    user: function() {
      return this.$store.state.user;
    },
  },
  methods: {
    ...mapActions({
      logout: 'logout',
    }),
    async logoutAndGo() {
      console.log('===')
      await this.logout();
      this.$router.push('/')
    }
  },

  name: 'navBar',
};
</script>

<style>
 


</style>
