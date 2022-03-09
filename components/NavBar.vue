<template>
  <nav
    class="fixed w-full z-20 bg-white dark:bg-slate text-black dark:text-white shadow-md flex items-center justify-between text-sm"
  >
    <span class="font-extrabold text-xl">Where in the world?</span>
    <ThemeToggler />
  </nav>
</template>

<script>
import ThemeToggler from "./ThemeToggler.vue";
export default { components: { ThemeToggler } };
</script>
