<template>
    <NuxtLink
        :to="`/${code}`"
        class="bg-white flex gap-8 items-center justify-center dark:bg-slate border border-gray dark:border-slate rounded px-12 py-4"
        >
        <template v-if="data===null">
           <p>{{ code }}</p>
           <svg v-if="fetching" width="18" height="18" class="animate-spin -ml-1 mr-3 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </template>
        <template v-else>
            <p>{{data.name}}</p>
        </template>
    </NuxtLink>
</template>

<script>
export default {
    data: () => ({
        fetching: true,
        data: null
    }),
    props: {
        code: {
            type: String,
            required: true
        }
    },
    async mounted(){
        const code = this.code
        this.data = await this.$axios.$get(`/alpha/${code}`)
        this.fetching = false
    }
}
</script>