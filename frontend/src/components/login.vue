<template>
  <div class="w-100 d-flex flex-column justify-content-center" style="height:95vh">
    <a href="/api/login">
      <img style width="100px" src="/login.png" alt />
      <p class="text-info" style="font-size:x-large">Login with google</p>
    </a>
    <!--     <button  @click="login"class="mt-5 btn btn-success">qqqqq</button> -->
  </div>
</template>

<script>
import axios from 'axios';
import timeLineElement from '@/components/timeLineElement';
export default {
  name: 'login',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    // login() {
    //    axios.get('/api/login/', { withCredentials: true })
    //   .then((res) => {
    //     router.push('userPage')
    //   })
    //   .catch(err=>{
    //     colnsole.log(err)
    //   })
    // },
    // isLogin() {
    //   axios.get('/api/logged/', { withCredentials: true }).then(res => {
    //     this.$router.push('/userPage')
    //   });
    // }
  },
  async mounted() {
    await this.$store.dispatch('isLogin');
  },
};
</script>

<style >
</style>