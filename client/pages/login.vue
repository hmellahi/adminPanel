<template>
  <v-layout flex align-center justify-center text-xs-center >
   <v-flex xs10 md4>
    <v-card >
      <v-form class="shadow pa-3 mt-2" v-model="valid" ref="form">
         <v-icon class="success--text darken-5" x-large style="font-size:150px">account_circle</v-icon>
      	 <v-card-text>
            <v-text-field
            prepend-icon='person'
            v-model="username"
            :rules="userNameRules"
            label="Username"
            required 
            ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="pwdRules"
            label="Password"
            prepend-icon="lock"
            required
            type="password"
            ></v-text-field>
          <v-checkbox label="Remember Me" v-model="saveSession" value="false"></v-checkbox>
        </v-card-text>
            <v-btn
        		:disabled="!valid"
        		color="success"
        		@click="login"
            class="ml-3 text-xs-center "
            justify-center text-xs-center
      	  >
        		Login
      	  </v-btn>
          <v-divider></v-divider>
          <br>
          <h3 class="subheading">Don't have an account ?<nuxt-link to="/register"> Register Now!</nuxt-link></h3>
    	</v-form>
    </v-card>
   </v-flex>
  </v-layout>
</template>
<script>

let API = "http://localhost:5000/api/Users/login";
export default {
    data: () => ({
      valid: false,
      saveSession:false,
      username: '',
      userNameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 10 || 'Username must be greater than 10 characters'
      ],
      password:'',
      pwdRules: [
        v => !!v || 'Password is required',
        v => v.length >= 10 || 'Password must be greater than 10 characters'
      ],
    }),
    methods : {
     validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      login(){
        const data = {
          username: this.username,
          password: this.password,
        };
        let header = {
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        };

        fetch(API, header)
          .then(data => data.json())
          .then(response => router.push({name:"index"}))
          .catch(err => console.log(err))
      }
    },
    created(){
      let bcimg = require('../assets/img/bc.jpg');
    }
  }

</script>
<style JSX>	
/*body {
  width:100%;
  height:100%;
  position:absolute;
  background: url('`+img+`') no-repeat;
}*/
</style>