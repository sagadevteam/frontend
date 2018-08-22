<template>
  <section class="login">
    <div class="text-center">
      <form class="form-login">
        <h3 class="mb-3 font-weight-normal">Login</h3>
        <h5 class="mb-3 font-weight-normal" v-show="msg.length > 0">{{ msg }}</h5>
        <div class="form-group">
          <label for="email" class="sr-only">Email address</label>
          <input v-model="email" type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
           <small class="form-text text-left text-danger" v-show="err.email">{{ err.email }}</small>
        </div>

        <div class="form-group">
          <label for="password" class="sr-only">Password</label>
          <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" required="">
          <small class="form-text text-left text-danger" v-show="err.password">{{ err.password }}</small>
        </div>

        <!--div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div-->
        <button v-on:click.prevent.self="submitForm" type="submit" class="btn btn-lg btn-primary btn-block" v-bind:disabled="submitted">Login</button>
      </form>
    </div>
  </section>
</template>

<script>
import Api from '@/components/api'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      err: {},
      msg: '',
      submitted: false
    }
  },
  methods: {
    submitForm () {
      let apiUri = `/login`
      let data = {
        email: this.email,
        password: this.password
      }

      this.submitted = true

      Api.post(apiUri, data)
        .then((res) => {
          let data = res.data

          this.msg = data.msg
          this.err = {}
          this.$router.push("/")
        })
        .catch((err) => {
          if (err.response) {
            let data = err.response.data

            this.msg = data.msg

            if (data.err !== undefined) {
              this.err = data.err
            }
          } else {
            console.warn(err)
          }
        })
        .then(() => {
          this.submitted = false
        })
    }
  }
}
</script>

<style scoped>
.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
