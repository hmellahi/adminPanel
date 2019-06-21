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
            <v-text-field
              label="Avatar"
              single-line
              solo
              v-model="customer.avatar"
            ></v-text-field>
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
        <td class="text-xs-left"><v-avatar size="60" class="ma-2"><img :src="props.item.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.balance }}</td>
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td class="text-xs-center">
          <v-dialog
          v-model="editModel"
          width="500"
          >
          <template v-slot:activator="{ on }">
            <v-btn
              color="success"
              fab
              v-on="on"
            >
                Edit
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
        </v-dialog>
          <v-btn fab class="error">
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
        customers: [
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
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
        customer.style.display = "none";
        //this.customers.slice(0,this.customers.indexof(customer));
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
    }
  }
</script>