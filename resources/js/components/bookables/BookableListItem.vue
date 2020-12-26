<template>
<div class="card card-cascade wider w-100">

  <!-- Card image -->
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body card-body-cascade text-center">

    <!-- Title -->
    <h4 class="card-title"><strong>{{ title }}</strong></h4>
    <!-- Subtitle -->
    <h5 class="green-text pb-2"><strong>${{ price }}.00 USD</strong></h5>
    <!-- Text -->
    <p class="card-text">{{ description }}</p>

    <router-link class="btn btn-success" :to="{ name: 'bookable', params: { id } }">
        See More
    </router-link>
    <!-- Linkedin -->
    <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
    <!-- Twitter -->
    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
    <!-- Dribbble -->
    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

  </div>

</div>
<!-- Card Wider -->
</template>

<script>
export default {
    props: {
        'title': String,
        "price": Number,
        'description': String,
        'id': Number
        }
}
</script>

<style>

</style>
