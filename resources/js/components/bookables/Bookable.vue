<template>
<div class="container">
      <div v-if="loading">
          loading...
      </div>
      <div v-else class="row">
          <div class="card col-md-8 pb-4">
              <div class="card-header">
                  <h5 class="text-center">
                      {{ bookable.title }}:
                      <span class="text-success">
                          ${{ bookable.price }}.00 USD
                      </span>
                  </h5>
              </div>
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid"/>
                  <a href="#!">
                      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                  </a>
            </div>
            <div class="card-body">
                <p class="card-text">
                    {{ bookable.description }}
                </p>
                <a href="#!" class="btn btn-success btn-block">Button</a>
            </div>
            <review-list :bookable-id="this.$route.params.id"></review-list>
          </div>

          <div class="ml-5">
              <availability :bookable-id="this.$route.params.id"></availability>
          </div>
      </div>

</div>
</template>

<script>
import Availability from './Availability';
import ReviewList from './ReviewList';

export default {
    components: {
        Availability,
        ReviewList
    },

    data()
    {
        return {
            bookable: null,
            loading: false
        }
    },

    created()
    {
        this.loading = true;

        //    console.log(this.$route.params.id);
        axios.get(`/api/bookables/${this.$route.params.id}`)
        .then((response)=>{
            this.bookable = response.data.data
        });

        this.loading = false;
    }
}
</script>

<style>

</style>
