<template>
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" exact active-class="active" to="/">Home</router-link>
      <router-link class="nav-item nav-link" exact active-class="active" to="/cars">Cars</router-link>
      <router-link class="nav-item nav-link" exact active-class="active" to="/car/3">Car 3</router-link>
      <router-link class="nav-item nav-link" exact active-class="active" to="/car/4">Car 4</router-link>
    </div>
  </div>
</nav>


  <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
