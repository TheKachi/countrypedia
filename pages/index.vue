<template>
  <div class="home">
    <!-- <pre>{{ countries }}</pre> -->

    <div class="grid grid-cols-12 lg:justify-between mb-24 lg:mb-40">
      <!-- Search -->
      <!-- todo: convert to a component usable in slug too -->
      <div class="col-span-12 lg:col-span-5">
        <div
          class="bg-white dark:bg-slate text-gray dark:text-white shadow rounded py-12 pl-28 pr-12 flex items-center gap-x-24"
        >
          <i class="fas fa-search"></i>

          <!-- <input
            @keyup.enter="$fetch"
            type="text"
            placeholder="Search for a country..."
            aria-label="Search for a country"
            v-model="searchText"
            class="outline-none w-full bg-white dark:bg-slate"
          /> -->

          <input
            type="text"
            placeholder="Search for a country..."
            aria-label="Search for a country"
            v-model="searchText"
            class="outline-none w-full bg-white dark:bg-slate"
          />

          <button
            v-show="searchText !== ''"
            @click="clearSearch"
            class="ml-auto"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Filter  -->
      <div class="col-span-6 lg:col-span-2 lg:col-end-13">
        <!-- filter component  -->
        <div class="relative">
          <!-- filter button -->
          <div
            @click="showDropdown = !showDropdown"
            class="bg-white dark:bg-slate text-black dark:text-white shadow rounded p-16 flex justify-between items-center cursor-pointer"
          >
            <span> Filter by Region</span>
            <i
              class="fas fa-chevron-down ml-auto"
              aria-label="toggle filter dropdown"
            ></i>
          </div>

          <!-- dropdown  -->
          <div
            v-if="showDropdown"
            class="bg-white dark:bg-slate shadow rounded mt-4 absolute z-10 w-full"
          >
            <!-- todo: convert this to a select element -->
            <div
              :key="region"
              v-for="region in regions"
              @click="filterRegion(region)"
              class="text-black dark:text-white rounded py-8 px-16 cursor-pointer hover:bg-gray hover:text-white"
            >
              {{ region }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading  -->
    <Loading v-if="$fetchState.pending" />

    <!-- Error -->
    <div v-if="$fetchState.error">
      Oops. It appears there's no country named {{ searchText }}
    </div>

    <!--Success: All Countries  -->
    <div
      v-else
      class="grid lg:grid-cols-4 2xl:grid-cols-5 gap-40 lg:gap-64 px-40 lg:px-0"
    >
      <div class="" v-for="(country, i) in filteredCountries" :key="i">
        <CountryCard :country="country" />
      </div>
    </div>
  </div>
</template>

<script>
import CountryCard from "~/components/CountryCard.vue";
import Loading from "../components/Loading.vue";
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
  },
  data() {
    return {
      countries: [],
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
      searchText: "",
      showDropdown: false,
    };
  },
  async fetch() {
    if (this.searchText === "") {
      await this.getAllCountries();
      return;
    }
    await this.searchCountry();
  },

  fetchDelay: 1000,

  methods: {
    async getAllCountries() {
      const res = await this.$axios.$get("/all");
      this.countries = res;
    },

    async filterRegion(region) {
      this.showDropdown = false;
      // this.loading = true
      // const res = await this.$axios.$get(`/continent/${region}`);
      console.log(res);
      // this.loading = false
      // this.countries = res.data;
      window.scrollTo(0, 0);
    },

    async searchCountry() {
      const res = await this.$axios.$get(
        `/name/${this.searchText}?fullText=true`
      );
      this.countries = res;
      this.searchText = "";
    },

    clearSearch() {
      this.searchText = "";
      this.getAllCountries();
    },
  },

  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
        country.name.match(this.searchText)
      );
    },
  },
};
</script>

<style lang="postcss" scoped>
.home {
  @apply text-sm;
}
</style>
