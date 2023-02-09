<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { mapWritableState } from 'pinia';
import { useCounterStore } from './stores/counter';

export default {
  components :{
    Navbar,
    Footer
  },
  computed: {
    ...mapWritableState(useCounterStore, ['isAuth'])
  },
  created(){
    if (localStorage.access_token) {
      this.isAuth = true
    } else {
      this.isAuth = false
    }
  }
}
</script>

<template>
  <Navbar />
  <RouterView></RouterView>
  <Footer/>
</template>