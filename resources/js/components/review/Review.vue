<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
            <div v-if="alreadyReviewed">
                <h3>You've already left a reveiw for this booking.</h3>
            </div>
            <div v-else>
                <div class="form-group">
                    <label for="" class="text-muted">
                        Select a rating 1 is worst, 5 is best
                    </label>
                <star-rating class="fa-3x" v-model="review.rating"> </star-rating>
            </div>
            <div class="form-group">
                <label for="content" class="text-muted">
                    Describe your experience with
                </label>
                <textarea
                    v-model="review.content"
                    class="form-control"
                    name="content"
                    id="content"
                    cols="30"
                    rows="5"
                ></textarea>
            </div>
        </div>
        </div>
        <button class="btn btn-success btn-block">
            Submit
        </button>
    </div>


</template>

<script>
export default {
    data() {
        return {
            review: {
                rating: 5,
                content: null,
            },
            existingReview: null,
            loading: false
        };
    },

    created() {
        this.loading = true;
        // 1. If review already exists (in reviews table by id).
        axios.get(`/api/reviews/${this.$route.params.id}`)
        .then(response => (this.existingReview = response.data.data))
        .catch(err => {
            //
        })
        .then(() => (this.loading = false));
        // 2. Fetch a booking by a review key.
        // 3. Store the review.
    },

    computed: {
        alreadyReviewed() {
            return this.existingReview === null;
        }
    }
};
</script>

<style></style>
