<template>
  <div class="relative">
    <div
      @click="toggleDropdown"
      class="bg-white dark:bg-slate text-dark dark:text-white py-8 shadow rounded flex items-center justify-between cursor-pointer px-12"
    >
      {{ title }}
      <i class="fas fa-chevron-down"></i>
    </div>

    <!-- Dropdown -->
    <ul
      v-if="open"
      class="absolute bg-white dark:bg-slate mt-8 py-4 cursor-pointer w-full rounded shadow"
    >
      <li
        v-for="item in list"
        :key="item"
        @click="$emit('input', item), (open = false)"
        class="hover:bg-slate hover:bg-opacity-10 text-dark dark:text-white px-12 py-4"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Filter by Region",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Select Filter...",
    },
    list: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    open: false,
  }),

  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
  },
};
</script>
