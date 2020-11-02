import axios from "axios"
let API = 'http://localhost:5000/api';
export const state = () => ({

  users : [
    
  ],

  user : [],

  /*states: [
     {name : "Customers", icon:"people", count : "1000", bc : "purple"},
      {name : "Sells", icon:"people", count : "1000", bc : "teal"},
      {name : "Balance", icon:"attach_money", count : "1000", bc : "primary"},
      {name : "Products", icon:"move_to_inbox", count : "1000", bc : "secondary"}
  ],
  contacts : [
   {avatar:require('../assets/img/contacts/contact2.jpg'), name:"Cordia Malsam",price:500,brand:"Sony",amount:10, rating:5},
   {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden", price:500,brand:"Sony",amount:50, rating:4},
   {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",price:500,brand:"Sony",amount:70, rating:5},
   {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ", price:500,brand:"Sony",amount:80 ,rating:5},
   {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer", price:500,brand:"Sony",amount:10 ,rating:3.6},
   {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",price:500,brand:"Sony",amount:40 ,rating:4},
   {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisenmenger", price:500,brand:"Sony",amount:30 ,rating:4},
   {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt", price:500,brand:"Samsung",amount:30, rating:5},
   {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ", job:"software enginner",amount:30, rating:4.5}
  ],
  customers : [
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", balance:700, email :"johnDoe@email.com", created_at:2014},
        {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",balance:550,  email :"Cordia@email.com", created_at:2015},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",balance:600,  email :"arlenaPaden@email.com", created_at:2019},
        {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",balance:10000, email :"brennaMarkee@email.com", created_at:2016},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",balance:6700,email:"rubyLowe"},
        {avatar:require("../assets/img/contacts/contact6.jpg"), name:"Zenia Saffer",balance:800, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Selene Opie  ",balance:1200, email :"zeniaSaffer@email.com", created_at:2010},
        {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Deangelo Eisen",balance:500 ,email :"Deangelo@email.com", created_at:2013},
        {avatar:require("../assets/img/contacts/contact7.jpg"), name:"Jayne Schuldt",balance:100 , email :"jayneShuldt@email.com", created_at:2012},
        {avatar:require("../assets/img/contacts/contact1.jpg"), name:"Monserrate Bolten ",balance:400 , email:"monserrate@email.com", created_at:2018},
 ],
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
 products:[ //[{img:"", name:"", Brand:"",price:"",sold:(0 - 1): rating:4},
   {img:require("../assets/img/products/contact2.jpg"), name:"Ps4",price:500,brand:"Sony",amount:10, rating:5,sold:.5},
   {img:require("../assets/img/products/contact3.jpg"), name:"Arlena Paden", price:500,brand:"Sony",amount:50, rating:4,sold:.6},
   {avatar:require("../assets/img/products/contact4.jpg"), name:"Brenna Markee ",price:500,brand:"Sony",amount:70, rating:5,sold:.4},
   {avatar:require("../assets/img/products/contact5.jpg"), name:"Ruby Lowe ", price:500,brand:"Sony",amount:80 ,rating:5,sold:.6},
   {avatar:require("../assets/img/products/contact6.jpg"), name:"Zenia Saffer", price:500,brand:"Sony",amount:10 ,rating:3.6,sold:.8},
   {avatar:require("../assets/img/products/contact3.jpg"), name:"Selene Opie  ",price:500,brand:"Sony",amount:40 ,rating:4,sold:.6},
   {avatar:require("../assets/img/products/contact5.jpg"), name:"Deangelo Eisenmenger", price:500,brand:"Sony",amount:30 ,rating:4,sold:.5},
   {avatar:require("../assets/img/products/contact7.jpg"), name:"Jayne Schuldt", price:500,brand:"Samsung",amount:30, rating:5,sold:.7},
   {avatar:require("../assets/img/products/contact1.jpg"), name:"Monserrate Bolten ", job:"software enginner",amount:30, rating:4.5,sold:.7}
 ],
 orders: [],
 suppliers:[]*/
})

//let {users, states, contacts, customers, categories, products, orders, suppliers} = state;

export const mutations = {

  /* Users Methods Start */ 
  setUsers(state , users){
    state.users = users
  },
  setUser(sate, user) {
    state.user = user
  },
  addUser(sate, user) {
    state.user = user
  },
  removeUser (users, { user }) {
    users.list.splice(users.list.indexOf(user), 1)
  },
  updateUser (users, upadatedUser) {
    states.users[users.indexOf(user)] = upadatedUser
  }

}

export const actions = {

  // Users Actions
  async getUsers ({commit}) {
    let {data} = await axios.get(`${API}/Users`)
    commit('setUsers', data)
  },
  async getUser ({commit}, id) {
    let {data} = await axios.get(`${API}/Users/${id}`)
    commit('setUser', data)
  },
  async addUser ({commit}, user) {
    let {data} = await axios.post(`${API}/Users`, user)
    commit('addUser', data)
  },
  async UpdateUser ({commit}, id , user) {
    let {data} = await axios.put(`${API}/Users/$id`, user)
    commit('updateUser', data)
  },
  async RemoveUser ({commit}, id) {
    let {data} = await axios.delete(`${API}/Users/${id}`)
    commit('removePost', data)
  },
  
}