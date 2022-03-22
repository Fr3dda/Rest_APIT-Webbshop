<template>
<Navbar />
<div class="container-fluid">
  <router-view/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>


<style>

</style>
