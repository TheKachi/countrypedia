<template>
  <NuxtLink :to="{ name: 'slug', params: { slug: country.alpha2Code } }">
    <div
      class="shadow-md rounded bg-white dark:bg-slate text-black dark:text-white"
    >
      <img
        :src="country.flags.png"
        :alt="`${country.name}'s flag`"
        class="rounded-t"
      />

      <div class="px-24 py-24">
        <h1 class="mt-20 mb-16 font-extrabold text-base">{{ country.name }}</h1>
        <p>
          Population: <span>{{ population(country.population) }}</span>
        </p>
        <p>
          Region: <span>{{ country.region }}</span>
        </p>
        <p>
          Capital: <span>{{ country.capital }}</span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    country: Object,
  },
  methods: {
    population(num) {
      return num.toLocaleString("en-US");
    },
  },
};
</script>

<style lang="postcss" scoped>
p {
  @apply font-semibold;
}

span {
  @apply font-light;
}

img {
  min-width: 100%;
  height: 180px;
}
</style>
