<template>
  <!-- <select class="bg-white dark:bg-slate shadow rounded w-full" v-model="region">
    <option selected>Filter By Region</option>
    <option v-for="option in regions" :key="option" :value="option">
      {{ option }}
    </option>
  </select> -->
  <div class="relative bg-white py-8 shadow-md rounded-md">
    <div @click="open=true" class="flex cursor-pointer px-8">
      <!-- display -->
      <p class="flex-grow">{{value.trim() || placeholder}}</p>
      <p>v</p>
    </div>
    <div v-if="open" class="absolute cursor-pointer w-full top-0 rounded-md p-4 shadow-md bg-white">
      <div class="flex px-4 py-8">
        <h1 @click="$emit('input', ''), open=false" class="font-medium flex-grow ">{{title}}</h1>
        <button @click="open=false">x</button>
      </div>
      <div v-for="item in list" :key="item" @click="$emit('input', item), open=false" class="p-4 hover:bg-slate hover:bg-opacity-10 text-dark rounded-md">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Select item"
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "Select Filter..."
    },
    list: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    open: false,
  }),
};
</script>

<style lang="postcss">
option {
  @apply w-full text-black dark:text-white rounded py-8 px-16 cursor-pointer hover:bg-gray hover:text-white;
}
</style>
