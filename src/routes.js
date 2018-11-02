import LoginApp from './components/Auth/Login.vue'
import MainApp from './components/Dashboard/Main.vue'
import LogoutApp from './components/Auth/Logout.vue'
import CampaignList from './components/Dashboard/Campaigns/CampaignList.vue'
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
               component: CampaignList,
               name: 'campaigns'
           }
       ]
   },
   {
       path: '/logout',
       component: LogoutApp,
       name: 'logout'
   }
]