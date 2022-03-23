<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 mt-5">
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