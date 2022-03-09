<template>
  <div class="">
    <NavBar class="px-20 lg:px-64 py-16" />
    <Nuxt
      keep-alive
      class="bg-light dark:bg-dark px-20 lg:px-64 py-96 min-h-screen"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default { components: { NavBar } };
</script>

<style></style>
