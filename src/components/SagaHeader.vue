<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Sign in</span></a>
          </li>
          <router-link tag="li" to="/signup" class="nav-item">
            <a class="nav-link">Sign up</a>
          </router-link>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'sage-header'
}
</script>

<style scoped>
</style>
