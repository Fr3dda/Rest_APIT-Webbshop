<template>
      <div class="col">
        <div class="card h-100">
 <div>
        <img :src="product.image" class="card-img-top" />
        <router-link to="/">
        <div class="mask"></div>
        </router-link>
 </div>

        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </p>
        </div>
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