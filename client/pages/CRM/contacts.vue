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
		<v-layout row wrap text-xs-center >
		  <v-flex xs12 md3 class=" light" v-for=" contact in contacts" :key="contact.name">
			<v-card id="contact" class="light shadow ma-2" style="background:transparent;">
				<v-card-text>
					<v-avatar size="100">
						<img :src="contact.avatar" alt="avatar">
					</v-avatar>
					<h2 class="headline">{{ contact.name }}</h2>
					<h2 class="subheading grey--text">{{ contact.job}}</h2>
					<div class="rating">
						<v-icon v-for="(n,i) in 5" :key="i" color="light darken-1">star</v-icon>
						<!--<span class="sub">
							<v-icon v-for="n in 4" color="secondary darken-1">star</v-icon>
						</span>-->
					</div>
				</v-card-text>
				<v-card-actions>
					<v-btn color="light darken-1">Take appointement</v-btn>
				</v-card-actions>	
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
			contacts: [
				{avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", job:"software enginner", rating:4},
				{avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam", job:"software enginner", rating:5},
				{avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden", job:"software enginner", rating:4},
				{avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ", job:"software enginner", rating:"4"},
				{avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ", job:"software enginner", rating:"4"},
				{avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer", job:"software enginner", rating:3.6},
				{avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ", job:"software enginner", rating:4},
				{avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisenmenger", job:"software enginner", rating:4},
				{avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt", job:"software enginner", rating:5},
				{avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ", job:"software enginner", rating:4.5}
			]
		}
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