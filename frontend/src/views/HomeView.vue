<template>
  <div class="home">
 <div
  class=" hero p-5 text-center bg-image rounded-3"
>
  <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white ">
        <h1 class="mb-3 ">Phones that doesn't make mistakes...</h1>
        <h4 class="mb-3">We got the best deals just for you !</h4>
        <a class="btn btn-outline-light btn-lg " href="#!" role="button">Check 'em out!</a>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.hero {
  background-image: url('C:\Users\Fladd\Desktop\I vägen\Rest_api\Rest_APIT-Webbshop\frontend\src\assets\img\joe-roberts-1OD3hpab6RU-unsplash.jpg');
  height: 100vh !important;  /* You must set a specified height */
  min-width: 100vh !important; /* You must set a specified height */
  background-position :center !important; /* Center the image */
  background-repeat:no-repeat !important; /* Do not repeat the image */
  background-size: cover !important; /* Resize the background image to cover the entire container */
}
</style>