<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const clock = ref('00:00:00')
const calendar = ref('01/01/1970')
const timer = ref(null)

const pad = n => String(n).padStart(2, '0')
const update = () => {
    const date = new Date()

    const hour = pad(date.getHours())
    const min = pad(date.getMinutes())
    const sec = pad(date.getSeconds())
    clock.value = `${hour}:${min}:${sec}`

    const day = pad(date.getDate())
    const month = pad(date.getMonth() + 1)
    const year = date.getFullYear()
    calendar.value = `${day}/${month}/${year}`
}

onMounted(() => {
    update()
    timer.value = setInterval(update, 1000)
})

onBeforeUnmount(() => {
    clearInterval(timer.value)
})
</script>

<template>
    <div class="time-and-gil-wrapper">
        <div class="time-and-gil">
            <div class="label">TIME & GIL</div>
            <span class="icon"></span>
            <div class="time">{{ clock }}</div>
            <span class="icon">󰸗</span>
            <div class="date">{{ calendar }}</div>
        </div>
    </div>
</template>

<style scoped>
.time-and-gil-wrapper {
    margin: 1.5rem 0;
    width: 10rem;
    border-radius: 10px;
    border: 2px #fff solid;
}

.time-and-gil {
    border-radius: 8px;
    background: var(--gray-2);
    border-top: 2px var(--gray-1) solid;
    border-right: 2px var(--gray-4) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-left: 2px var(--gray-1) solid;

    position: relative;
    display: grid;
    padding: 0.5rem 0.5rem;
    grid-template-columns: auto 1fr;
    row-gap: 0.5rem;

    font-size: smaller;
}

.icon {
    width: 1.5rem;
    display: flex;
    justify-content: center;
}
.time,
.date {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.label {
    position: absolute;
    left: 5%;
    bottom: 100%;
    /* font-weight: bold; */
    font-size: 0.8rem;
    text-shadow:
        0px -1px #000,
        1px -1px #000,
        1px 0px #000,
        1px 1px #000,
        0px 1px #000,
        -1px 1px #000,
        -1px 0px #000,
        -1px -1px #000;
}
</style>
