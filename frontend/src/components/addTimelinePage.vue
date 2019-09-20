<template>
  <div
    class="d-flex flex-column justify-content-start aling-content-center align-items-center w-100"
    style="height:95vh"
  >
    <h3 class="mb-5">Add new timeline</h3>
    <form @submit.prevent="addItem" class="w-100">
        <h5 class="align-self-start">Дата начала</h5>
        <input ref="start" class="w-100 mb-2" type="date" required />
        <h5 class="align-self-start">Дата конца</h5>
        <input ref="end" class="w-100 mb-2" type="date" required />
        <h5 class="align-self-start">Город</h5>
        <input v-model="place" class="pl-0 form-control w-100 mb-2" required />
        <button  class="btn btn-success">Add item</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import timeLineElement from '@/components/timeLineElement';
export default {
  name: 'addTimeLinePage',

  components: {},
  data() {
    return {
      place: '',
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
  },
  methods: {
    async addItem() {
        console.log(new Date(this.$refs.start.value))
      const user = await axios.post(
        '/api/timeline/',
        { userId: this.user._id, dateStart: this.$refs.start.value, dateEnd: this.$refs.end.value, place: this.place },
        { withCredentials: true },
      );
      await this.$store.dispatch('isLogin');
      this.$router.push(`/timeline/${this.user._id}`)
    },
  },
  mounted() {},
};
</script>

<style >
</style>