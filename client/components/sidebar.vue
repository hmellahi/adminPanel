<template>
	
	<nav>
	  <v-toolbar dense class="white py-3" app>
		  <v-toolbar-side-icon @click="drawer = !drawer" teal></v-toolbar-side-icon>
		  <v-toolbar-title class="text-uppercase">
		    <span class="font-weight-grey">CMS</span>
		  </v-toolbar-title>
		  <v-spacer></v-spacer>
        <v-menu offset-y class="mx-3">
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <span class="subheading">{{ admin.name }}</span>
              <v-avatar size="50">
                <img :src="admin.avatar" alt="">
              </v-avatar>
            </div>
          </template>
          <v-list>
            <v-list-tile
              v-for="(page, index) in adminPages"
              v-bind:key="index"
              @click=""
              :prepend-icon="page.icon"
            >
              <v-list-tile-title>
                <nuxt-link :to="page.path">
                  <v-icon> {{ page.icon }} </v-icon>{{ page.name }}
                </nuxt-link>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      <!-- Language Selection Start-->
          <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
          <!--<select>
            <option :to="switchLocalePath(locale.code)" v-for="lang in availableLocales" :key="lang.name" :value="lang.name">
               {{lang.name}}
            </option>
          </select>
          -->
      <!-- Language Selection End-->
		</v-toolbar>
		<v-navigation-drawer
		  v-model="drawer"
		  app class="white"
		>
		  <v-layout flex justify-center align-center text-xs-center>
  			<v-flex class="mt-5 mb-4">
  				<v-avatar size="100">
  					<img :src="admin.avatar" alt="">
  				</v-avatar>
  				<h2 dark class="subheading mt-1 dark">
  					{{ admin.name }}
  				</h2>
  			</v-flex>
		  </v-layout>
		   <v-list>
            <v-list-tile
            v-if="!item.subItems"
            :key="item.title"
            v-model="item.active"
            v-for="item in items"
            :to="item.path"
            >
               <v-icon>{{ item.icon }} </v-icon>
               <v-list-tile-title class="ml-4" dark>{{ $t(`${item.title}`) }}</v-list-tile-title>
            </v-list-tile>
	          <v-list-group
	            v-for="item in items"
	            v-bind:key="item.title"
	            v-model="item.active"
	            :prepend-icon="item.icon"
              v-if="item.subItems"
	          >
	            <template v-slot:activator >
	              <v-list-tile >
	                <v-list-tile-content>
	                  <v-list-tile-title dark>{{ $t(`${item.title}`) }} </v-list-tile-title>
	                </v-list-tile-content>
	              </v-list-tile>
	            </template>

	            <v-list-tile
	              v-for="subItem in item.subItems"
	              v-bind:key="subItem.title"
	              @click=""
                :to="subItem.path"
	            >
                <v-list-tile-content>
                	<v-list-tile-title dark class="ml-4" dark>{{ $t(`${subItem.title}`) }}</v-list-tile-title>
                </v-list-tile-content>
	            </v-list-tile>
	          </v-list-group>

        	</v-list>
		</v-navigation-drawer>
	</nav>

</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        admin : {
        	name:"John Doe",
        	avatar:require('../assets/img/avatar.png')
        },
        items: [
          { 
          	title: 'dashboard', 
          	icon: 'dashboard' , 
          	path:'/',
          	active:false,
          },
          { 
            title: 'Users', 
            icon: 'people' , 
            path:'/users',
            active:false,
          },
          { 
          	title: 'Ecommerce', 
          	icon: 'dashboard' , 
          	path:'/ecommerce',
            active:false,
          	subItems:[
          		{title : 'sellers', icon: 'sell', path:'/ecommerce/sellers'},
          		{title : 'products', icon: 'sell', path:'/ecommerce/products'},
          		{title : 'orders', icon: 'sell', path:'/ecommerce/orders'}
          	]
          },
          { 
          	title: 'CRM', 
          	icon: 'people' , 
          	path:'/CRM',
            active:false,
          	subItems:[
          		{title : 'contacts', icon: 'people', path:'/CRM/contacts'},
          		{title : 'customers', icon: 'people', path:'/CRM/customers'}
          	]
          },
          {
          	title: 'profile', 
          	icon: 'person' , 
          	path:'/profile',
            active:false
          },
          { 
          	title: 'settings', 
          	icon: 'settings' , 
          	path:'/settings',
            active:false
          },
          { 
          	title: 'Events', 
          	icon: 'calendar_today' , 
          	path:'/events',
            active:false,
          },
        ],
        langs:["fr","en","it","ar"],
        adminPages: [
          {name:"Profile", path:"/profile", icon:"person"},
          {name:"Setting", path:"/settings", icon:"settings"},
          {name:"LogOut", path:"/logout", icon:"exit_to_app"},
        ]
      }
    },

    methods: {
      goToPage(lang){
        console.log(lang);
      }
    },
    computed :{
       availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>