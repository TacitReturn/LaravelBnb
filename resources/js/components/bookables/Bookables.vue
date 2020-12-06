<template>
  <div>
      <BookableListItem 
      v-bind:price="1000" 
      title="Cheap Villa 1" 
      content="A very cheap villa"
      >
      </BookableListItem>

      <BookableListItem 
      v-bind:price="1000" 
      title="Cheap Villa 2" 
      content="A very cheap villa">
      </BookableListItem>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {
        BookableListItem
    },
    // beforeCreate()
    // {
    //     console.log('before create');
    // },
    created()
    {
        console.log('created');
    },
    // beforeMount()
    // {
    //     console.log('before mount');
    // },
    mounted()
    {
        console.log('mounted');
    },
    // beforeDestroy()
    // {
    //     console.log('before destroy')
    // },
    // destroyed()
    // {
    //     console.log('destroyed');
    // }
}
</script>

<style>

</style>