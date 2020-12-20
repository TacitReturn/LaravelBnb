<template>
<!--Main Navigation-->
<header>

  <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
    <router-link class="navbar-brand" v-bind:to="{ name: 'home' }">
        <strong>Home</strong>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav nav-flex-icons">
        <li class="nav-item">
        <router-link class="nav-link" v-bind:to="{ name: 'bookable' }">Bookable</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-5 mt-4">
    <router-view></router-view>
  </div>
</header>
</template>

<script>


</script>

<style>

</style>
