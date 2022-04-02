<template>
  <div v-if="product">
      <div class="row d-flex justify-content-center align-items-center p-5 m-4  wow fadeIn" data-wow-delay="0.2s ">
          <div class=" mt-5 col-lg-5 col-sm-9 justify-content-center">
              <img :src="product.image" class="img-fluid d-flex  ">
          </div>
          <div class="col-lg-8 col-md-0 ">
              <h2 class="text-info h2-responsive justify-content-center text-center p-3 mt-5 ">{{product.name}}</h2>
              <p class="h4 text-danger text-center">{{product.price}} SEK</p>
              <div class="mt-3 p-2">
                  <p>{{product.desc}}</p>
              </div>
          <div class="text-end mt-5">
        <button @click="addCart({ product, quantity })" class="btn p-3 btn-lg btn-danger   "><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
      </div>
          </div>
      </div>

  </div>
</template>

<script>
import WOW from 'wowjs';
import { mapActions, mapGetters} from 'vuex'
export default {
props: ['id'],
data(){
    return {
        quantity: 1
    }
},
methods: {
    ...mapActions(['getProductById', 'addCart'])
     
},
computed: {
    ...mapGetters(['product'])
},
created() {
    this.getProductById(this.id)
    
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