<template>
  <select class="bg-white dark:bg-slate shadow rounded w-full" v-model="region">
    <option selected>Filter By Region</option>
    <option v-for="option in regions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    region: {
      type: String,
      required: true,
    },
    regions: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    showDropdown: false,
    placeholder: this.region,
  }),
};
</script>

<style lang="postcss">
option {
  @apply w-full text-black dark:text-white rounded py-8 px-16 cursor-pointer hover:bg-gray hover:text-white;
}
</style>
