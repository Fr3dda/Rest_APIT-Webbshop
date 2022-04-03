<template>
  <div class="row p-5 d-flex justify-content-center cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  m-5 ">
    <ProductCard v-for="product in products" :key="product._id" :product="product"/>
    
 
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>