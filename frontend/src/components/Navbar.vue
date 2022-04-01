<template>
  <!-- Navbar -->
<nav class="navbar  navbar-expand-lg navbar-light  scrolling-navbar  bg-orange ">
    
  <!-- Container wrapper -->
  <div class="container">
    <!-- Toggle button -->
    <button
      class="navbar-toggler "
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
      
    </button>
  
    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link class="navbar-brand mt-2 mt-lg-0 " to="/">
          <i class="fa-brands fa-shopify me-1 display-6"></i> Phoneshopping.se
      </router-link>
      
      <!-- Left links -->
      <ul class="navbar-nav mr-auto smooth-scroll">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Icon -->

      <!-- Notifications -->
      <div class="dropdown" >
        <a 
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
         
        >
          <i class="fa-solid fa-cart-shopping" ></i>
          <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{cartItemCount}}</span>
        </a>
        <div @click="$event.stopPropagation()"
          class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end   shopping-cart"
          aria-labelledby="navbarDropdownMenuLink"
        >
        <ShoppingCart />
        </div>
      </div>
      <!-- Avatar -->
      <div class="dropdownv" v-if="user">
        <a
          class="text-reset dropdown-toggle"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >

          <i class=" fa-solid fa-user"></i>
        </a>
        <ul 
          class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end dropdown-menu-sm-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <router-link class="dropdown-item" to="/login">My profile</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
        <router-link to="/login" class="nav-link btn btn-sm btn-danger btn-rounded" v-else>Login</router-link>
      </div>
    
    <!-- Right elements -->
    </div>
  <!-- Container wrapper -->
  </nav>
<!-- Navbar -->
</template>

<script>

  import { mapGetters } from 'vuex'
  import ShoppingCart from './CART/ShoppingCart.vue'
  
export default {
  components: { ShoppingCart },
    name: 'PrimaryNav',
    computed: {
      ...mapGetters(['cartItemCount'])
  },

  }

  


</script>

<style scoped>

nav {
  background: linear-gradient(to bottom, #f36404ea 0%, #f364047e 90%);
  box-shadow: 0px 2px 10px 2px;
  border-bottom: .5px solid rgba(0, 0, 0, 0.281);
  min-height: 100px;
}

  .shopping-cart {
    min-width: 500px;
  }

nav{
  z-index: 1 !important;
}



nav ul li a, nav ul li a:after, nav ul li a:before {
    transition: all .5s;
}

</style>