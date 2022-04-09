<template>
  <section class="text-black dark:text-white">
    <!-- <pre>{{ country }}</pre> -->

    <nuxt-link
      to="/"
      class="bg-white dark:bg-slate shadow shadow-gray dark:shadow-slate rounded px-20 py-8"
    >
      <i class="fas fa-long-arrow-alt-left"></i>
      <span class="font-light">Back</span>
    </nuxt-link>

    <div
      class="grid grid-cols-1 md:grid-cols-12 gap-40 md:gap-0 mt-40 md:mt-64 md:items-center"
    >
      <div class="md:col-start-1 md:col-end-6">
        <img :src="country.flags.png" :alt="`${country.name}'s flag`" />
      </div>

      <div class="md:col-start-8 md:col-end-13">
        <h1 class="my-20 font-extrabold text-xl lg:text-4xl">
          {{ country.name }}
        </h1>

        <div class="flex flex-col gap-y-28 lg:flex-row lg:justify-between">
          <div>
            <p>
              Native Name: <span>{{ country.nativeName }}</span>
            </p>
            <p>
              Population: <span>{{ population }}</span>
            </p>
            <p>
              Region: <span>{{ country.region }}</span>
            </p>
            <p>
              Sub Region: <span>{{ country.subregion }}</span>
            </p>
            <p v-if="country.capital">
              Capital: <span>{{ country.capital }}</span>
            </p>
          </div>

          <div>
            <p>
              Top Level Domain:
              <span v-for="(domain, i) in country.topLevelDomain" :key="i">{{
                domain
              }}</span>
            </p>
            <p>
              Currencies:
              <span v-for="(currency, i) in country.currencies" :key="i">{{
                currency.name
              }}</span>
            </p>
            <!-- Todo: Make a new array and then join  -->
            <p>
              Languages:
              <span v-for="(language, i) in country.languages" :key="i">{{
                language.name + ", "
              }}</span>
            </p>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row lg:items-center gap-16 mt-28 lg:mt-48"
          v-if="country.borders"
        >
          <p>Border&nbsp;Countries:</p>
          <ul class="flex flex-wrap gap-x-4 gap-y-16">
            <li v-for="(countryCode, i) in country.borders" :key="i">
              <BorderCountry :countryCode="countryCode" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "CountryDetails",

  head() {
    return {
      title: this.country.name,
    };
  },

  async asyncData({ $axios, params }) {
    const country = await $axios.$get(`/alpha/${params.slug}`);
    return { country };
  },

  computed: {
    population() {
      return this.country.population.toLocaleString("en-US");
    },
  },

  methods: {},

  components: { Loading },
};
</script>

<style lang="postcss" scoped>
section {
  @apply text-base;
}

p {
  @apply font-semibold;
}

span {
  @apply font-light;
}

@media (min-width: 768px) {
  img {
    width: 560px;
    height: 400px;
  }
}
</style>
