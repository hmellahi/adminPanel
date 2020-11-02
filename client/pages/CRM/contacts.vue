<template>
	<!--<v-layout row shadow>
		<v-flex xs6>
			<v-text-field
	        v-model="search"
	        append-icon="search"
	        label="Search"
	        single-line
	        hide-details
	        xs3
	      ></v-text-field>
		</v-flex>
      <v-flex xs6>
      	<h2>Sort By:</h2>
        <v-select
          v-model="select"
          :items="items"
          item-text="item"
          item-value="item"
          label="Select"
          return-object
          single-line
        ></v-select>
      </v-flex>
      <v-btn class="right"><v-icon>add</v-icon>Add New Contact</v-btn>
	</v-layout>-->

	<v-container>
	  <v-dialog
        v-model="addModel"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            <v-icon>add</v-icon> Add New Contact
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Add A Contact
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Name"
              single-line
              solo
              v-model="contact.name"
            ></v-text-field>
            <v-text-field
              label="Email"
              single-line
              solo
              v-model="contact.email"
            ></v-text-field>
            <v-text-field
              label="Balance"
              single-line
              solo
              type="number"
              v-model="contact.phone"
            ></v-text-field>
            <v-text-field
              label="Balance"
              single-line
              solo
              type="number"
              v-model="contact.rating"
            ></v-text-field>
            <div class="upload-btn-wrapper">
              <button class="btn">Upload Profile Img</button>
              <input type="file" name="myfile" ref="file" @change="handleFileUpload()"/>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              class="success"
              flat
              @click="addContact()"
            >
              Add
            </v-btn>
            <v-btn
              class="primary"
              color="white"
              flat
              @click="addModel = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
		<v-layout row wrap text-xs-center >
		  <v-flex xs12 md3 class=" light" v-for=" contact in contacts" :key="contact.name">
			<v-card id="contact" class="light shadow ma-2" style="background:transparent;">
				<v-card-text>
					<v-avatar size="100">
						<img :src="profileImg(contact.avatar)" alt="avatar">
					</v-avatar>
					<h2 class="headline">{{ contact.name }}</h2>
					<h2 class="subheading grey--text">{{ contact.phone}}</h2>
					<div class="rating">
						<v-icon v-for="(n,i) in 5" :key="i" color="light darken-1">star</v-icon>
						<!--<span class="sub">
							<v-icon v-for="n in 4" color="secondary darken-1">star</v-icon>
						</span>-->
					</div>
					<v-btn color="light darken-1">Take appointement</v-btn>
				</v-card-text>
			</v-card>
		  </v-flex>
		</v-layout>
	</v-container>		

</template>	

<script>
	
export default {
	data(){
		return {
			select:"Name",
			items : ["Name", "Recent"],
			addModel:false,
			contact: {
				avatar:"",
				name:"",
				phone:"",
				email:"",
				rating:3,
				created_at:""
			}
		}
	},
	fetch ({store}) {
      store.dispatch('contacts/getContacts') // Trigger GetContacts Action
    },
	computed : {
		contacts(){
			return this.$store.state.contacts.all
		}
	},
	methods : {
		addContact(){
			this.contact.created_at = new Date();
			// Add Contact to UI
			this.contacts.unshift(this.contact);
			console.log(this.contact);
			// Add to Database
			this.$store.dispatch('contacts/addContact', this.contact)
		},
		handleFileUpload(){
		    this.contact.avatar = this.$refs.file.files[0];
		},
		profileImg(avatar){
			try {
				let src = require(`~/assets/img/contacts/${avatar}`)
			}catch {
				let src = require(`~/assets/img/contacts/default.png`)
			}
			return avatar
		}
		/*submitFile(){
       		
            // Initialize the form data
            
            let formData = new FormData();

            
            // Add the form data we need to submit
            
            formData.append('file', this.contact.avatar);
        }*/
    }
}
</script>
<style>
	#contact:hover{
		background:white!important;
		color:#272727;
		transform:scale(1.2);
		cursor:pointer;
		z-index:2;
	}
	.rating {
		position: relative;
	}
	.rating .sub{
		position: absolute;
		color:red!important;
	}
	button.light:hover{
		background:var(--secondary)
	}
</style>