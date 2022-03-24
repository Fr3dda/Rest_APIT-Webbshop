import axios from '@/axios'

export default  { 
  state: {
      products: [],
      product: null
  },
  getters: {
      products: state => state.products,
      product: state => state.product
  },
  mutations: {
      SET_PRODUCTS: (state, products) => {
        state.products = products
  
      },
      SET_PRODUCT: (state, product) => {
        state.product = product
      }
  },
  actions: {
    getProducts: async ({commit}) => {
        const res = await axios.get('products')
        commit('SET_PRODUCTS', res.data)
    },
    getProductById: async ({commit}, id) => {
      const res = await axios.get('products/' + id)
      commit('SET_PRODUCT', res.data)
    }
  }
}
