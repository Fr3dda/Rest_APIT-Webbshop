<template>
  <div class="row  d-flex justify-content-center  row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 m-4 ">
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