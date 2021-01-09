<template>
<div>
<div v-if="loading">
    Loading...
</div>
  <div class="pt-4" v-else>
      <h5>Reviews</h5>
      <div v-for="(review, index) in reviews" :key="index" class="border-bottom d-none d-md-block">
          <div class="row">
              <div class="col-md-6">
                  <p class="font-weight-light">Glenn Rudge</p>
              </div>
              <div class="col-md-6 d-flex justify-content-end">
                <star-rating class="fa-lg" :rating="review.rating"></star-rating>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  {{ review.created_at | fromNow }}
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 font-italic">
                  {{ review.content }}
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import moment from "moment";

export default {
    props: {
        bookableId: String
    },

    data() {
        return {
            loading: false,
            reviws: null
        }
    },

    created() {
        this.loading = true
        axios.get(`/api/bookables/${this.bookableId}/reviews`)
        .then(response =>(this.reviews = response.data.data))
        .then(() => (this.loading = false));
    },
}
</script>

<style>

</style>
