import axios from "axios"
let API = 'http://localhost:5000/api';

export const state = () => ({

  all : [],
  category : [],

});


export const mutations = {

  /* Categories Methods Start */ 
  setCategories(state , Categories){
    state.all = Categories
    console.log('yeep');
  },
  setCategory(sate, Category) {
    state.category = Category
  },
  addCategory(sate, Category) {
    state.all.push(Category)
  },
  removeCategory (state, Category ) {
    state.all.splice(state.all.indexOf(Category), 1)
  },
  updateCategory (state, updatedCategory) {
    //states.all[state.all.indexOf(Category)] = updatedCategory
  }

}

export const actions = {

  // Categories Actions
  async getCategories ({commit}) {
    let {data} = await axios.get(`${API}/categories`)
    commit('setCategories', data)
  },
  async getCategory ({commit}, id) {
    let {data} = await axios.get(`${API}/categories/${id}`)
    commit('setCategory', data)
  },
  async addCategory ({commit}, Category) {
    let {data} = await axios.post(`${API}/categories`, Category)
    commit('addCategory', data)
  },
  async UpdateCategory ({commit}, Category) {
    let {data} = await axios.put(`${API}/categories/${Category.id}`, Category)
    commit('updateCategory', data)
  },
  async RemoveCategory ({commit}, id) {
    let {data} = await axios.delete(`${API}/categories/${id}`)
    commit('removeCategory', data)
  },
 
}