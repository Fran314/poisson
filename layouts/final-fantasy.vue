<script setup>
import icon from '~/assets/img/icon.png'
import ogImage from '~/assets/img/baldo.png'
import audio from '~/assets/final-fantasy-cursor-sound.mp3'

const props = defineProps(['title', 'page'])

const fullTitle = 'Francesco Baldino - ' + props.title
const description = 'Pagina personale di Francesco Baldino'

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
    <!-- Screen reader stuff -->
    <NuxtRouteAnnouncer />

    <BackgroundDecorations />

    <audio :src="audio" autoplay></audio>
    <div class="header">
        <h5><span class="desktop">Francesco Baldino -</span> {{ title }}</h5>
    </div>
    <div class="main">
        <div class="page-content">
            <slot />
            <div class="mobile">
                <TimeAndGil />
            </div>
        </div>
        <div class="desktop desktop-navbar">
            <Navbar :page="page" />
            <TimeAndGil />
        </div>
    </div>
    <div class="mobile mobile-navbar">
        <MobileNavbar :page="page" />
    </div>
</template>

<style>
:root {
    --gray-1: #6f787a;
    --gray-2: #585858;
    --gray-3: #4a4a4a;
    --gray-4: #393939;
    --gray-5: #2b2b2b;
}
@font-face {
    font-family: 'Recursive';
    src: url('~/assets/fonts/RecMonoDuotoneNerdFont-Regular.ttf')
        format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Recursive';
    src: url('~/assets/fonts/RecMonoDuotoneNerdFont-Bold.ttf')
        format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Recursive';
    src: url('~/assets/fonts/RecMonoDuotoneNerdFont-Italic.ttf')
        format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}
@font-face {
    font-family: 'Recursive';
    src: url('~/assets/fonts/RecMonoDuotoneNerdFont-BoldItalic.ttf')
        format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}
@font-face {
    font-family: 'BigBlueTerm';
    src: url('~/assets/fonts/BigBlueTerm437NerdFont-Regular.ttf')
        format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
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

    background: #1a1a1a;
    color: #fff;
    text-shadow: 1px 1px #000;
    font-size: 20px;
    font-family: 'Recursive';
    /* font-family: "Noto Sans"; */
}

@media (width <= 720px) {
    body {
        font-size: 16px;
    }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 0.5rem 0;
    color: rgb(var(--black));
    line-height: 1.2;
    font-family: 'BigBlueTerm';
    text-shadow: 2px 2px #000;
}
h1 {
    font-size: 3.052em;
}
h2 {
    font-size: 2.441em;
}
h3 {
    font-size: 1.953em;
}
h4 {
    font-size: 1.563em;
}
h5 {
    font-size: 1.25em;
}
strong,
b {
    font-weight: 700;
}
a {
    text-decoration: none;
    color: #73cccf;
}
</style>

<style scoped>
.header,
.main {
    width: 720px;
    max-width: 100%;
    margin: auto;
}
.header {
    padding: 2rem 2rem 1rem 2rem;
    border-bottom: 2px #fff solid;
}
.main {
    padding: 2rem 0.5rem;

    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
}
.desktop-navbar {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
}
.mobile-navbar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    pointer-events: none;
}
@media (width <= 720px) {
    .main {
        position: relative;
        padding: 0rem 0.5rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .header {
        padding: 1rem;
        border: none;
    }
}
</style>
