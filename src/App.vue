<template>
  <div id="app">
    <saga-header></saga-header>
    <router-view/>
  </div>
</template>

<script>
import SagaHeader from '@/components/SagaHeader'
export default {
  name: 'app',
  components: {
    SagaHeader
  }
}
</script>

<style>
</style>
