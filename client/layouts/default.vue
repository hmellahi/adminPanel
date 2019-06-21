<template>
  <v-app>
    <Sidebar v-if="!isAuthPage"/>
    <v-content :class="!isAuthPage ? 'grey lighten-4' : 'secondary lighten-2'" align-center>
      <nuxt class="mt-5"/>
    </v-content>
  </v-app>
</template>

<script>
// IMPORT Components
import Nav from '~/components/navbar.vue'
import Sidebar from '~/components/sidebar.vue'

export default {
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
  //...mapGetters(['appTitle']),
  //...mapMutations(['setRoute']),
  mounted(){
    //console.log($nuxt.$route.path);
    let path = $nuxt.$route.path;
    if(path == "/login" || path == "/register"){
      this.isAuthPage = true;
    }else {
      this.isAuthPage = false;
    }
    let arr = path.split('/');
    let currentPage = arr[arr.length - 1];
    if(!path || path == null || path == ""){
      document.title = "Dashboard";
    }else {
      document.title = this.capitalize(currentPage);
    }
    // /kaka/baba/dd => dd
  },
  methods: {
    capitalize(s){
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
}
</script>

