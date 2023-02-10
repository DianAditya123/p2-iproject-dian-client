import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const BASE_URL = 'http://localhost:3000'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      isAuth: false,
      Phs: [],
      fotos: [],
      types: [],
      carts: []
    }
  },
  getters: {},
  actions: {
    async login(email, password) {
      try {
        let {data} = await axios({
          method: "post",
          url: BASE_URL + '/login',
          data: {
            email, password
          }
        })
        localStorage.setItem("access_token", data.access_token)
        this.router.push('/')
        this.isAuth = true
      } catch (error) {
        console.log(error);
      }
    },

    async register(username, email, password, phoneNumber){
      try {
        let {data} = await axios({
          method: 'post',
          url: BASE_URL + "/register",
          data: {
            username, email, password, phoneNumber
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    async fetchPh(){
      try {
        let {data} = await axios({
          method: "get",
          url: BASE_URL + "/ph"
        })
        this.Phs = data
      } catch (error) {
        console.log(error);
      }
    },

    async fetchFoto(){
      try {
        let {data} = await axios({
          method: 'get',
          url: BASE_URL + "/foto"
        })
        this.fotos = data
      } catch (error) {
        console.log(error);
      }
    },

    async fetchType(){
      try {
        let {data} = await axios({
          method: 'get',
          url: BASE_URL + '/type'
        })
        this.types = data
      } catch (error) {
        console.log(error);
      }
    },

    async addCart(PhotograferId, TypeId, address, date){
      try {
        let {data} = await axios({
          method: 'post',
          url: BASE_URL + '/cart',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            PhotograferId,
            TypeId,
            address,
            date
          }
        })
        this.router.push('/foto')
      } catch (error) {
        console.log(error);
      }
    },

    async showCart(){
      try {
        let {data} = await axios({
          method: 'get',
          url: BASE_URL + '/cart',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.carts = data
      } catch (error) {
        console.log(error);
      }
    },

    async updateStatus(id){
      try {
        let {data} = await axios({
          method: "patch",
          url: BASE_URL + `/cart/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.showCart()
      } catch (error) {
        console.log(error);
      }
    },
    
    async payment(id){
      try {
        let {data} = await axios({
          method: "post",
          url: BASE_URL + `/generate-token/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })

        const cb = this.updateStatus

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            cb(id)
            alert("payment success!"); console.log(result);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
})
