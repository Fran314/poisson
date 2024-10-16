<script setup></script>

<template>
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

body {
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
