<script setup>
import imgNuxt from '~/assets/img/nuxt.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Progetti" page="Progetti">
        <CardEntry
            link="https://github.com/Fran314/poisson"
            :absoluteLink="true"
            :img="imgNuxt"
            center="Questo bellissimo sito!"
            topLeft="GitHub"
            bottomRight="built in Nuxt3"
        >
        </CardEntry>
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
    </NuxtLayout>
</template>

<style scoped>
.main {
    padding: 0.5rem 1rem;
}
.smaller {
    font-size: smaller;
}
</style>
