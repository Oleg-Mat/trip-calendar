<template>
  <div class="w-100 h-100 d-flex flex-column mt-0">
    <googlemap :name="name"></googlemap>
  </div>
</template>
<script>
    import googlemap from '@/components/map.vue'

    export default {
        data: function () {
            return {
                name: 'map',
                  }
        },
        mounted: function () {
        },
        components: {googlemap}
    }
</script>