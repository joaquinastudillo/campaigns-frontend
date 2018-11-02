<template>
    <div>
        <h1 class="display-4">Campaigns</h1>

                <campaign-item v-for="campaign in campaigns" :key="campaign.id" :campaign="campaign"></campaign-item>
        
    </div>
</template>

<script>
import CampaignItem from './CampaignItem'

    export default {
        name: 'CampaignList',
        components: {
            CampaignItem
        },
        created(){
            this.$store.dispatch('retrieveCampaigns')
        },
        computed: {
            campaigns(){
                return this.$store.getters.campaigns
            }
        }
    }
</script>
