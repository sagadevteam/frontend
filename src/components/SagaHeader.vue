<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <router-link tag="a" to="/" class="navbar-brand">SAGA</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">1 ETH = 3000 SAGA<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Rooms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-show="isAuthenticated">Profile</a>
          </li>
          <li class="nav-item" v-show="isAuthenticated">
            <a class="nav-link" v-on:click.prevent.self="logout">Logout</a>
          </li>
          <router-link tag="li" to="/login" class="nav-item" v-show="!isAuthenticated">
            <a class="nav-link">Login</a>
          </router-link>
          <router-link tag="li" to="/signup" class="nav-item" v-show="!isAuthenticated">
            <a class="nav-link">Sign up</a>
          </router-link>
        </ul>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Api from '@/components/api'

export default {
  name: 'sage-header',
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    logout () {
      let apiUri = '/logout'

      Api.post(apiUri, null)
        .then((res) => {
          let data = res.data

          window.alert(data.msg)
          this.$router.push('/')
        })
        .catch((err) => {
          console.warn(err)
        })
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #515b62 !important;
}
</style>
