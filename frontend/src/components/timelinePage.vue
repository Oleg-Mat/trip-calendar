<template>
  <div
    class="d-flex flex-column justify-content-start aling-content-center align-items-center w-100"
  >
    <timeLineElement
      v-if="timeline.length"
      :key="index"
      v-for="(period, index) in timeline"
      :dateStart="period.dateStartString"
      :dateEnd="period.dateEndString"
      :place="period.place"
      :img="period.src"
      :period="period"
    />
    <button @click="$router.push('/addTimeline')" class="btn btn-success">Add new item</button>
  </div>
</template>

<script>
import axios from 'axios';
import timeLineElement from '@/components/timeLineElement';
export default {
  name: 'timeLinePage',

  components: { timeLineElement },
  data() {
    return {
      alsoThere: [],
    };
  },
  computed: {
    user: function() {
      if (this.$route.params.userId === this.$store.state.user._id) {
        return this.$store.state.user;
      } else {
        return this.$store.state.friend;
      }
    },
    timeline() {
      if (this.$route.params.userId === this.$store.state.user._id) {
        return this.$store.state.userTimeline;
      } else {
        return this.$store.state.friendTimeline;
      }
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch('isLogin');
    this.$store.dispatch('getFriendInfo');
  },
};
</script>

<style >
</style>