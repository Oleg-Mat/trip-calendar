<template>
  <div class="card-body d-flex justify-content-between align-items-center rounded w-100 mb-3 bg-light flex-grow-0 ">
    <img
      style="width:100px; height: 100px "
      class="flex-grow-0 align-self-center"
      :src="img"
      alt="userimage"
    />
    <div class="pl-4 text-left ">
      <p class="font-weight-bold">{{dateStart}}-{{dateEnd}}</p>
      <p class="font-weight-bold">{{place}}</p>
      <p class="font-weight-bold">Also there: many</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'timeLineElement',
    props: ['dateStart','dateEnd','place','img'],
  data() {
    return {
        alsoThere:''
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
  },
  methods: {},
  mounted() {
    /* this.$store.dispatch('login'); */
  },
};
</script>

<style >
</style>