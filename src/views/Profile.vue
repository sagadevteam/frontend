<template>
  <div class="media">
    <img class="align-self-start mr-3" src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Profile image">
    <div class="media-body">
      <h5 class="mt-0">Profile</h5>
      <p>Email: {{ user.email }}</p>
      <p>Eth address: {{ user.eth_addr }}</p>
      <p>Eth value: {{ user.eth_value }}</p>
      <p>Eth saga point: {{ user.saga_point }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style scoped>
</style>
