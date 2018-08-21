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
        <button v-on:click.prevent.self="submitForm" type="submit" class="btn btn-lg btn-primary btn-block">Sign up</button>
      </form>
    </div>
  </section>
</template>

<script>
import Api from '@/components/api'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      passwordAgain: '',
      error: {}
    }
  },
  methods: {
    submitForm () {
      let apiUri = `/signup`
      let data = {
        email: this.email,
        password: this.password,
        password_again: this.passwordAgain
      }

      Api.post(apiUri, data)
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
