<template>
	<v-container>
		<v-layout row wrap>
		  <v-flex xs3>
		  	<h2>Filters</h2>
		    <v-expansion-panel>
			    <v-expansion-panel-content class="shadow pa-2">
					<!-- price Silder Start -->
				     <template v-slot:header>
				        <div>
				        	<h3>Price <span class="range right"> {{ minprice}} - {{ maxprice}}</span></h3>
				        </div>
					     <v-card>
					        <v-card-text>
					        	<v-range-slider
						        step="10"
						        thumb-label="always"
						        ticks
						        :max="maxprice"
						        :min="minprice"
						        ></v-range-slider>
							<!-- Price Slider End -->
							<v-divider></v-divider>
						    <!-- Category Select Start -->
					        <div>
					        	<h3>Category</h3>
					        	<div v-for="(category,i) in categories" v-key="i">
					        		<v-checkbox v-model="category.checked" :label="category.name.toString()"></v-checkbox>
					        		<span class="right">{{category.count}} </span>
					        	</div>
					        </div>
					 		<!-- Category Select End -->
					       </v-card-text>
						</v-card>
				     </template>
			    </v-expansion-panel-content>
			</v-expansion-panel>
		  </v-flex>
		  <v-flex xs9>
		  	<v-layout row wrap text-xs-center >
			    <v-flex xs12 md4 class=" light" v-for=" contact in contacts" :key="contact.name">
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
								<v-icon v-for="(n,i) in 4" color="secondary :key="i" darken-1">star</v-icon>
							</span>-->
						</div>
					</v-card-text>
					<v-card-actions>
						<v-btn color="light darken-1">Take appointement</v-btn>
					</v-card-actions>	
				  </v-card>
			    </v-flex>
			</v-layout>
		  </v-flex>
		</v-layout>
	</v-container>		

</template>	

<script>
export default {
	data(){
		return {
			maxprice:1000,
			minprice:100,
			categories : [
				{name:"Cell Phones", checked:false,count:100},
				{name:"Computers & Tablets", checked:false,count:100},
				{name:"Cell Phone Accessoires", checked:false,count:100},
				{name:"Appliances", checked:fals,count:100},
				{name:"Audio", checked:false,count:100},
				{name:"Cell Phones", checked:false,count:100},
				{name:"Cell Phones", checked:false,count:100},
				{name:"Cell Phones", checked:false,count:100},
				{name:"Cell Phones", checked:false,count:100}
			],
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