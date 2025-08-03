<script setup>
import { ref, onMounted, onActivated } from 'vue'
import WinterSolstice from './winter-solstice.js'
import AutumnEquinox from './autumn-equinox.js'
import SpringEquinox from './spring-equinox.js'
import ChocoboRun from './chocobo-run.js'

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

onMounted(() => {
    function setSize() {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize, false)

    const context = canvas.value.getContext('2d')

    // This is a bit of a convoluted way to handle the Sprite Managers,
    // but it makes it so that if no event is needed, it doesn't enter the
    // render loop at all, which hopefully saves some CPU
    // const events = [
    //     generateWS(canvas.value.width, canvas.value.height),
    //     generateAE(canvas.value.width, canvas.value.height),
    //     generateSE(canvas.value.width, canvas.value.height),
    //     generateChocobo(canvas.value.width, canvas.value.height),
    // ].filter(x => x !== null)
    const events = [
        new WinterSolstice(canvas.value.width, canvas.value.height),
        new AutumnEquinox(canvas.value.width, canvas.value.height),
        new SpringEquinox(canvas.value.width, canvas.value.height),
        new ChocoboRun(canvas.value.width, canvas.value.height),
    ]

    const tk = new TimeKeeper()
    const animate = () => {
        const dt = tk.tick()

        context.clearRect(0, 0, canvas.value.width, canvas.value.height)

        let anyStillActive = false
        events.forEach(event => {
            if (event.active) {
                anyStillActive = true
                event.update(dt, canvas.value.width, canvas.value.height)
                event.draw(context)
            }
        })

        if (anyStillActive) requestAnimationFrame(animate)
    }

    animate()
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
