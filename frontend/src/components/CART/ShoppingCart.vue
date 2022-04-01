<template>
<ShoppingProduct 
  v-for="item in shoppingCart"
  :key="item.product._id" 
  :item="item" 

      />
<div v-if="shoppingCart.length < 1">
  <div class="p-2 d-flex justify-content-center align-items-center " >
    The cart is empty...
  </div>
</div>

<div class="p-2 d-flex justify-content-between align-items-center" >
  <div>
    <div>Totalt:  {{ shoppingCartTotal }} SEK </div>
    <small class="text-muted">ink. moms</small>
  </div>
  <button class="btn btn-info"> Gå till kassan</button>
</div>
</template>

<script>
import ShoppingProduct from './ShoppingProduct.vue'
import { mapGetters } from 'vuex'
export default {
  components: { ShoppingProduct},
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    },
    methods: {
        /* removeFromCart(){
      this.$emit('remove-from-cart', this.product.id ) */
    }
/*     $(div).on('shopping-cart', 'keep-open', function (e) {
      e.stopPropagation();
    }) */
    
  }

</script>

<style>

</style>