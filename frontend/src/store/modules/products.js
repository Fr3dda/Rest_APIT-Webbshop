import axios from '@/axios'

export default  { 
  state: {
      products: []
  },
  getters: {
      products: state => state.products
  },
  mutations: {
      SET_PRODUCTS: (state, products) => {
        state.products = products
        console.log(products)
      }
  },
  actions: {
    getProducts: async ({commit}) => {
        const res = await axios.get('products')
        commit('SET_PRODUCTS', res.data)
        
    }
  }
}
