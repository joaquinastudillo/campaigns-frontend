import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = 'https://campaignsapi.herokuapp.com/api'

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        campaigns: [],
        stores: [],
        products: []
    },
    getters: {
        loggedIn(state){
            return state.token !== null
        },
        campaigns(state){
            return state.campaigns
        },
        stores(state){
            return state.stores
        },
        products(state){
            return state.products
        }
    },
    actions: {
        retrieveProducts(context){
            axios.get('/products')
            .then(response => {
                context.commit('retrieveProducts', response.data.data)
            })
        },
        retrieveStores(context){
            axios.get('/stores')
            .then(response => {
                context.commit('retrieveStores', response.data.data)
            })
        },
        retrieveCampaigns(context){
            axios.get('/campaigns')
            .then(response => {
                context.commit('retrieveCampaigns', response.data.data)
            })
        },
        retrieveToken(context, credentials){
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    username: credentials.username,
                    password: credentials.password
                })
                .then(response => {
                    const token = response.data.access_token
                    localStorage.setItem('access_token', token)
                    context.commit('retrieveToken', token)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        destroyToken(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            if(context.getters.loggedIn){
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                    .then(response => {
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        resolve(response)
                    })
                    .catch(error => {
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        reject(error)
                    })
                })
            }

        }
    },
    mutations: {
        retrieveProducts(state, products){
            state.products = products
        },
        retrieveStores(state, stores){
            state.stores = stores
        },
        retrieveCampaigns(state, campaigns){
            state.campaigns = campaigns
        },
        retrieveToken(state, token){
            state.token = token
        },
        destroyToken(state){
            state.token = null
        }
    }
})