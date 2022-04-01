<template>
  <div class="home">
<header>

<div>

 <div class=" header-img  text-center bg-image">
   <div>
    <div class="d-flex justify-content-center align-items-center h-100 ">
      <div class="row text-white col-lg-7 col-sm-9  aboutText wow fadeInLeft" data-wow-delay="0.7s">
        <h1 class="mb-3 mt-5 wow fadeIn" data-wow-delay="0.7s">Phones that doesn't disappoint</h1>
        <h4 class="mb-3 wow fadeIn" data-wow-delay="1.0s">We got the best deals just for you !</h4>
        <div class= "lh-base fs-5  ">
        <!-- <router-link class="btn btn-outline-light btn-lg example hoverable z-depth-0" to="/products">Check em out...</router-link> -->
        <router-link class="" to="/products">
          <button class="btn btn-outline-indigo btn-lg wow fadeInUp" data-wow-delay="1.5s">Check em out</button>
        </router-link>
        </div>
        <!-- </div>  -->
        </div>
      </div>
    </div>
    

  </div>
</div>
</header>

</div>
</template>

<script>

import WOW from 'wowjs';

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
},
}
</script>

<style scoped>
.header-img{
  background-image: url('../assets/img/helena-lopes-PGnqT0rXWLs-unsplash.jpg');
      /* background-image: url('./img/neonbrand-EjrsfPe_iBo-unsplash.jpg'); */
      
      height: 93vh;
      min-width: 100vw;
    display: flex;
  justify-content: center;
  align-content: center;
}

.aboutText {
  background: rgba(0, 0, 0, 0.349);
  border: 3px solid rgba(0, 0, 0, 0.164);
  color: rgb(255, 230, 202) !important;
}

.btn-outline-indigo{
 margin-bottom: 1rem ;
 background-color: transparent;
 border-color: wheat;
 color: wheat;
}



nav ul button li a, nav ul li a:after, nav ul li a:before {
    transition: all .5s;
}

</style>