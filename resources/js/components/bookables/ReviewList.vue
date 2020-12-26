<template>
  <div class="pt-4">
      <div class="border-bottom d-none d-md-block" v-for="number in 3" :key="number">
          <h5>Rewviews</h5>
          <div class="row">
              <div class="col-md-6">
                  <p class="font-weight-light">Glenn Rudge</p>
              </div>
              <div class="col-md-6 d-flex justify-content-end">
                  Rating
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  Added 5 minutes ago.
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 font-italic">
                  Conten t of the review
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
