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
          v-model="editModel"
          width="500"
          >
           <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Edit A user
            </v-card-title>

            <v-card-text>
              <v-text-field
                label="Name"
                single-line
                solo
                v-model="newUser.name"
                value="newUser.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                single-line
                solo
                v-model="newUser.email"
                value="newUser.email"
              ></v-text-field>
              <v-text-field
                label="Balance"
                single-line
                solo
                v-model="newUser.balance"
                value="newUser.balance"
              ></v-text-field>
              <v-text-field
                label="Member Since"
                single-line
                solo
                v-model="newUser.created_at"
                value="newUser.created_at"
              ></v-text-field>
              <v-text-field
                label="Avatar"
                single-line
                solo
                v-model="newUser.avatar"
                value="newUser.avatar"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="updateUser(p)"
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
            <v-icon>add</v-icon> Add New user
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Add A user
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Name"
              single-line
              solo
              v-model="newUser.name"
            ></v-text-field>
            <v-text-field
              label="Email"
              single-line
              solo
              v-model="newUser.email"
            ></v-text-field>
            <v-text-field
              label="Balance"
              single-line
              solo
              v-model="newUser.balance"
            ></v-text-field>
            <v-text-field
              label="Member Since"
              single-line
              solo
              v-model="newUser.created_at"
            ></v-text-field>
            <v-text-field
              label="Avatar"
              single-line
              solo
              v-model="newUser.avatar"
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="addUser"
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
      :search="search"
      :items="users"
    >
      <template v-slot:items="props">
        <td class="text-xs-left"><v-avatar size="40" class="ma-2"><img :src="props.item.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td class="text-xs-left">
          <v-chip small v-if="props.item.emailVerified" class="success" text-color="white">
            Confirmed
            <v-icon r>check_circle_outline</v-icon>
          </v-chip>
          <v-chip v-else class="error " text-color="white">
            Not Confirmed
            <v-icon right>highlight_off</v-icon>
          </v-chip>
        </td>
        <td>
          <v-btn fab class="success" small @click="addModel = true">
            <v-icon>edit </v-icon>
          </v-btn>
          <v-btn fab class="error" small>
            <v-icon @click="removeUser(props.item.id)">delete</v-icon>
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
        lastid:0,
        editModel:false,
        addModel:false,
        user:{
          avatar:'',
          name:"",
          email:"",
          created_at:'',
          id:0
        },
        users: [],
        // users: [{
        //   avatar:'/_nuxt/client/assets/img/contacts/contact1.jpg',
        //   name:"hey",
        //   email:"hey",
        //   created_at:'0',
        //   balance:20,
        //   id:0
        // }],
        newUser:{
          avatar:'',
          name:"",
          email:"",
          created_at:'',
          balance : '',
          id : 0
        },
        search: '',
        headers: [
          { text: 'Avatar', value: 'avatar' },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          {text:'Member Since', value:"Member Since"},
          {text:'Status', value:"Status"},
          { text: 'Actions', value: 'actions' }
        ],
     }
    },
    methods: {
      addUser(e){
        e.preventDefault();
        this.newUser.id = this.lastid;
        this.users.push({ ...this.newUser});
        this.addModel = false;
        this.lastid++;
        console.log(this.lastid);
        this.updateUsersInLS();
        //this.clear();
      },
      removeUser(id){
        this.users.splice(id,1);
        console.log(id,this.users);
        this.updateUsersInLS();
      },
      updateUser(id){
        // this.users[this.getUserById(id)] = this.newUser;
        // //this.clear();
        // this.updateUsersInLS();
        this.editModel = true;
      },
      getUserById(id)
      {
        return this.users.filter(user => user.id == id);
      },
      clear(){
        this.user.name = '';
        this.user.avatar = '';
        this.user.balance = '';
        this.user.email = '';
        this.user.created_at = '';
      },
      updateUsersInLS()
      {
        localStorage.setItem("users", JSON.stringify(this.users));
        console.log(localStorage.getItem("users"));
      }
    },
    beforeMount()
    {
       if (localStorage.getItem("users") != null)
       {
         this.users = JSON.parse(localStorage.getItem("users"));
       }
    },
    // fetch ({store}) {
    //   store.dispatch('states/getUsers') // Trigger GetPosts Action
    //  },
    // computed: {
    //  // Get users from Store
    // //  users () {
    // //   //  console.log(this.$store.state, '');
    // //   //  /return this.$store.state.states.users;
    // //  }
    // },
  }
</script>