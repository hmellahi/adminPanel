<template>
  <v-card class="shadow" flat>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-flex xs3>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        ></v-text-field>
      </v-flex>

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
            <v-icon>add</v-icon> Add New Customer
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Add A Customer
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Name"
              single-line
              solo
              v-model="customer.name"
            ></v-text-field>
            <v-text-field
              label="Email"
              single-line
              solo
              v-model="customer.email"
            ></v-text-field>
            <v-text-field
              label="Balance"
              single-line
              solo
              v-model="customer.balance"
            ></v-text-field>
            <v-text-field
              label="Member Since"
              single-line
              solo
              v-model="customer.created_at"
            ></v-text-field>
            <div class="upload-btn-wrapper">
              <button class="btn">Upload Profile Img</button>
              <input type="file" name="myfile" @change="customer.avatar"/>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="addCustomer()"
            >
              Add
            </v-btn>
            <v-btn
              color="primary"
              flat
              @click="addModel = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="customers"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left"><v-avatar size="40" class="ma-2"><img :src="props.item.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.balance }}</td>
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td class="text-xs-center">
          <v-dialog
          v-model="editModel"
          width="500"
          >
          <template v-slot:activator="{ ye }">
            <v-btn
              color="success"
              fab
              v-on="ye"
              small
             >
                <v-icon>edit</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Edit A Customer
            </v-card-title>

            <v-card-text>
              <v-text-field
                label="Name"
                single-line
                solo
                v-model="customer.name"
                value="props.item.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                single-line
                solo
                v-model="customer.email"
                value="props.item.email"
              ></v-text-field>
              <v-text-field
                label="Balance"
                single-line
                solo
                v-model="customer.balance"
                value="props.item.balance"
              ></v-text-field>
              <v-text-field
                label="Member Since"
                single-line
                solo
                v-model="customer.created_at"
                value="props.item.created_at"
              ></v-text-field>
              <v-text-field
                label="Avatar"
                single-line
                solo
                v-model="customer.avatar"
                value="props.item.avatar"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="updateCustomer(customer, props.item)"
              >
              Apply
              </v-btn>
              <v-btn
                color="info"
                flat
                @click="editModel = false"
              >
              Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>-
          <v-btn fab class="error" small>
            <v-icon @click="removeCustomer">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        editModel:false,
        addModel:false,
        customer:{
          avatar:'',
          name:"",
          balance:"",
          email:"",
          created_at:''
        },
        /*newCustomer:{
          avatar:'',
          name:"",
          balance:"",
          email:"",
          created_at:''
        },*/
        search: '',
        headers: [
          { text: 'Avatar', value: 'avatar' },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Balance ($)', value: 'balance' },
          {text:'Member Since', value:"Member Since"},
          { text: 'Actions', value: 'actions' }
        ],
     }
    },
    methods: {
      addCustomer(){
        console.log(this.customer);
        //this.customers.push(this.customer);
        this.customers.push(this.customer);
        this.clear();
      },
      removeCustomer(e){
        let customer = e.target.parentNode.parentNode.parentNode.parentNode;
        console.log(customer);
        this.customers.slice(0,this.customers.indexof(customer));
      },
      editCustomer(customer){
        this.customer = customer 
      },
      UpdateCustomer(customer, oldCustomer){
        this.customers[this.customers.indexOf(oldCustomer)] = customer;
        this.clear();
      },
      clear(){
        this.customer.name = '';
        this.customer.avatar = '';
        this.customer.balance = '';
        this.customer.email = '';
        this.customer.created_at = '';
      }
    },
    fetch ({store}) {
      store.dispatch('customers/getCustomers') // Trigger GetPosts Action
    },
    computed: {
     // Get Customers from Store
     customers () {
        return this.$store.state.customers.all;
     }
    },
  }
</script>