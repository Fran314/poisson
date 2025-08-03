<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import finalFantasyCursorSound from '@/assets/final-fantasy-cursor-sound.mp3'

const { to = null } = defineProps(['to'])

const route = useRoute()
const _to = computed(() => {
    if (typeof to === 'string') {
        return { path: to, query: { decoration: route.query.decoration } }
    }

    return { query: { decoration: route.query.decoration }, ...to }
})

const playAudio = () => {
    const audio = new Audio(finalFantasyCursorSound)
    audio.play()
}
</script>

<template>
    <RouterLink :to="_to" @click="playAudio">
        <slot />
    </RouterLink>
</template>

<style scoped></style>
