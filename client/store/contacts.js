import axios from "axios"
let API = 'http://localhost:5000/api';
export const state = () => ({
	all : [
   /*{avatar:require("../assets/img/contacts/contact1.jpg"), name:"John Doe", phone:700, email :"johnDoe@email.com", created_at:2014},
   {avatar:require("../assets/img/contacts/contact2.jpg"), name:"Cordia Malsam",phone:550,  email :"Cordia@email.com", created_at:2015},
   {avatar:require("../assets/img/contacts/contact3.jpg"), name:"Arlena Paden",phone:600,  email :"arlenaPaden@email.com", created_at:2019},
   {avatar:require("../assets/img/contacts/contact4.jpg"), name:"Brenna Markee ",phone:10000, email :"brennaMarkee@email.com", created_at:2016},
   {avatar:require("../assets/img/contacts/contact5.jpg"), name:"Ruby Lowe ",phone:6700,email:"rubyLowe", created_at:2016},
  */
  ], 
	contact:''
})

export const mutations = {
 /* Contacts Methods Start */ 
  setContacts(state , Contacts){
    state.all = Contacts
  },
  setContact(state, Contact) {
    state.Contact = Contact
  },
  setNewContact(state, Contact) {
    state.all.push(Contact)
  },
  /*removeContact (state, { Contact }) {
    state.all.splice(Contacts.list.indexOf(Contact), 1)
  },
  updateContact (state, Contact) {
    
  },*/
}

export const actions = {
  // Contacts Actions
  async getContacts({commit}) {
    let {data} = await axios.get(`${API}/contacts`)
    commit('setContacts', data)
  },
  async getContact ({commit}, id) {
    let {data} = await axios.get(`${API}/contacts/${id}`)
    commit('setContact', data)
  },
  async addContact ({commit}, contact) {
    let {data} = await axios.post(`${API}/contacts` , contact)
    commit('setNewContact', data)
  },
  /*async UpdateContact ({commit}, id) {
    let {data} = await axios.put(`${API}/contacts/${id}`)
    commit('updateContact', data)
  },
  async RemoveContact ({commit}, id) {
    let {data} = await axios.delete(`${API}/contacts`)
    commit('removeContact', data)
  },*/
  
}