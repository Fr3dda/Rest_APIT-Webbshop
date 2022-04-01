<template>
      <div class="col mb-4">
        <div class="card h-100 ">
        <div class="">
            <img :src="product.image" class="card-img-top " />
            <router-link :to="{ name: 'productDetails', params: {id: product._id }}">
                <div class="mask"></div>
            </router-link>
        </div>

        <div class="card-body text-center w-20">
            <h5  class="card-title ">{{product.name}}</h5>
            <p class=" card-text small  text-black-50">{{product.short}}</p>
        </div>
            <h4 class="card-price text-end me-4 text-danger"> {{product.price}} SEK </h4>
            <!-- <button @click="addCart({ product, quantity })" class="btn btn-index btn-orangered"><i class="fa-solid fa-cart-plus"></i> Add to cart</button> -->
        </div>
        
        

    </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    props: ['product'], 
    methods: {
    ...mapActions(['addCart'])
}
}
</script>

<style>
.card.h-100{
    background: linear-gradient(to bottom, #ffffff 65%,  #ff66001f 100%);
    
}


.btn-index{
    z-index: 1;
}
</style>