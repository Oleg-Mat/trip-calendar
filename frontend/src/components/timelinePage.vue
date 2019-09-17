<template>
  <div class="d-flex flex-column justify-content-start aling-content-center align-items-center w-100"  >
      <h3 class="mb-5">My timeline</h3>
      <timeLineElement v-if="timeline.length" :key='index' v-for="(period, index) in timeline" :dateStart="period.dateStartString" :dateEnd="period.dateEndString" :place="period.place" :img="period.src" :period="period"/>
      <button @click="$router.push('/addTimeline')" class="btn btn-success">
        Add new item
      </button>
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
        alsoThere:[]
    };
  },
  computed: {
 
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style >
</style>