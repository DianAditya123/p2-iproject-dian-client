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
      types: []
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
    }
  }
})
