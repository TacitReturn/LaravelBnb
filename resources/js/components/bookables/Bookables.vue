<template>
  <div>
      <div v-if="loading">
          Data is loading...
      </div>
      <div v-else>
        <div class="row mb-4" v-for="row in rows" :key="'row' + row">
          <div class="col" v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
          >
            <BookableListItem v-bind="bookable">
            </BookableListItem>
          </div>
          <div class="col"
          v-for="p in placeHoldersInRow(row)"
          :key="'placeholder' + row + p"></div>
      </div>
      </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components:
    {
        BookableListItem
    },

    computed:
    {
        rows()
        {
            return this.bookables === null
            ? 0
            : Math.ceil(this.bookables.length / this.columns);
        }
    },

    data()
    {
        return {
            bookables: null,
            loading: false,
            columns: 3
        }
    },
    methods:
    {
        bookablesInRow(row)
        {
            return this.bookables.slice((row - 1) * this.columns, row * this.columns);
        },

        placeHoldersInRow(row)
        {
            return this.columns - this.bookablesInRow(row).length;
        }
    },

    created()
    {
        this.loading = true;

        const request = axios.get("/api/bookables").then(response => {
            this.bookables = response.data.data;
            this.loading = false;
            });

        console.log(request);
    },

    mounted()
    {
        // console.log('mounted');
    },

}
</script>
