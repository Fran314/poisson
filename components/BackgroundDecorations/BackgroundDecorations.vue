<script setup>
import generateWS from './winter-solstice.js'
import generateAE from './autumn-equinox.js'
import generateSE from './spring-equinox.js'
import generateChocobo from './chocobo-run.js'
const canvas = ref()

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
    const events = [
        generateWS(canvas.value.width, canvas.value.height),
        generateAE(canvas.value.width, canvas.value.height),
        generateSE(canvas.value.width, canvas.value.height),
        generateChocobo(canvas.value.width, canvas.value.height),
    ].filter(x => x !== null)

    if (events.length > 0) {
        let lt = new Date().getTime()
        const animate = () => {
            let ct = new Date().getTime()
            let dt = Math.min((ct - lt) / 1000, 1 / 60)
            lt = ct

            context.clearRect(0, 0, canvas.value.width, canvas.value.height)

            events.forEach(event => {
                event.update(dt, canvas.value.width, canvas.value.height)
                event.draw(context)
            })

            requestAnimationFrame(animate)
        }

        animate()
    }
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
