<script setup>
import Navbar from '@/components/Navbar.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';
import TimeAndGil from '@/components/TimeAndGil.vue';

const props = defineProps(['title'])

</script>

<template>
  <div class="page">
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
        <Navbar />
        <TimeAndGil />
      </div>
    </div>
    <div class="mobile mobile-navbar">
      <MobileNavbar />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Recursive';
  src: url('/res/fonts/RecMonoDuotoneNerdFont-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Recursive';
  src: url('/res/fonts/RecMonoDuotoneNerdFont-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Recursive';
  src: url('/res/fonts/RecMonoDuotoneNerdFont-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Recursive';
  src: url('/res/fonts/RecMonoDuotoneNerdFont-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'BigBlueTerm';
  src: url('/res/fonts/BigBlueTerm437NerdFont-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* <DEEP> */
:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  margin: 0 0 0.5rem 0;
  color: rgb(var(--black));
  line-height: 1.2;
  font-family: 'BigBlueTerm';
  text-shadow: 2px 2px #000;
}

:deep(h1) {
  font-size: 3.052em;
}

:deep(h2) {
  font-size: 2.441em;
}

:deep(h3) {
  font-size: 1.953em;
}

:deep(h4) {
  font-size: 1.563em;
}

:deep(h5) {
  font-size: 1.25em;
}

:deep(strong),
:deep(b) {
  font-weight: 700;
}

:deep(a) {
  text-decoration: none;
}

/* </DEEP> */

.page {
  --gray-1: #6f787a;
  --gray-2: #585858;
  --gray-3: #4a4a4a;
  --gray-4: #393939;
  --gray-5: #2b2b2b;

  height: 100%;

  background: #1a1a1a;
  color: #fff;
  text-shadow: 1px 1px #000;
  font-size: 20px;
  font-family: 'Recursive';

  overflow-y: scroll;
}

@media (width <=720px) {
  .page {
    font-size: 16px;
  }
}

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

@media (width <=720px) {
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
