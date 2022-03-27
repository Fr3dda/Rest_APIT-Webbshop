<template>
  <div class="home">

 <div class=" hero p-5 text-center bg-image">
   <div class="mask">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white ">
        <h1 class="mb-3 ">Phones that doesn't disappoint</h1>
        <h4 class="mb-3">We got the best deals just for you !</h4>
        <!-- <div> -->
        <!-- <router-link class="btn btn-outline-light btn-lg example hoverable z-depth-0" to="/products">Check em out...</router-link> -->
        <router-link to="/products">
          <button class="btn btn-info btn-lg stroke">Check em out</button>
        </router-link>
        
        <!-- </div>  -->
        </div>
      </div>
    </div>
    

  </div>

</div>
</template>

<script>



export default {
   data() {
    return {
      x: 0
    }
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX
    }
  },
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

.mask{
  background-color: rgba(0, 0, 0, 0.521);
  
}
.stroke ul button li a {
  position: relative;
}
.stroke ul button li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: rgb(0, 0, 0);
  height: 1px;
}
.stroke ul button li a:hover:after {
  width: 100%;
}
nav ul button li a, nav ul li a:after, nav ul li a:before {
    transition: all .5s;
}

</style>