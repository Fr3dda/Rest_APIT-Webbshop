<template>
  <div class="about">
<header>


  <!-- Background image -->
  <div class=" header-img  text-center bg-image ">
    <div class="mask wow fadeInRight" data-wow-delay="0.2s">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="row text-white col-lg-7 col-sm-9  aboutText">
          <h1 class="  mb-3 mt-4 wow fadeInRight" data-wow-delay="0.3s">About us</h1>
          <div class= "lh-base fs-5  p-5">

          <h5 class="fw-light wow fadeInRight" data-wow-delay="0.7s">Welcome to Phoneshopping, your number one source for all things when it comes to phones. We're dedicated to giving you the very best of the mobile era, with a focus on dependability, customer service and uniqueness.]
              Founded in 2013 by Fredrik Lundkvist, Phoneshopping has come a long way from its beginnings in a home-office, Västerås, Sverige,. When Fredrik first started out, his passion for helping others to be more eco-friendly, providing the best 
              phones for his fellow earthlings drove him to do intense research, quit his day job, and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the world,
              and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the mobile-phone industry.</h5>

          <h5 class="fw-light wow fadeInRight" data-wow-delay="0.7s"> hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</h5>

          <h5 class="text-start fw-light pt-4 wow fadeInRight" data-wow-delay="1.0s">Sincerely,</h5>
          <h5 class="text-start fw-light wow fadeInRight" data-wow-delay="1.0s">CEO, Founder, Fredrik Lundkvist</h5>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>

  </div>
</template>

<script>
import WOW from 'wowjs';

export default {
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




<style scoped>


.header-img{
      background-image: url('../assets/img/helena-lopes-PGnqT0rXWLs-unsplash.jpg');
      /* background-image: url('./img/neonbrand-EjrsfPe_iBo-unsplash.jpg'); */
      height: 93vh;
      min-width: 100vw;
}
.mask {
  background-color: rgba(190, 89, 6, 0.021);
}
.aboutText {
  background: rgba(0, 0, 0, 0.349);
  border: 3px solid rgba(0, 0, 0, 0.164);
  color: rgb(255, 230, 202) !important;
}
</style>