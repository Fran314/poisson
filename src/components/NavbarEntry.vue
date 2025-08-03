<script setup>
import { useRoute } from 'vue-router'
import CustomRouterLink from './CustomRouterLink.vue'
import { computed } from 'vue'

const {
    name = '',
    routeTo = null,
} = defineProps(['name', 'routeTo'])

const route = useRoute()

const selected = computed(() => {
    if (routeTo === '/')
        return route.path === routeTo

    return route.path.startsWith(routeTo)
})

</script>

<template>
    <div class="entry" :class="{ selected }">
        <CustomRouterLink :to="routeTo">
            {{ name }}
        </CustomRouterLink>
    </div>
</template>

<style scoped>
.entry {
    position: relative;
    background-color: var(--gray-2);
    border-top: 2px var(--gray-1) solid;
    border-left: 2px var(--gray-1) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-right: 2px var(--gray-4) solid;

    font-size: smaller;
}

@media (width <=720px) {
    .entry {
        font-size: medium;
    }
}

.entry:first-of-type {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}

.entry:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.entry:hover::before,
.entry.selected::before {
    background: url('@/assets/img/hand.png') no-repeat;
    background-size: 2rem 1rem;
    content: '';
    position: absolute;
    right: calc(100% - 1rem);
    top: calc(50% - 0.5rem);
    display: block;
    width: 2rem;
    height: 1rem;
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

.entry:hover::before {
    animation: blink 0.5s ease-in infinite alternate;
}

a {
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;

    color: inherit;
}
</style>
