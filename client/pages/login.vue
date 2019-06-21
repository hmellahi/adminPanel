<template>
  <v-layout flex align-center justify-center text-xs-center >
   <v-flex xs10 md4>
    <v-card >
      <v-form class="shadow pa-3" v-model="valid" ref="form">
	      <v-icon class="secondary--text" x-large style="font-size:150px">person_add</v-icon>
	      <v-card-text>
	        <v-layout row wrap>
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
		          ></v-text-field>
		        </v-flex>
	        </v-layout>
			
			<v-text-field
	        prepend-icon='person'
	        v-model="username"
            :rules="userNameRules"
            label="Username"
            required 
            class="pr-5"
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
            required
            ></v-text-field>

            <v-text-field
            prepend-icon="lock"
            v-model="confirmPassword"
            :rules="rules"
            label="Confirm Password"
            ></v-text-field>

	      </v-card-text>
    	  <v-card-actions>
	          <v-btn
	      		:disabled="!valid"
	      		color="success"
	      		@click="validate"
	      		class="ml-3"
	    	  >
	      		Validate
	    	  </v-btn>
	      </v-card-actions>
	    </v-container>
      </v-form>
    </v-card>
   </v-flex>
  </v-layout>
</template>
<script>
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
        v => v.length <= 10 || 'Password must be greater than 10 characters'
      ],
    }),
    methods : {
     validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
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