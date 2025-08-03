<script setup lang="ts">
import CustomRouterLink from './CustomRouterLink.vue';
import CardEntry from './CardEntry.vue'

const {
    routeTo = null,
    ...props
} = defineProps([
    'topRight',
    'topLeft',
    'center',
    'bottomRight',
    'bottomLeft',
    'img',
    'lefty',
    'routeTo',
    'disabled',
])
</script>

<template>
    <CustomRouterLink :to="routeTo">
        <CardEntry v-bind="props" clickable="true" />
    </CustomRouterLink>
    <!-- <RouterLink :to="to" @click="playAudio"> -->
    <!-- </RouterLink> -->
</template>

<style scoped>
a {
    color: inherit;
}
</style>
