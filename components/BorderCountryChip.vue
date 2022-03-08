<template>
  <NuxtLink
    :to="`/${countryCode}`"
    class="bg-white dark:bg-slate flex gap-8 items-center justify-centerborder border-gray dark:border-slate rounded px-12 py-4"
  >
    {{ borderCountryName }}
  </NuxtLink>
</template>

<script>
export default {
  data: () => ({
    borderCountryName: null,
  }),
  props: {
    countryCode: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const countryCode = this.countryCode;
    const res = await this.$axios.$get(`/alpha/${countryCode}`);
    this.borderCountryName = res.name;
  },
};
</script>
