export default {
  ssr: true,
  target: "ssr",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "peyman",
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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos", mode: "client" },
    { src: "@/plugins/element-ui" },
    { src: "~/plugins/splide.client", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "nuxt-gsap-module",
    "@nuxtjs/apollo",
  ],

  gsap: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
  ],

/*   axios: {
    baseURL: 'http://peyman.local/wp-json/', // Replace with your WordPress site URL
  }, */

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://backend.ppa-co.ir/graphql',
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias["node-fetch-native"] = require.resolve("node-fetch");
    },
  },



};
