<template>
  <div id="app">
    <saga-header></saga-header>
    <router-view/>
    <saga-footer></saga-footer>
  </div>
</template>

<script>
import SagaHeader from '@/components/SagaHeader'
import SagaFooter from '@/components/SagaFooter'
import Api from '@/components/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    SagaHeader, SagaFooter
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  mounted () {
    let apiUrl = '/authenticated'
    let self = this

    Api.get(apiUrl)
      .then((res) => {
        if (!self.isAuthenticated) {
          self.setUser(res.data.user)
        }
      })
      .catch(() => {
        // not authenticated, do nothing
      })
      .then(() => {
        // regist long poll
        window.setInterval(() => {
          Api.get(apiUrl)
            .then((res) => {
              if (!self.isAuthenticated) {
                self.setUser(res.data.user)
              }
            })
            .catch(() => {
              // reset user
              if (self.isAuthenticated) {
                self.setUser({})
              }
            })
        }, 2000)
      })
  },
  methods: {
    ...mapActions([
      'setUser'
    ])
  }
}
</script>

<style>
</style>
