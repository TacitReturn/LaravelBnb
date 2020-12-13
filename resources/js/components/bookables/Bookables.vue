<template>
  <div>
      <div v-if="loading">
          Data is loading...
      </div>
      <div class="row" v-for="row in rows" :key="'row' + row">
          <div class="col" v-for="(bookable, column) in bookables.slice((row - 1) * columns, row * columns)" 
          :key="'row' + row + column"
          >
            <BookableListItem
            v-bind:price="bookable.price" 
            v-bind:title="bookable.title"
            v-bind:content="bookable.content"
            >
            </BookableListItem>
          </div>
      </div>
      <div>
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

    created()
    {
        this.loading = true;
        setTimeout(() => {
        console.log(this.bookable1);
        console.log(this.bookable2);

            this.bookables =  [
            {
                title: "Cheap Villa!!!",
                content: "A very cheap villa",
                price: 100
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 200
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 300
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 400
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 500
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 600
            },
            {
                title: "Cheap Villa Two",
                content: "Another cheap villa!",
                price: 700
            },
            ]
            this.loading = false;
        }, 2000)
    },

    mounted()
    {
        console.log('mounted');
    },

}
</script>

<style scoped>
    display: none;
</style>