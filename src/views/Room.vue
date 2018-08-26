<template>
  <section class="room container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/rooms">Rooms</a></li>
        <li class="breadcrumb-item active" v-if="room" aria-current="page">{{ room.title }}</li>
      </ol>
    </nav>

    <div id="room-imgs" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#room-imgs" data-slide-to="0" class="active"></li>
        <li data-target="#room-imgs" data-slide-to="1"></li>
        <li data-target="#room-imgs" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://i.imgur.com/4LnD7e7.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://i.imgur.com/055DMYC.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://i.imgur.com/ougSPUF.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#room-imgs" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#room-imgs" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div v-if="room" class="room-info">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ room.title }} - <span class="room-subtitle">{{ room.description }}</span></h5>
          <hr>
          <div class="preview row mx-0">
            <div class="col-4">
              <img class="side-img-main" src="https://i.imgur.com/4LnD7e7.jpg" alt="">
              <div class="sideimgs row mx-0">
                <div class="col-6">
                  <img class="side-img" src="https://i.imgur.com/055DMYC.jpg" alt="">
                </div>
                <div class="col-6">
                  <img class="side-img" src="https://i.imgur.com/ougSPUF.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="room-info-table row">
                <div class="col-8 room-info-content">
                  <h2 class="room-info-title">Date</h2>
                  <HotelDatePicker @checkInChanged="checkInChanged" @checkOutChanged="checkOutChanged"/>
                  <button v-if="totalPrice" type="button" class="btn btn-primary btn-lg btn-block"><span class="price-tag">$ {{ totalPrice }}</span></button>
                </div>
                <div class="col-4 room-info-content">
                  <h2 class="room-info-title">Facilities</h2>
                  <p><i class="room-icon fas fa-smoking-ban" :class="{ available: 1 == (1 & room.metadata) }"></i> &nbsp;Non-smoking</p>
                  <p><i class="room-icon fas fa-shower" :class="{ available: 2 == (2 & room.metadata) }"></i> &nbsp;Shower</p>
                  <p><i class="room-icon fas fa-wifi" :class="{ available: 4 == (4 & room.metadata) }"></i> &nbsp;Free Wi-Fi</p>
                  <p><i class="room-icon fas fa-bed" :class="{ available: 8 == (8 & room.metadata) }"></i> &nbsp;1 single bed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Room',
  computed: {
    ...mapGetters({
      room: 'getRoom',
      tickets: 'getTickets',
      checkInUnix: 'getCheckInDateUnix',
      checkOutUnix: 'getCheckOutDateUnix',
      totalPrice: 'getTotalPrice',
      ticketIds: 'getTicketIds'
    })
  },
  async mounted () {
    let inventoryId = this.$route.params.inventory_id
    this.fetchRoom(inventoryId)
    this.fetchTickets(inventoryId)
  },
  methods: {
    checkInChanged (checkInDate) {
      let checkInDateUnix = (checkInDate.getTime() / 1000)
      this.setCheckInDate(checkInDateUnix)
    },
    checkOutChanged (checkOutDate) {
      let checkOutDateUnix = (checkOutDate.getTime() / 1000)
      this.setCheckOutDate(checkOutDateUnix)
    },
    ...mapActions(['fetchRoom', 'fetchTickets', 'setCheckInDate', 'setCheckOutDate'])
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: white;
  margin-top: 15px;
  padding: 0;
  padding-left: 20px;
}
.breadcrumb-item:not(:first-child)::before {
  content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
}
.carousel-item {
  max-height: 400px;
}
.container-flulid {
  padding: 0;
}
.room-info {
  margin: 15px 5px;
  .card {
    border-radius: 0px;
  }
  .card-title {
    width: 100%;
    display: inline-block;
  }
  .room-subtitle {
    color: grey;
    font-size: 1.0rem;
  }
  hr {
    margin: 0;
  }
}
.side-img-main, .side-img {
  width: 100%;
  cursor: zoom-in;
}
.side-img {
  margin-top: 5px;
  height: 100px;
}

.preview {
  background: #F7F7F7;
  padding: 15px 0px;
}

.preview > .col-4 {
  margin: 0;
  padding: 0;
}

.sideimgs.row > .col-6 {
  padding: 0px;
}

.sideimgs.row > .col-6:first-child {
  padding-right: 2px;
}

.sideimgs.row > .col-6:nth-child(2) {
  padding-left: 2px;
}

.room-info-title {
  font-size: 14px;
  font-weight: 700;
  color: #333;
}

.room-info-table {
  padding: 8px 3px;
  height: 340px;
  margin: 0px 15px;
  border: none;
  background: white;
  box-shadow: 0 2px 1px #e6e6e6;
}

.available {
  color: #93C769;
}

.price-tag {
  color: white;
}
</style>
