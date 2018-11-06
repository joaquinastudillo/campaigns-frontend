<template>
    <div class="media main-navbar campaign-item">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">{{ name }}</h5>
                    {{ description }}
                </div>
                <div class="ml-3 success-box" v-if="status == 1">
                    Created
                </div>
                <div class="ml-3 warning-box" v-else-if="status == 2">
                    Between
                </div>
                <div class="ml-3 danger-box" v-else>
                    Closed
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

<style>
.main-navbar{
    padding: 20px 0px 0px 0px;
}
.campaign-item{
    border: 1px solid #ced4da;
    border-radius: 12px;
    padding: 20px;
    margin-top: 10px;
}
.success-box{
    border: 1px solid #c3e6cb;
    border-radius: 10px;
    padding: 3px;
    font-size: 0.8em;
    background-color: #d4edda;
    color: #4f925f;
}
.warning-box{
    border: 1px solid #ffeeba;
    border-radius: 10px;
    padding: 3px;
    font-size: 0.8em;
    background-color: #fff3cd;
    color: #8a7b4d;
}
.danger-box{
    border: 1px solid #f5c6cb;
    border-radius: 10px;
    padding: 3px;
    font-size: 0.8em;
    background-color: #f8d7da;
    color: #a27d80;
}
</style>