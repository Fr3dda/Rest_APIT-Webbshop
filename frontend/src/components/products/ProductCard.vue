<template>
      <div class="col ">
        <div class="card h-100 ">
        <div>
            <img :src="product.image" class="card-img-top " />
            <router-link :to="{ name: 'productDetails', params: {id: product._id }}">
                <div class="mask"></div>
            </router-link>
        </div>

        <div class="card-body text-center">
            <h5  class="card-title text-decoration-underline ">{{product.name}}</h5>
            <p class=" card-text small  text-black-50">{{product.short}}</p>
            <!-- <router-link type="button" class="btn btn-info ms-auto" :to="{ name: 'productDetails', params: { id: product._id }}"></router-link> -->
        </div>
            <h4 class="card-price text-end me-4 text-danger"> {{product.price}} SEK </h4>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>

</style>