<template>
  <v-app>
    <Sidebar v-if="!isAuthPage"/>
    <v-content :class="!isAuthPage ? 'grey lighten-4' : 'cover'">
      <div v-if="isAuthPage" class="overlay">
        <nuxt class="mt-5 mx-5"/>
      </div>
      <nuxt v-else class="mt-5 mx-5"/>
    </v-content>
  </v-app>
</template>

<script>
// IMPORT Components
import Nav from '~/components/navbar.vue'
import Sidebar from '~/components/sidebar.vue'

export default {
  head(){
    return {
      title : this.getTitle()
    }
  },
  components : {
    Nav,
    Sidebar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isAuthPage:false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    capitalize(s){
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    getTitle(){
      let path = $nuxt.$route.path;
      if(path == "/login" || path == "/register"){
        this.isAuthPage = true;
      }else {
        this.isAuthPage = false;
      }
      let arr = path.split('/');
      let currentPage = arr[arr.length - 1];
      return (currentPage == null || currentPage == "") ? "Dashboard" : this.capitalize(currentPage);
    }
  },
  computed : {
    bc(){
      let bcimg = require('../assets/img/bc.jpg');
      console.log("hell");
      return this.isAuthPage ? `url(${bcimg}) no-repeat` : ''
    }
  }
}
</script>

