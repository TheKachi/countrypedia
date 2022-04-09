export default {
  target: "static",

  ssr: false,
  generate: {
    fallback: true,
  },

  head: {
    title: "country-api",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
      },
    ],
    link: [
      {
        rel: "preload",
        href: "https://res.cloudinary.com/thekachi/image/upload/v1647533832/Screen_Shot_2022-03-17_at_5.13.58_PM_zm7r2b.png",
      },
    ],
  },

  css: [],

  plugins: ["@/plugins/axios"],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  modules: ["@nuxtjs/axios"],

  build: {},

  axios: {
    baseURL: "https://restcountries.com/v2",
  },

  colorMode: {
    classSuffix: "",
  },
};
