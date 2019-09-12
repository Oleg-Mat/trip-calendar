<template>
  <div class="d-flex flex-column align-items-center w-100">
      <h3 class="mb-5">My timeline</h3>
      <timeLineElement :key='index' v-for="(period, index) in timeline" :dateStart="period.dateStartString" :dateEnd="period.dateEndString" :place="period.place" :img="period.src"/>
  </div>
</template>

<script>
import axios from 'axios';
import timeLineElement from '@/components/timeLineElement';
export default {
    name: 'timeLinePage',
    props: ['timeline'],
    components: {timeLineElement},
  data() {
    return {
        alsoThere:''
    };
  },
  computed: {
    
  },
  methods: {},
  mounted() {
  },
};
</script>

<style >
</style>