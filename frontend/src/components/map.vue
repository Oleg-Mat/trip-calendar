<template>
  <div class="google-map" :id="name"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function() {
    return {
      map: '',
    };
  },
  computed: {
    mapMarkers: function() {
      return this.markers;
    },
  },
  mounted: function() {
    const element = document.getElementById(this.name);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(59.93, 30.32),
    };
    this.map = new google.maps.Map(element, options);
  },
  methods: {},
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 95vh;
  margin: 0 auto;
  background: gray;
}
</style>
