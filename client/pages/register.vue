<template>
  <v-layout flex align-center justify-center text-xs-center >
   <v-flex xs10 md4>
    <v-card class="mt-3 shadow">
      <v-form class="shadow pa-3" v-model="valid" ref="form">
	      <v-icon class="success--text darken-5" x-large style="font-size:150px">person_add</v-icon>
	      <v-card-text>
	        <!--<v-layout row wrap>
		        <v-flex xs12 md6>
		          <v-text-field
		            v-model="firstname"
		            :rules="nameRules"
		            label="First name"
		            required 
		            class="ml-2"
		          ></v-text-field>
		        </v-flex>
		        <v-flex xs12 md6>
		          <v-text-field
		            v-model="lastname"
		            :rules="nameRules"
		            label="Last name"
		            required
                type="password"
		          ></v-text-field>
		        </v-flex>
	        </v-layout>-->
			
			<v-text-field
	        prepend-icon='person'
	        v-model="username"
            :rules="userNameRules"
            label="Username"
            required 
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            prepend-icon="email"
            ></v-text-field>

	        <v-text-field
            v-model="password"
            :rules="pwdRules"
            label="Password"
            prepend-icon="lock"
            type="password"
            required
            ></v-text-field>

            <v-text-field
            prepend-icon="lock"
            v-model="confirmPassword"
            :rules="rules"
            label="Confirm Password"
            type="password"
            required
            ></v-text-field>

            <v-checkbox label="Respect The policies" :rules="policyRules" required></v-checkbox>

	      </v-card-text>
	      <v-btn
	      		:disabled="!valid"
	      		color="success"
	      		@click="register"
	    	  >
	      		Validate
	    	</v-btn>
         <v-divider ></v-divider>
         <h3 class="subheading">Already have an account ?</h3>
         <h2 class="subheading"><nuxt-link to="/login"> Sign In</nuxt-link></h2>
	    </v-container>
      </v-form>
    </v-card>
   </v-flex>
  </v-layout>
</template>
<script>
let API = "http://localhost:5000/api/Users";
export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      username:'',
      confirmPassword:'',
      userNameRules: [
      	v => !!v || 'Username is required',
        v => v.length >= 10 || 'Username must be great than 10 characters'
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length >= 10 || 'Name must be great than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password:'',
      pwdRules: [
        v => !!v || 'Password is required',
        v => v.length >= 10 || 'Password must be greater than 10 characters'
      ],
      policyRules : [(v) => !!v || 'You must agree our policies dude...']
    }),
    methods : {
     register () {
        if (this.$refs.form.validate()) {
          this.snackbar = true;

          // Register the user to the DB
          const data = {
            username: this.username,
            email   : this.email,
            password: this.password
          };
          let header = {
            method:"POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          };

          fetch(API, header)
            /* 
              If the user registred succefully 
              then redirect the user to the dashboard
              otherwise show the error on the console
            */
            .then(data => data.json())
            .then(response => this.$router.push({name:"index"}) )
            .catch(err => console.log(err))
        }
      },
    },
    computed: {
      rules () {
        const rules = []
        if (this.password) {
          const rule =
            v => (!!v && v) === this.password ||
              'Values do not match'

          rules.push(rule)
        }
        return rules
      }
    },
    watch: {
      match: 'validateField',
      max: 'validateField',
      model: 'validateField'
    }
  }
</script>
<style>	
</style>