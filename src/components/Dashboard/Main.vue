<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
                <a class="nav-item nav-link" @click="logOut">Logout</a>
                </div>
            </div>
        </nav>

        <div class="container main-navbar">
            <nav class="nav nav-pills flex-column flex-sm-row">
                <a class="flex-sm-fill text-sm-center nav-link active" @click="getCampaigns">Campaigns</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
            </nav>
        </div>

        <div class="container main-navbar">

            <router-view></router-view>

        </div>

    </div>

    
</template>

<script>
export default {
  name: "MainApp",
  methods: {
    logOut() {
      this.$router.push({ name: "logout" });
    },
    getCampaigns(){
        this.$router.push({
            name: 'campaigns'
        })
    }
  }
};
</script>

<style>
.main-navbar{
    padding: 20px 0px 0px 0px;
}
</style>

