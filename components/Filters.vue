<template>
  <select v-model="region">
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
