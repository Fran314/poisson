<script setup>
import icon from '~/assets/img/icon.png'
import ogImage from '~/assets/img/baldo.png'

const fullTitle = 'Francesco Baldino - Calcolatore Media'
const description =
    'Tool per calcolare la media visto che farlo a mano è una sbatta e pre laurea uno è in ansia'

useHead({
    title: fullTitle,
    meta: [
        {
            name: 'description',
            content: description,
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: icon,
        },
    ],
})

useSeoMeta({
    title: fullTitle,
    ogTitle: fullTitle,
    ogType: 'website',
    description: description,
    ogDescription: description,
    ogImage: ogImage,
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <BackgroundDecorations />

    <div class="main">
        <slot />
    </div>
</template>

<style>
@font-face {
    font-family: 'ComicShannsMono';
    src: url('~/assets/fonts/ComicShannsMonoNerdFont-Regular.otf')
        format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

html {
    max-height: 100vh;
    max-height: 100dvh;
    overflow-y: clip;
}
body {
    margin: 0;

    height: 100vh;
    height: 100dvh;
    overflow-y: scroll;

    font-size: 20px;
}
.main {
    padding: 2rem 1rem;
    font-family: 'ComicShannsMono';
}

@media (width <= 720px) {
    body {
        font-size: 16px;
    }
}
</style>
