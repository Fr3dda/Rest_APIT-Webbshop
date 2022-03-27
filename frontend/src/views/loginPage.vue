<template>
<div v-if="login">

  <!-- Material form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <mdb-input label="Your email" icon="envelope" type="email" />
      <mdb-input label="Your password" icon="lock" type="password" />
    </div>
    <div class="text-center">
      <mdb-btn>Login</mdb-btn>
    </div>
  </form>
</div>
  <!-- Material form login -->
</template>

<script>

</script>