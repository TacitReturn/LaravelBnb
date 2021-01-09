<template>
    <div>
        <div class="form-group">
            <label for="" class="text-muted">
                Select a rating 1 is worst, 5 is best
            </label>
            <star-rating :rating="5" class="fa-3x"></star-rating>
        </div>

        <div class="form-group">
            <label for="content" class="text-muted">
                Describe your experience with
            </label>
            <textarea
                class="form-control"
                name="content"
                id="content"
                cols="30"
                rows="5"
            ></textarea>
        </div>
        <button class="btn btn-success btn-block">
            Submit
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
