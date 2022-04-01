<template>
    <div class="p-2 d-flex justify-content-between align-items-center border-bottom">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.image" class="img-fluid">
      </div>
      <div>
        <div><strong class="d-inline-block " style="max-width: 150px">{{ item.product.name }}</strong></div>
        <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
      </div>
    </div>
      <div class="col-md-3 col-sm-3  col-3 col-lg-3  d-flex" >
        
        <button class="btn btn-link px-2" @click.stop="decrement"><i class="fas fa-minus"></i></button>
        <input id="form1" min="0" max="99" name="quantity" value="1" type="number" class="form-control form-control-sm" />
        <button class="btn btn-link px-2" @click.stop="increment"> <i class="fas fa-plus"></i></button>
 


      </div>
      <!-- <button class="btn btn-danger btn-sm me-2" @click="$emit=('removeProduct')"><i class="fa-solid fa-trash"></i></button> -->
      <button @click="REMOVE_PRODUCT" class="btn btn-danger  btn-sm"><i class="fa-solid fa-trash"></i></button>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    decrement() {
      
      console.log('minus')
    },
    increment() {
      console.log('plus')
    },
    removeProduct(product) {
      this.$store.dispatch('removeProduct', product.id)
    }

  }
}
</script>

<style scoped>
  .image-container {
    width: 90px;
  }
</style>