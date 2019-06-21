<template>
  <v-layout flex align-center justify-center text-xs-center >
   <v-flex xs10 md4>
    <v-card >
      <v-form class="shadow pa-3" v-model="valid" ref="form">
         <v-icon class="secondary--text" x-large style="font-size:150px">account_circle</v-icon>
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
    	</v-form>
    </v-card>
   </v-flex>
  </v-layout>
</template>
<script>
export default {
    data: () => ({
      valid: false,
      username: '',
      userNameRules: [
        v => !!v || 'Username is required',
        v => v.length <= 10 || 'Username must be less than 10 characters'
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
    }
  }
</script>
<style>	
</style>