<template>
  <div>
      <ProductCardDeck />
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
import ProductCardDeck from '../components/products/productCardDeck.vue'
export default {
    components: { ProductCardDeck },
    methods: {
      ...mapActions(['getProducts'])
    },
    created() {
      this.getProducts()
    }
}
</script>

<style>

</style> 