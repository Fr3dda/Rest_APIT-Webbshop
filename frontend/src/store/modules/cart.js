export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state =>
         state.cart,
         cartItemCount: state => {
             let items = 0
             state.cart.forEach(item => {
                 items += item.quantity
             })
             return items
         },
         shoppingCartTotal: state => {
             let total = 0
             if(state.cart.length !== 0) {
                 state.cart.forEach(item => {
                     total += item.product.price * item.quantity
                 })
             }
             return total
         }
    },
    mutations: {
        ADD_CART: (state, {product, quantity}) => {
            let exist = state.cart.find(item => item.product._id === product._id)
            if(exist) {
            exist.quantity += quantity
            return
        }
        state.cart.push({ product, quantity })
        }
    },
    actions:{
        addCart: ({commit}, {product,quantity}) => {
            commit('ADD_CART', {product,quantity})
        }
    }
}