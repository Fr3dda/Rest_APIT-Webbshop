<template>
  <!-- Navbar -->
<nav class="navbar p-3 navbar-expand-lg navbar-light bg-progress-bar progress-bar-striped bg-info ">
    
  <!-- Container wrapper -->
  <div class="container">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
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
    <div class="collapse navbar-collapse stroke" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link class="navbar-brand mt-2 mt-lg-0 " to="/">
          <i class="fa-brands fa-shopify me-1 display-6"></i> Phoneshopping.se
      </router-link>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
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
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{cartItemCount}}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end shopping-cart"
          aria-labelledby="navbarDropdownMenuLink"
        >
        <ShoppingCart />
    
        </div>
      </div>
      <!-- Avatar -->
      <div class="dropdown">
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
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <router-link class="dropdown-item" to="/login">My profile</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/Settings">Settings</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
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


  .shopping-cart {
    min-width: 450px;
  }
/* stroke */

.stroke ul li a {
  position: relative;
}
.stroke ul li a:after {
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
.stroke ul li a:hover:after {
  width: 100%;
}
nav ul li a, nav ul li a:after, nav ul li a:before {
    transition: all .5s;
}

</style>