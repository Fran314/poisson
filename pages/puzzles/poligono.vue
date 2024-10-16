<script setup>
import imgPoly from '~/assets/puzzles/poligono.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="¿?¿" page="¿?¿">
        <PuzzlePage solutionHash="106940952">
            <img :src="imgPoly" />
        </PuzzlePage>
    </NuxtLayout>
</template>

<style scoped>
img {
    width: 100%;
}
</style>
