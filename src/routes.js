import LoginApp from './components/Auth/Login.vue'
import MainApp from './components/Dashboard/Main.vue'
import LogoutApp from './components/Auth/Logout.vue'
import CampaignView from './components/Dashboard/Campaigns/CampaignView.vue'
import CampaignList from './components/Dashboard/Campaigns/CampaignList.vue'
import CampaignNew from './components/Dashboard/Campaigns/CampaignNew.vue'
export const routes = [
   {
        path: '',
        component:  LoginApp,
        name: 'login',
        meta: {
            requiresVisitor: true
        }  
   },
   {
       path: '/dashboard',
       component: MainApp,
       name: 'dashboard',
       meta: {
           requiresAuth: true
       },
       children: [
           {
               path: 'campaigns',
               component: CampaignView,
               name: 'campaigns',
               children: [
                    {
                        path: 'view',
                        component: CampaignList,
                        name: 'campaignView'
                    },
                    {
                        path: 'new',
                        component: CampaignNew,
                        name: 'campaignNew'
                    }
               ]
           }
       ]
   },
   {
       path: '/logout',
       component: LogoutApp,
       name: 'logout'
   }
]