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
              v-model="user.username"
            ></v-text-field>
            <v-text-field
              label="Email"
              single-line
              solo
              v-model="user.email"
            ></v-text-field>
            <v-text-field
              label="Balance"
              single-line
              solo
              v-model="user.balance"
            ></v-text-field>
            <v-text-field
              label="Member Since"
              single-line
              solo
              v-model="user.created_at"
            ></v-text-field>
            <v-text-field
              label="Avatar"
              single-line
              solo
              v-model="user.avatar"
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
      :items="users"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left"><v-avatar size="40" class="ma-2"><img :src="props.item.avatar" alt="alt"></v-avatar></td>
        <td class="text-xs-left">{{ props.item.username }}</td>
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
                v-model="user.name"
                value="props.item.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                single-line
                solo
                v-model="user.email"
                value="props.item.email"
              ></v-text-field>
              <v-text-field
                label="Balance"
                single-line
                solo
                v-model="user.balance"
                value="props.item.balance"
              ></v-text-field>
              <v-text-field
                label="Member Since"
                single-line
                solo
                v-model="user.created_at"
                value="props.item.created_at"
              ></v-text-field>
              <v-text-field
                label="Avatar"
                single-line
                solo
                v-model="user.avatar"
                value="props.item.avatar"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
              >
              <!--  @click="updateuser(user, props.item)"-->
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
        user:{
          avatar:'',
          name:"",
          email:"",
          created_at:''
        },
        /*newuser:{
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
          {text:'Member Since', value:"Member Since"},
          {text:'Status', value:"Status"},
          { text: 'Actions', value: 'actions' }
        ],
     }
    },
    methods: {
      addUser(){
        console.log(this.user);
        //this.users.push(this.user);
        this.users.push(this.user);
        this.clear();
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
        this.user.username = '';
        this.user.avatar = '';
        this.user.balance = '';
        this.user.email = '';
        this.user.created_at = '';
      }
    },
    fetch ({store}) {
      store.dispatch('states/getUsers') // Trigger GetPosts Action
     },
    computed: {
     // Get users from Store
     users () {
       console.log(this.$store.state, '');
       return this.$store.state.states.users;
     }
    },
  }
</script>