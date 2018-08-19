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

export default {
  name: 'app',
  components: {
    SagaHeader, SagaFooter
  }
}
</script>

<style>
</style>
