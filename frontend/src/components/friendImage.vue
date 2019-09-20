<template>
  <img @click="showUser" :src="user.photo" alt style="width:30px" class="rounded-circle" />
</template>

<script>
import axios from 'axios';
export default {
  name: 'friendImage',
  props: ['user'],
  data() {
    return {};
  },
  computed: {},
  methods: {
    async showUser() {
      await this.$store.dispatch('getFriendInfo', this.user._id);
      this.$router.push(`/userPage/${this.user._id}`);
    },
  },
  mounted() {},
};
</script>

<style >
</style>