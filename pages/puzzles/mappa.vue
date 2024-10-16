<script setup>
import imgMappa from '~/assets/puzzles/mappa.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="¿?¿" page="¿?¿">
        <PuzzlePage solutionHash="106940952">
            <img :src="imgMappa" />
        </PuzzlePage>
    </NuxtLayout>
</template>

<style scoped>
img {
    width: 100%;
}
</style>
