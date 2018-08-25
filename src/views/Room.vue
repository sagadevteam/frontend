<template>
  <section class="room container">
    {{ roomId }}
  </section>
</template>

<script>

export default {
  name: 'Room',
  data () {
    return {
      roomId: this.$route.params.inventory_id
    }
  }
}
</script>

<style scoped>
</style>
