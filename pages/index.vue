<template>
  <section>
    <div class="grid grid-cols-12 gap-y-28 lg:justify-between mb-24 lg:mb-40">
      <!-- Search -->
      <div class="col-span-12 lg:col-span-5">
        <div
          class="bg-white dark:bg-slate text-gray dark:text-white shadow rounded py-12 pl-28 pr-12 flex items-center gap-x-24"
        >
          <i class="fas fa-search"></i>

          <input
            type="text"
            placeholder="Search for a country by name or capital"
            aria-label="Search for a country by name or capital"
            v-model="searchQuery"
            class="outline-none w-full bg-white dark:bg-slate"
          />

          <button
            v-show="searchQuery !== ''"
            @click="clearSearch"
            class="ml-auto"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Filter  -->
      <div class="col-span-6 lg:col-span-2 lg:col-end-13">
        <Filters :list="regions" v-model="region" />
      </div>
    </div>

    <!-- Fetching Countries  -->
    <Loading v-if="$fetchState.pending" />

    <!--Success: All Countries  -->
    <div v-else>
      <div
        class="grid lg:grid-cols-4 2xl:grid-cols-5 gap-40 lg:gap-64 px-28 lg:px-0"
      >
        <div class="" v-for="(country, i) in filteredCountries" :key="i">
          <CountryCard :country="country" />
        </div>
      </div>

      <div
        v-if="filteredCountries.length === 0"
        class="text-black dark:text-white"
      >
        No countries match your search
      </div>
    </div>
  </section>
</template>

<script>
import CountryCard from "~/components/CountryCard.vue";
import Loading from "../components/Loading.vue";
import Filters from "../components/Filters.vue";
export default {
  name: "CountriesHomePage",

  head() {
    return {
      title: "REST API Countries",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "An implementation of the REST API for countries using Vue, Vuex, Axios, Nuxt and Tailwind CSS",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "countries, country info, REST API, Vue, Vuex, Axios, Nuxt and Tailwind CSS",
        },
      ],
    };
  },

  components: {
    CountryCard,
    Loading,
    Filters,
  },

  data() {
    return {
      countries: [],
      searchQuery: "",
      region: "",
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    };
  },

  async fetch() {
    this.countries = await this.$axios.$get("/all");
  },

  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
  },

  computed: {
    filteredCountries() {
      // All countries
      let countries = this.countries;

      // Search
      if (this.searchQuery !== "") {
        const searchRegex = new RegExp(this.searchQuery, "i");
        countries = countries.filter(
          (country) =>
            searchRegex.test(country.name) || searchRegex.test(country.capital)
        );
      }

      // Filter
      if (this.region !== "")
        return countries.filter((country) => country.region === this.region);
      // if (this.region === "All") return countries;
      // return countries;
    },
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply text-sm;
}
</style>
