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
      <p v-if= "alsoThere.length" class="font-weight-bold">Also there: 
        <!-- <img :key="key" v-for="(img,key) in alsoThere" :src="img" alt="" style="width:30px" class="rounded-circle"> -->
        <friendImage :key="key" v-for="(user,key) in alsoThere" :user="user" />
        </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import friendImage from '@/components/friendImage.vue'
export default {
    name: 'timeLineElement',
    components: {friendImage},
    props: ['dateStart','dateEnd','place','img','period'],
  data() {
    return {
      alsoThere:[]
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
    
    len: function() {
      console.log(this.alsoThere.lenght)
      return this.alsoThere.length;
    },

  },
  methods: {
    async getNearest() {
      let nearestFriends = await axios.get(
        `/api/timelineonperiod?dateStart=${this.period.dateStart}&dateEnd=${this.period.dateEnd}&place=${this.place}`,
        { withCredentials: true },
      );
      console.log(nearestFriends)
      nearestFriends = nearestFriends.data.map(el => el.userId);
      console.log(nearestFriends)
      this.alsoThere=nearestFriends
      
    },
  },
  mounted() {
   this.getNearest()
  },
};
</script>

<style >
</style>