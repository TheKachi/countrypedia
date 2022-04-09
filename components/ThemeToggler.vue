<template>
  <button
    role="button"
    tabindex="0"
    aria-label="Toggle dark and light mode"
    @click.prevent="toggleTheme"
    class="text-black dark:text-white font-semibold"
    v-if="!darkMode"
  >
    <i class="fas fa-sun mr-4" aria-hidden="true"></i>Light Mode
  </button>
  <button
    role="button"
    tabindex="0"
    aria-label="Toggle dark and light mode"
    @click.prevent="toggleTheme"
    class="text-black dark:text-white font-semibold"
    v-else
  >
    <i class="far fa-moon mr-4" aria-hidden="true"></i>Dark Mode
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style></style>
