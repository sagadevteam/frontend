<template>
  <section class="home container">
    <div class="row">
      <div class="col-lg-4" v-for="(room, index) in rooms" v-bind:key="index+room">
        <div class="card mx-0 my-3">
          <img class="card-img-top" :src="room.img" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ room.title }} {{ room.inventory_id }}</h5>
            <p class="card-text">{{ room.description }}</p>
            <p class="card-text">
              <span class="red-text">{{ room.start_time }}</span> ~ <span class="red-text">{{ room.end_time }}</span>
            </p>
            <a href="#" class="btn btn-primary">Book now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      rooms: 'getRooms'
    })
  },
  async mounted () {
    this.getRooms()
  },
  methods: {
    ...mapActions(['getRooms'])
  }
}
</script>

<style scoped>
.card {
  padding: 0px;
  margin: 0px 15px;
}
.card-title {
  color: rgba(0,0,0,.75);
}
.card-img-top {
  height: 200px;
}
.red-text {
  color: #0283df;
}
</style>
