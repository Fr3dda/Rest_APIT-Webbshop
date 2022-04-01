<template>
<div class="h-100 bg-dark p-2 text-white bg-opacity-25">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
                <div class="card card-registration my-4 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                            <img class="img-fluid" src="..\assets\img\linkedin-sales-solutions-o4CEee8W7FI-unsplash.jpg"
                            />
                        </div>
                        <div class="col-xl-6">
                            <div class="card-body p-md-5 text-black">
                                <div class="d-flex justify-content-between align-items-center ">
                                <h3 class="mb-5 text-uppercase wow fadeInLeft" data-wow-delay="0.7s">Registration form</h3>
                                <i class="fa-brands fa-shopify me-1 mb-5 display-3 wow fadeInRight" data-wow-delay="0.7s"></i>
                                </div>
                                

                        <div class="row wow fadeInUp" data-wow-delay="1.0s">
                            <div class="col-md-6 mb-4 ">
                                <div class="form-outline border rounded-6">
                                    <input type="text" id="nameInput" class="form-control  form-control-lg">
                                    <label class="form-label" for="form3Example1m">Name</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-outline border rounded-6">
                                    <input type="text" id="passwordInput" class="form-control form-control-lg">
                                    <label class="form-label" for="form3Example1n">Password</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-outline border rounded-6">
                                    <input type="text" id="repeatInput" class="form-control form-control-lg ">
                                    <label class="form-label" for="form3Example1n">Repeat Password</label>
                                </div>
                            </div>
                        </div>
                            <div class="col wow fadeInUp" data-wow-delay="1.0s">
                                <div class="form-outline mb-4 border rounded-6">
                                    <input type="text" id="emailInput" class="form-control form-control-lg">
                                    <label class="form-label" for="form3Example1n">Email</label>
                                </div>
                            </div>
                                <div class="pt-1 mb-4  wow fadeInUp" data-wow-delay="1.2s">
                                    <button class="btn btn-danger btn-lg btn-block" type="button">Login</button>
                                <i class="fa-solid fa-face-smile fa-10x wow bounceIn" data-wow-delay="2.0s" ></i>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
 .img-fluid {
     border-top-left-radius: .25rem;
     border-bottom-left-radius: .25rem;
 }
 .card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 2rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
}
.card-registration .select-arrow {
  top: 13px;
}

.fa-face-smile{
    color: rgb(255, 136, 0);
    display: flex;
    margin-top: 1em;
    justify-content: center;
    align-content: center;
    
    ;
}
</style>