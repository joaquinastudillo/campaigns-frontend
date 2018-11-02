<template>
    <div class="media main-navbar">
            <div class="media-body">
                        <h5 class="mt-0">{{ name }}</h5>
                        {{ description }}
            </div>
    </div>        
</template>

<script>
    export default {
        name: 'CampaignItem',
        data(){
            return {
                'id': this.campaign.id,
                'description': this.campaign.description,
                'name': this.campaign.name,
                'status': this.campaign.status,
                'user_id': this.campaign.user_id
            }
        },
        props: {
            campaign: {
                type: Object,
                required: true
            }
        }
    }
</script>