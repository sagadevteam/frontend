<template>
  <section class="signup">
    <div class="text-center">
      <form class="form-signup">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
        <label for="email" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="password" class="sr-only">Password</label>
        <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" required="">
        <label for="password-again" class="sr-only">Password again</label>
        <input v-model="passwordAgain" type="password" id="password-again" class="form-control" placeholder="Password again" required="">
        <!--div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div-->
        <button v-on:click.prevent.self="submitForm" type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { api } from '@/config'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      passwordAgain: ''
    }
  },
  methods: {
    submitForm () {
      let apiUri = `http://${api.domain}:${api.port}/signup`
      let data = {
        email: this.email,
        password: this.password,
        passwordAgain: this.passwordAgain
      }

      axios.post(apiUri, data)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.form-signup {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
