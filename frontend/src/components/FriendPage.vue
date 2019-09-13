<template>
  <div class="w-100 d-flex flex-column h-100">
    <img
      class="mb-2 h-25 rounded-circle flex-grow-0 align-self-center"
      style="width:100px"
      :src="user.photo"
      alt="userimage"
    />
    <h4>{{user.fullName}}</h4>
    <p class="mb-5">{{user.company}}</p>

    <div class="rounded bg-light text-left p-2 mb-1">
      <p class="align-self-start mb-1">Email</p>
      <h5 class="align-self-start">{{user.email}}</h5>
    </div>
    <div class="rounded bg-light text-left p-2 mb-1">
      <p class="align-self-start mb-1">Password</p>
      <h5 class="align-self-start mb-1">*******</h5>
    </div>
    <div class="rounded bg-light text-left p-2 mb-1">
      <h5 class="align-self-start mb-1">Company</h5>
      <p class="align-self-start">{{user.company}}</p>
    </div>
    <div class="rounded bg-light text-left p-2 mb-1">
      <h5 class="align-self-start mb-1">Website</h5>
      <p class="align-self-start">{{user.website}}</p>
    </div>

    <ul class="mt-3 list-group">
      <li
        @click="showTimeline"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        My timeline
        <span class="badge badge-primary badge-pill">></span>
      </li>
      <li
        @click="showMap"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Map
        <span class="badge badge-primary badge-pill">></span>
      </li>
    </ul>

    <div class="w-100 d-flex flex-column align-items-start mt-3">
      <h5 class="mb-3">Upcomming events</h5>
      <timeLineElement
        :dateStart="nearest.dateStartString"
        :dateEnd="nearest.dateEndString"
        :place="nearest.place"
        :img="nearest.src"
        :alsoThere="alsoThere"
        :period="nearest"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import timeLineElement from '@/components/timeLineElement';
export default {
  components: { timeLineElement },
  data() {
    return {
      alsoThere: [],
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
    nearest: function() {
      return this.$store.state.userTimeline[0];
    },
  },
  methods: {
    showTimeline() {
      this.$router.push({ name: 'timeLine', params: { timeline: this.$store.state.userTimeline } });
    },
    showMap() {
      this.$router.push({ name: 'mapPage' });
    },
    
  },
  async mounted() {
    if (this.user.userId===''&&this.nearest.place===''){
    await this.$store.dispatch('isLogin');
    }
  },
};
</script>

<style >
</style>