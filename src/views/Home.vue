<template>
  <section class="home">
    Home
    {{ roomsToday }}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'roomsToday'
    ])
  }
}
</script>

<style scoped>
</style>
