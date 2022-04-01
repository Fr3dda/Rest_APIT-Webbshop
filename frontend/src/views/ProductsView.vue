<template>
  <div>
      <ProductCardDeck class="wow fadeInUp" data-wow-delay="0.3s " />
  </div>
</template>

<script>
import WOW from 'wowjs';
import { mapActions } from 'vuex' 
import ProductCardDeck from '../components/products/productCardDeck.vue'
export default {
    components: { ProductCardDeck },
    methods: {
      ...mapActions(['getProducts'])
    },
    created() {
      this.getProducts()
    },
    mounted(){  
    let wow = new WOW.WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
	});
	wow.init();
}
}




 
</script>

<style>

</style> 