<template>
	
	<nav>
	  <v-toolbar black class="white" app>
		  <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
		  <v-toolbar-title class="text-uppercase">
		    <span class="font-weight-light">CMS</span>
		  </v-toolbar-title>
		  <v-spacer></v-spacer>
           <!-- v-for="locale in $i18n.locales"
      :key="locale.code"-->
      <!--<nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>-->
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
            v-for="(item, index) in adminPages"
            :key="index"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    <!-- Language Selection Start-->
      <v-flex xs1>
        <!--<v-select
        :items="langs"
        v-model="langs[0]"
        label=""
        @change="goToPage(langs)"
        ></v-select>-->
        <v-select>
          <v-option v-for="lang in langs" :key="lang">
             {{lang}}
          </v-option>
        </v-select>
      </v-flex>
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
	          <v-list-group
	            v-for="item in items"
	            :key="item.title"
	            v-model="item.active"
	            :prepend-icon="item.icon"
	            no-action
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
	              :key="subItem.title"
	              @click=""
	            >
                <nuxt-link :to="subItem.path">
	                <v-list-tile-content>
	                	<v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
	                </v-list-tile-content>
                </nuxt-link>

	              <v-list-tile-action>
	                <v-icon>{{ subItem.action }}</v-icon>
	              </v-list-tile-action>
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
          	active:false
          },
          { 
          	title: 'Ecommerce', 
          	icon: 'dashboard' , 
          	path:'/ecommerce',
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
          	subItems:[
          		{title : 'contacts', icon: 'people', path:'/CRM/contacts'},
          		{title : 'customers', icon: 'people', path:'/CRM/customers'}
          	]
          },
          /*{ 
          	title: 'Home', 
          	icon: 'dashboard' , 
          	path:'/',
          	subItems:[
          		{title : '', icon: '', path:''}
          	]
          },*/
          { 
          	title: 'profile', 
          	icon: 'person' , 
          	path:'/profile',
          },
          { 
          	title: 'settings', 
          	icon: 'settings' , 
          	path:'/',
          },
          { 
          	title: 'Calendar', 
          	icon: 'calendar_today' , 
          	path:'/Calendar'
          },
        ],
        langs:["fr","en","it","ar"],
        adminPages: [
          {name:"Profile", path:"/profile", icon:"person"},
          {name:"Setting", path:"/settings", icon:"person"},
          {name:"Log Out", path:"/logout", icon:"person"},
        ]
      }
    },

    methods: {
      goToPage(lang){
        console.log(lang);
      }
    }
  }
</script>