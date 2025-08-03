<script setup lang="ts">
import CardEntry from './CardEntry.vue'

const {
    link = null,
    ...props
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
</script>

<template>
    <a :href="link">
        <CardEntry v-bind="props" clickable="true" />
    </a>
</template>

<style scoped>
a {
    color: inherit;
}
</style>
