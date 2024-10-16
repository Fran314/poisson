<script setup>
const {
    img = null,
    compressible = true,
    lefty = true,
    link = null,
    absoluteLink = false,
    disabled = false,
} = defineProps([
    'img',
    'compressible',
    'lefty',
    'link',
    'absoluteLink',
    'disabled',
])
const rebasedLink = absoluteLink ? link : rebaseUrl(link)
</script>

<template>
    <a :href="rebasedLink">
        <div
            class="entry"
            :class="{
                clickable: link != null,
                disabled,
                compressible,
            }"
        >
            <div
                class="spacer"
                :class="{ 'not-mobile-small': compressible }"
            ></div>
            <div
                class="mugshot"
                :class="{ lefty, 'not-mobile-small': compressible }"
            >
                <img v-if="img !== null" :src="img" />
            </div>
            <div class="content-wrapper">
                <div class="top">
                    <div class="top-left-wrapper">
                        <slot name="topLeft" />
                    </div>
                    <div class="top-right-wrapper">
                        <slot name="topRight" />
                    </div>
                </div>
                <div class="main-wrapper">
                    <slot name="main" />
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped>
a {
    color: inherit;
}
.entry {
    --entry-light: var(--gray-1);
    --entry-background: var(--gray-2);
    --entry-dark: var(--gray-4);

    background-color: var(--entry-background);
    border-top: 2px var(--entry-light) solid;
    border-right: 2px var(--entry-dark) solid;
    border-bottom: 2px var(--entry-dark) solid;
    border-left: 2px var(--entry-light) solid;

    display: grid;
    grid-template-columns: 0.5rem 6rem auto;
    position: relative;
}
@media (width <= 720px) {
    /* .entry:first-of-type { */
    /*     border-top-left-radius: 8px; */
    /*     border-top-right-radius: 8px; */
    /* } */
    /* .entry:last-of-type { */
    /*     border-bottom-left-radius: 8px; */
    /*     border-bottom-right-radius: 8px; */
    /* } */
}
.entry.disabled {
    --entry-light: var(--gray-2);
    --entry-background: var(--gray-3);
    --entry-dark: var(--gray-5);
}

@keyframes blink {
    0% {
        opacity: 100%;
    }
    75% {
        opacity: 50%;
    }
    100% {
        opacity: 0%;
    }
}

.entry.clickable:hover::before {
    background: url('~/assets/img/hand.png') no-repeat;
    background-size: auto;
    background-size: 3rem 1.5rem;
    content: '';
    position: absolute;
    right: calc(100% - 1.5rem);
    top: calc(50% - 0.75rem);
    display: block;
    width: 3rem;
    height: 1.5rem;

    animation: blink 0.5s ease-in infinite alternate;
}

.mugshot {
    background-color: var(--entry-dark);
    display: flex;
    height: 100%;
    flex-direction: row-reverse;
}
.mugshot.lefty {
    flex-direction: row;
}

img {
    height: 6rem;
    width: 5.4rem;
    /* height: 100%; */
    /* width: 90%; */
}

.content-wrapper {
    display: grid;
    grid-template-rows: 2rem 4rem;
}
@media (width <= 465px) {
    .entry.compressible {
        display: flex;
    }
    .entry.compressible .content-wrapper {
        width: 100%;
    }
}
.top-right-wrapper,
.top-left-wrapper {
    display: flex;
    align-items: center;
}
.top {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.top-right-wrapper {
    border-left: 2px var(--entry-light) solid;
    border-bottom: 2px var(--entry-dark) solid;
    display: flex;
    justify-content: center;
}
</style>
