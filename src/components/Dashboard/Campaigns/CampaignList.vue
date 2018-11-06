<template>
    <div>       
                <br>
                <div class="form-row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Search..." v-model="search">
                    </div>
                </div>
                <campaign-item v-for="campaign in campaigns" :key="campaign.id" :campaign="campaign"></campaign-item>
    </div>
</template>

<script>
import CampaignItem from './CampaignItem'

    export default {
        name: 'CampaignList',
        data(){
            return {
                search: ''
            }
        },
        components: {
            CampaignItem
        },
        created(){
            this.$store.dispatch('retrieveCampaigns')
        },
        computed: {
            campaigns(){
                return this.$store.getters.campaigns.filter((campaign) => {
                    return campaign.name.toUpperCase().match(this.search.toUpperCase())
                })
            }
        }
    }
</script>