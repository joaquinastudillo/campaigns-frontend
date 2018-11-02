<template>
    <div>
        <form class="form-signin" @submit.prevent="login">
            <img class="mb-4" src="" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" autocomplete="off" v-model="username">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" autocomplete="off" v-model="password">
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
    </div>
</template>

<script>
export default {
  name: 'LoginApp',
  data(){
      return {
          username: '',
          password: ''
      }
  },
  methods: {
      login(){
          this.$store.dispatch('retrieveToken', {
              username: this.username,
              password: this.password
          })
          .then(response => {
            this.$router.push({name: 'dashboard'})
          })
      }
  }
};
</script>


