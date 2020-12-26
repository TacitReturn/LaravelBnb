<template>
<div style="padding: 1.25rem">
    <h5 class="text-center">
        <strong>
            Check Availability
        </strong>
        <span class="text-danger" v-if="noAvailabilty">
            Not Available
        </span>
        <span class="text-success" v-if="hasAvailabilty">
            Available
        </span>
    </h5>
  <!-- From date input -->
  <div class="form-outline mb-4 form-group">
    <label class="form-label" for="form-date">From Date:</label>
    <input
    required
    class="form-control"
    placeholder="Start Date"
    v-model="from"
    name="from" type="text"
    id="form-date"
    v-on:keyup.enter="check"
    :class="{'is-invalid': this.errorFor('from')}"/>
    <div class="invalid-feedback"
    v-for="(error, index) in this.errorFor('from')"
    :key="'from'+ index">{{ error }}</div>
  </div>

  <!-- To date input -->
  <div class="form-outline mb-4 form-group">
    <label class="form-label" for="to-date">To Date:</label>
    <input
    required
    class="form-control"
    placeholder="End Date"
    v-model="to"
    name="to" type="text"
    id="to-date"
    v-on:keyup.enter="check"
    v-bind:class="[{'is-invalid': this.errorFor('to')}]"/>
    <div class="invalid-feedback"
    v-for="(error, index) in this.errorFor('to')"
    :key="'to'+ index">{{ error }}</div>
  </div>
  <!-- Submit button -->
  <button
  v-bind:disabled="loading"
  v-on:click="check"
  type="submit"
  class="btn btn-success btn-block mb-4">Check</button>
</div>
</template>

<script>
export default {
    data()
    {
        return {
            from: null,
            to: null,
            loading: false,
            status: null,
            errors: null
        }
    },

    methods:
    {
        check()
        {
            this.loading = true;
            this.errors = null;

            axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`)
            .then(response => {
                this.status = response.status;
            }).catch(error => {
                if (422 === error.response.status) {
                    this.errors = error.response.data.errors;
                }
                this.status = error.response.status;
            }).then(() => (this.loading = false));
        },

        errorFor(field)
        {
            return this.hasErrors && this.errors[field] ? this.errors[field] : null;
        }
    },

    computed:
    {
        hasErrors()
        {
            return 422 === this.status && this.errors === null;
        },

        hasAvailabilty()
        {
            return 200 === this.status;
        },

        noAvailabilty()
        {
            return 404 === this.status;
        }
    }
}
</script>

<style lang="scss" scoped>
.is-invalid {
    border-color: red;
}
</style>

