<template>
<Navbar />
<div class="container-fluid">
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

.container-fluid{
  padding-left: 0;
  padding-right: 0;
}

</style>
