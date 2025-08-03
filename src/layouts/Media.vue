<script setup>
</script>

<template>
  <!-- <BackgroundDecorations /> -->

  <div class="main">
    <slot />
  </div>
</template>

<style>
@font-face {
  font-family: 'ComicShannsMono';
  src: url('/fonts/ComicShannsMonoNerdFont-Regular.otf') format('opentype');
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

@media (width <=720px) {
  body {
    font-size: 16px;
  }
}
</style>
