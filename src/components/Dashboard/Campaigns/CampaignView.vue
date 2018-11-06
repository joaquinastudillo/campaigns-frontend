<template>
    <div>
        <h1 class="display-4">Campaigns</h1>

        <div class="d-flex flex-row-reverse">
                    <div class="p-2"><button type="button" class="btn btn-primary" @click="createCampaign">Create new</button></div>
                    <div class="p-2"><button type="button" class="btn btn-primary" @click="showCampaigns">View Campaigns</button></div>
        </div> 

        <router-view></router-view>

    </div>

</template>

<script>
    export default {
        name: 'CampaignView',
        methods: {
            showCampaigns(){
                this.$router.push({
                    name: 'campaignView'
                })
            },
            createCampaign(){
                this.$router.push({
                    name: 'campaignNew'
                })
            }
        }
    }
</script>

