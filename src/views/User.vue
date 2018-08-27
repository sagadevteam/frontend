<template>
  <section class="user container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active"><a href="/user">Profile</a></li>
      </ol>
    </nav>

    <nav class="nav nav-tab">
      <!-- Cannot use router-link component with v-bind tag -->
      <a class="nav-link" v-bind:class="{ 'active': tab === 'profile' }" href="/user">Profile</a>
      <a class="nav-link" v-bind:class="{ 'active': tab === 'tickets' }" href="/user/tickets">Tickets</a>
    </nav>

    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      tab: ''
    }
  },
  mounted () {
    this.tab = this.$route.meta.tab
  }
}
</script>

<style scoped>
.nav-tab .active {
  border-bottom: 2px solid #007bff;
}
</style>
