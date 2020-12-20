<template>
<div>
    <h5 class="text-center">
        <strong>
            Check Availability
        </strong>
    </h5>
  <!-- Name input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="form-date">From Date:</label>
    <input
    placeholder="Start Date"
    v-model="from"
    name="from" type="text"
    id="form-date" class="form-control"
    v-on:keyup.enter="check"/>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="to-date">To Date:</label>
    <input
    placeholder="End Date"
    v-model="to"
    name="to" type="text"
    id="to-date" class="form-control"
    v-on:keyup.enter="check"/>
  </div>
  <!-- Submit button -->
  <button v-on:click="check" type="submit" class="btn btn-success btn-block mb-4">Search</button>
</div>
</template>

<script>
export default {
    data()
    {
        return {
            from: null,
            to: null
        }
    },

    methods:
    {
        check()
        {
            alert("Search button clicked");
        }
    }
}
</script>

<style>

</style>
