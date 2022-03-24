<template>
<Navbar />
<div class="container-fluid p-0">
  <router-view/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  methods: {}
}
</script>


<style>

</style>
