<template>
	<v-container>
		<v-layout row wrap>
		  <v-flex xs4>
		  	<h2>Filters</h2>
		  	<v-card>
		  		<v-card-text>
			        <!-- Search Bar Start -->
					<v-text-field
					  name="product"
					  label="Search"
					  id="id"
					></v-text-field>
			        <!-- Search Bar End -->

					<!-- Price Slider Start -->
			        <h3>Price <span class="range right"> {{ minprice}} - {{ maxprice}}</span></h3>
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
		        	<h3>Category</h3>
		        	<div v-for="(category,i) in categories" v-bind:key="i">
		        		<span class="right">{{ category.count }} </span>
		        		<v-checkbox v-model="category.checked" :label="category.name.toString()"></v-checkbox>
		        	</div>
					<!-- Category Select End-->
			    </v-card-text>
			</v-card>
		  </v-flex>
		  <v-flex xs8>
		  	<v-dialog
	        v-model="addModel"
	        width="500"
	        >
	        <template v-slot:activator="{ on }">
	          <v-btn
	            color="teal lighten-2"
	            dark
	            v-on="on"
	          >
	            <v-icon>add</v-icon> Add New Product
	          </v-btn>
	        </template>

	        <v-card>
	          <v-card-title
	            class="headline grey lighten-2"
	            primary-title
	          >
	            Add A Product
	          </v-card-title>

	          <v-card-text>
	            <v-text-field
	              label="Name"
	              single-line
	              solo
	              v-model="product.name"
	            ></v-text-field>
	            <v-select
	              :items="brands"
	              v-model="product.brand"
	              label="Brand"
	            ></v-select>
	             <v-text-field
	              label="Price by dollar "
	              single-line
	              solo
	              type="number"
	              min=0
	              max=1
	              v-model="product.price"
	            ></v-text-field>
	            <v-text-field
	              label="Sold ( 0 means without sold ...)"
	              single-line
	              solo
	              type="number"
	              min=0
	              max=1
	              v-model="product.solde"
	            ></v-text-field>
	            <v-text-field
	              label="Rating"
	              single-line
	              solo
	              type="number"
	              min=0
	              max=1
	              v-model="product.rating"
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
	              @click="addProduct()"
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
			    <v-flex xs12 md4 class=" light" v-for=" product in products" v-bind:key="product.name">
				  <v-card id="product" class="light shadow ma-2" style="background:transparent;">
					<v-card-text>
						<v-avatar size="100">
							<img :src="getProductImg(product.img)" alt="avatar">
						</v-avatar>
						<h2 class="headline">{{ product.name }}</h2>
						<h2 class="subheading grey--text">{{ product.price}} $$</h2>
						<div class="rating">
							<v-icon v-for="(n,i) in 5" v-bind:key="i" color="light darken-1">star</v-icon>
							<!--<span class="sub">
								<v-icon v-for="(n,i) in 4" color="secondary :key="i" darken-1">star</v-icon>
							</span>-->
						</div>
						<!-- Edit Model Start -->
						<v-dialog
				        v-model="editModel"
				        width="500"
				        >
					        <template v-slot:activator="{ on }">
					          <v-btn
					            color="teal lighten-2"
					            dark
					            @click="editProduct(product)"
²					            v-on="on"
					          >
					            <v-icon>edit</v-icon>
					          </v-btn>
					        </template>

					        <v-card>
					          <v-card-title
					            class="headline grey lighten-2"
					            primary-title
					          >
					            Edit A Product
					          </v-card-title>

					          <v-card-text>
					            <v-text-field
					              label="Name"
					              single-line
					              solo
					              v-model="product.name"
					            ></v-text-field>
					            <v-select
					              :items="brands"
					              v-model="product.brand"
					              label="Brand"
					            ></v-select>
					             <v-text-field
					              label="Price by dollar "
					              single-line
					              solo
					              type="number"
					              min=0
					              max=1
					              v-model="product.price"
					            ></v-text-field>
					            <v-text-field
					              label="Sold ( 0 means without sold ...)"
					              single-line
					              solo
					              type="number"
					              min=0
					              max=1
					              v-model="product.solde"
					            ></v-text-field>
					            <v-text-field
					              label="Rating"
					              single-line
					              solo
					              type="number"
					              min=0
					              max=1
					              v-model="product.rating"
					            ></v-text-field>
					            <div class="upload-btn-wrapper">
					              <button class="btn">Upload Profile Img</button>
					              <input type="file" name="myfile" ref="ufile" @change="handleFileUpload()"/>
					            </div>
					          </v-card-text>

					          <v-divider></v-divider>

					          <v-card-actions>
					            <v-spacer></v-spacer>
					            <v-btn
					              color="white"
					              class="success"
					              flat
					              @click="updateProduct(product)"
					            >
					              Update
					            </v-btn>
					            <v-btn
					              class="primary"
					              color="white"
					              flat
					              @click="editModel = false"
					            >
					              Cancel
					            </v-btn>
					          </v-card-actions>
					        </v-card>
				    	</v-dialog>
				    	<!-- Edit Model End -->
						<v-btn color="error" @click="removeProduct(product.id)">
							<v-icon>delete</v-icon>
						</v-btn>
					</v-card-text>
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
			addModel:false,
			editModel:false,
			maxprice:1000,
			minprice:100,
			product:{
				name:"",
				img:"",
				brand:"Sony",
				price:0,
				solde:0,
				rating:0
			},
			brands :['Sony', "Hwawei", "Microsoft"]
		}
	},
	fetch ({store}) {
      store.dispatch('products/getProducts') // Trigger GetProducts Action
      store.dispatch('categories/getCategories') // Trigger GetCategories Action
    },
	computed : {
		products(){
			return this.$store.state.products.all
		},
		categories(){
			return this.$store.state.categories.all
		}
	},
	methods: {
		addProduct() {
		  console.log(this.product);
	      this.$store.dispatch('products/addProduct', this.product)
	      this.addModel = false;
	      //this.clear();
	    },
	    editProduct(product){
	    	this.product = product
	    	console.log(this.product);
	    },
	    updateProduct(product){
	    	console.log(product);
	    	this.editModel = false; // Hide the model
	    	this.$store.dispatch('products/updateProduct', this.product)
	    },
	    removeProduct(productID){
	    	this.$store.dispatch('products/removeProduct', productID)
	    },
	    categoryCount(arr){
	    	// Get Products where category equal to this category 
	    	// Then store it in array and count his length

	    },
	    getProductImg(img){
	    	// Show Error
	    	//return require(`~/assets/img/products/${img}`)
	    },
	    handleFileUpload(){
		    this.product.img = this.$refs.file.files[0];
		},
		clear(){
	        this.product.name = '';
	        this.product.img = '';
	        this.product.brand = 'Sony';
	        this.product.price = 0;
	        this.product.solde = 0;
	        this.product.rating = 0;
      	}
	}
}
</script>
<style>
	#product:hover{
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