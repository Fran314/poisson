// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        baseURL: '/~baldino',
    },
    css: ['~/assets/scss/global.scss'],
})
