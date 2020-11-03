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
      :users="users"
    >
      <div  v-for="user in users" v-bind:key="user.name">
        <!-- <td class="text-xs-left"><v-avatar size="40" class="ma-2"><img :src="users.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ users.username }}</td>
        <td class="text-xs-left">{{ users.email }}</td>
        <td class="text-xs-left">{{ users.created_at }}</td>
        <td class="text-xs-left">
          <v-chip small v-if="users.emailVerified" class="success" text-color="white">
            Confirmed
            <v-icon r>check_circle_outline</v-icon>
          </v-chip>
          <v-chip v-else class="error " text-color="white">
            Not Confirmed
            <v-icon right>highlight_off</v-icon>
          </v-chip>
        </td> -->
        <td class="text-xs-left"><v-avatar size="40" class="ma-2"><img :src="user.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ user.username }}</td>
        <td class="text-xs-left">{{ user.email }}</td>
        <td class="text-xs-left">{{ user.created_at }}</td>
        <td class="text-xs-left">
          <v-chip small v-if="user.emailVerified" class="success" text-color="white">
            Confirmed
            <v-icon r>check_circle_outline</v-icon>
          </v-chip>
          <v-chip v-else class="error " text-color="white">
            Not Confirmed
            <v-icon right>highlight_off</v-icon>
          </v-chip>
        </td>
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
              Edit A user
            </v-card-title>

            <v-card-text>
              <v-text-field
                label="Name"
                single-line
                solo
                v-model="newUser.name"
                value="users.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                single-line
                solo
                v-model="newUser.email"
                value="users.email"
              ></v-text-field>
              <v-text-field
                label="Balance"
                single-line
                solo
                v-model="newUser.balance"
                value="users.balance"
              ></v-text-field>
              <v-text-field
                label="Member Since"
                single-line
                solo
                v-model="newUser.created_at"
                value="users.created_at"
              ></v-text-field>
              <v-text-field
                label="Avatar"
                single-line
                solo
                v-model="newUser.avatar"
                value="users.avatar"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="editModel = false"
              >
              <!--  @click="updateuser(user, users)"-->
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
          <v-btn fab class="error" small>
            <v-icon @click="removeUser">delete</v-icon>
          </v-btn>
        </td>
      </div>
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
    // props: {
    //   users: {default: []}
    // },
    data () {
      return {
        editModel:false,
        addModel:false,
        user:{
          avatar:'',
          name:"",
          email:"",
          created_at:''
        },
        users: [{
          avatar:'hey',
          name:"hey",
          email:"hey",
          created_at:'0',
          balance:20
        }],
        newUser:{
          avatar:'',
          name:"",
          email:"",
          created_at:'',
          balance : ''
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
        console.log(this.newUser);
        //this.users.push(this.user);
        this.users.push(this.newUser);
        console.log(this.users);
        this.addModel = false;
        //this.clear();
      },
      removeUser(e){
        let user = e.target.parentNode.parentNode.parentNode.parentNode;
        this.users.slice(indexof(user),1);
        //this.users.slice(0,this.users.indexof(user));
      },
      Updateuser(user, olduser){
        this.users[this.users.indexOf(olduser)] = user;
        this.clear();
      },
      clear(){
        this.user.name = '';
        this.user.avatar = '';
        this.user.balance = '';
        this.user.email = '';
        this.user.created_at = '';
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