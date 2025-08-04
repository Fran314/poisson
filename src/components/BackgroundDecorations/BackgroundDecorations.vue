<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import WinterSolstice from './winter-solstice.js'
import AutumnEquinox from './autumn-equinox.js'
import SpringEquinox from './spring-equinox.js'
import ChocoboRun from './chocobo-run.js'

const route = useRoute()

const canvas = ref(null)

class TimeKeeper {
    constructor() {
        this.lastTick = new Date().getTime()
    }

    tick() {
        const newTick = new Date().getTime()
        const dt = (newTick - this.lastTick) / 1000
        this.lastTick = newTick

        return dt
    }
}

class EventManager {
    constructor() {
    }

    #reqAnimFrameID

    restart = () => {
        this.events = [
            new WinterSolstice(canvas.value.width, canvas.value.height),
            new AutumnEquinox(canvas.value.width, canvas.value.height),
            new SpringEquinox(canvas.value.width, canvas.value.height),
            new ChocoboRun(canvas.value.width, canvas.value.height),
        ]
        this.tk = new TimeKeeper()

        cancelAnimationFrame(this.#reqAnimFrameID)
        this.#animate()
    }

    #animate = () => {
        const dt = this.tk.tick()

        const context = canvas.value.getContext('2d')
        context.clearRect(0, 0, canvas.value.width, canvas.value.height)

        let anyStillActive = false
        this.events.forEach(event => {
            if (event.active) {
                anyStillActive = true
                event.update(dt, canvas.value.width, canvas.value.height)
                event.draw(context)
            }
        })

        if (anyStillActive)
            this.#reqAnimFrameID = requestAnimationFrame(this.#animate)
    }
}

onMounted(() => {
    function setSize() {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize, false)

    const eventManager = new EventManager()
    eventManager.restart()

    watch(() => route.query.decoration, () => {
        eventManager.restart()
    })
})
</script>

<template>
    <canvas class="background-decorations" ref="canvas" />
</template>

<style scoped>
.background-decorations {
    image-rendering: pixelated;
    image-rendering: crisp-edges;

    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    pointer-events: none;
    z-index: 99999;

    /* background-color: red; */
}
</style>
