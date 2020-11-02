import axios from "axios"
let API = 'http://localhost:5000/api';
export const state = () => ({
	all : [
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
	customer:''
})

export const mutations = {
 /* Contacts Methods Start */ 
  setCustomers(state , customers){
    state.all = customers
  },
  setCustomer(sate, customer) {
    state.customer = customer
  },
  addCustomer(sate, customer) {
    
  },
  removeCustomer (state, { customer }) {
    //state.list.splice(users.list.indexOf(user), 1)
  },
  updateCustomer (state, customer) {
    
  },
}

export const actions = {
  // Users Actions
  async getCustomers({commit}) {
    let {data} = await axios.get(`${API}/Customers`)
    commit('setCustomers', data)
  },
  async getCustomer ({commit}, id) {
    let {data} = await axios.get(`${API}/Customers/${id}`)
    commit('setCustomer', data)
  },
  async addCustomer ({commit}, id) {
    let {data} = await axios.get(`${API}/Customers/${id}`)
    commit('addCustomer', data)
  },
  async UpdateCustomer ({commit}, id) {
    let {data} = await axios.put(API + id)
    commit('updateCustomer', data)
  },
  async RemoveCustomer ({commit}, id) {
    let {data} = await axios.delete(API + id)
    commit('removeCustomer', data)
  },
  
}