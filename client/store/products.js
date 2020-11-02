import axios from "axios"
let API = 'http://localhost:5000/api';
export const state = () => ({

  all : [
   {img:require("~/assets/img/products/apple-desk-laptop.jpg"), name:"apple desk laptop",price:500,brand:"Sony",amount:10, rating:5,sold:.5},
   {img:require("~/assets/img/products/black-camera.jpg"), name:"Black Camera", price:500,brand:"Sony",amount:50, rating:4,sold:.6},
   {img:require("~/assets/img/products/wesley-tingey.jpg"), name:"Wesley Tingey ",price:500,brand:"Sony",amount:70, rating:5,sold:.4},
   {img:require("~/assets/img/products/airpods-cellphone-cellular-telephone.jpg"), name:"Air Pods", price:500,brand:"Sony",amount:80 ,rating:5,sold:.6},
   /*{img:require("~/assets/img/products/apple-desk-laptop.jpg"), name:"apple desk laptop",price:500,brand:"Sony",amount:10, rating:5,sold:.5},
   {img:require("~/assets/img/products/black-camera.jpg"), name:"Black Camera", price:500,brand:"Sony",amount:50, rating:4,sold:.6},
   {img:require("~/assets/img/products/wesley-tingey.jpg"), name:"Wesley Tingey ",price:500,brand:"Sony",amount:70, rating:5,sold:.4},
   {img:require("~/assets/img/products/airpods-cellphone-cellular-telephone.jpg"), name:"Air Pods", price:500,brand:"Sony",amount:80 ,rating:5,sold:.6}*/
  ],

  product : [],

});


export const mutations = {

  /* Products Methods Start */ 
  setProducts(state , Products){
    state.all = Products
  },
  setProduct(state, Product) {
    state.product = Product
  },
  setNewProduct(state, Product) {
    state.all.push(Product);
  },
  removeProduct (state, { Product }) {
    state.all.splice(state.all.indexOf(Product), 1)
  },
  updateProduct (state, upadatedProduct) {
    //states.all[state.all.indexOf(Product)] = upadatedProduct
  }

}

export const actions = {

  // Products Actions
  async getProducts ({commit}) {
    let {data} = await axios.get(`${API}/products`)
    commit('setProducts', data)
  },
  async getProduct ({commit}, id) {
    let {data} = await axios.get(`${API}/products/${id}`)
    commit('setProduct', data)
  },
  async addProduct ({commit}, product) {
    let {data} = await axios.post(`${API}/products`, product)
    commit('setNewProduct', data)
  },
  async updateProduct ({commit}, product) {
    let {data} = await axios.put(`${API}/products/${product.id}`, product)
    commit('updateProduct', data)
  },
  async removeProduct ({commit}, id) {
    let {data} = await axios.delete(`${API}/products/${id}`)
    commit('removeProduct', data)
  },
  
}