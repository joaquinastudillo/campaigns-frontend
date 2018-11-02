<template>
    <div></div>
</template>

<script>
export default {
    name: 'LogoutApp',
    created(){
        this.$store.dispatch('destroyToken')
        .then(() => {
            this.$router.push({name: 'login'})
        })
    }
}
</script>
