<script setup lang="ts">
import magicStone from '~/assets/img/magic-stone.png'
const {
    topRight = '',
    topLeft = '',
    center = '',
    bottomRight = '',
    bottomLeft = '',
    img = null,
    lefty = true,
    link = null,
    disabled = false,
} = defineProps([
    'topRight',
    'topLeft',
    'center',
    'bottomRight',
    'bottomLeft',
    'img',
    'lefty',
    'link',
    'disabled',
])

// magic constants
const constraints = [
    [topLeft, 18],
    [topRight, 19],
    [center, 32],
    [bottomLeft + bottomRight, 38],
]
constraints.forEach(([s, n]: [string, number]) => {
    if (s.length > n) {
        throw new Error(
            `card entry text too long: ${s.substring(0, n)}|${s.substring(n)}`,
        )
    }
})
</script>

<template>
    <CardEntryModular
        :img="img"
        :lefty="lefty"
        :link="link"
        :disabled="disabled"
    >
        <template #topLeft>
            <div class="top-left">{{ topLeft }}</div>
        </template>
        <template #topRight>
            <div class="top-right">{{ topRight }}</div>
        </template>
        <template #main>
            <div class="main">
                <div class="center">
                    {{ center }}
                    <!-- <div class="render-long-text"> -->
                    <!--     {center} -->
                    <!-- </div> -->
                    <!-- <div class="render-short-text"> -->
                    <!--     {center_short} -->
                    <!-- </div> -->
                </div>
                <div class="bottom">
                    <div class="bottom-left">{{ bottomLeft }}</div>
                    <div class="bottom-right">{{ bottomRight }}</div>
                </div>
            </div>
        </template>
    </CardEntryModular>
</template>

<style scoped>
.top-left {
    padding-left: 1rem;
    padding-right: 0.5rem;
    font-size: smaller;
}
.top-right {
    font-size: smaller;
}
.main {
    display: grid;
    grid-template-rows: 2rem 2rem;
}
.center {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0 1rem;
}
.bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: smaller;
}

/* @media (width <= 465px) { */
/*     .render-long-text { */
/*         display: none; */
/*     } */
/* } */
/* @media (width > 465px) { */
/*     .render-short-text { */
/*         display: none; */
/*     } */
/* } */
</style>
