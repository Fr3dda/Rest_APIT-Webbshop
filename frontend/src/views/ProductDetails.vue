<template>
  <div v-if="product">
      <div class="row d-flex justify-content-center p-2 mt-4  ">
          <div class=" col-lg-5 col-sm-9 ">
              <img :src="product.image" class="img-fluid ">
          </div>
          <div class="col-lg-8 col-md-0 ">
              <h2 class="text-info h2-responsive text-center p-3 mt-5 ">{{product.name}}</h2>
              <p class="h4 text-danger text-center">{{product.price}} SEK</p>
              <div class="mt-3 p-2">
                  <p>{{product.desc}}</p>
              </div>
          <div class="text-end mt-5">
        <button @click="addCart({ product, quantity })" class="btn btn-info"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
      </div>
          </div>
      </div>

  </div>
</template>

<script>
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
    
    }
}
</script>

<style>

</style>