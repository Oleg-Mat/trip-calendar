<template>
  <div class="google-map" :id="name"></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'google-map',
  props: ['name'],
  data: function() {
    return {
      map: '',
      lat: '',
      lng: '',
      markers:'',
    };
  },
  computed: {
    setCenter: function() {
      return this.map.setCenter(new google.maps.LatLng(this.lat, this.lng ) )
    }
  },
  mounted: async function() {
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position)
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
    });
    const element = document.getElementById(this.name);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(this.lng, this.lat),
    };
    this.map = new google.maps.Map(element, options);
      let markers= (await axios.get('/api/todaylocation')).data;
      console.log(markers);
      
      this.markers=markers;
     const markersArr=this.markers.map(marker=>{
       const latRand=0.02*Math.random()
       const lngRand=0.02*Math.random()
       const infowindow = new google.maps.InfoWindow({
          content: marker.userId.fullName
        });
       const newMarker= new google.maps.Marker({
            position: {lat:+marker.lat+latRand,lng:+marker.lng+lngRand},
            icon:{url:marker.userId.photo, scaledSize: new google.maps.Size(30, 30)},
          })
        newMarker.addListener('click', function() {
          infowindow.open(this.map, newMarker);
        });
        return newMarker
          })
      const markerCluster = new MarkerClusterer(this.map,markersArr,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      
      let marker = new google.maps.Marker({
      position: {lat: 41.3850639, lng: 2.1734035} ,
      map: this.map,
      icon: {url:'https://lh3.googleusercontent.com/-Rmudoi3nTsk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcrkDBwvcPUe7TvuEbo-onkb0SjQw/photo.jpg', scaledSize: new google.maps.Size(30, 30)}
  });
  },
  methods: {},
  watch: {
    lat: function() {
      return this.map.setCenter(new google.maps.LatLng(this.lat, this.lng ) )
    }
  },
  created() {
    
  }
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
