<script setup>
import imgMedia from '~/assets/img/calcolatore-media-3000.png'
import imgEulero from '~/assets/img/angoli-di-eulero.png'
import imgEasterEgg from '~/assets/img/decorations/easter-egg.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Varie" page="Varie">
        <CardEntry
            link="/media"
            :img="imgMedia"
            topLeft="[unofficial]"
            center="Calcolatore Media Unipi 300"
            bottomRight="graphics design is my passion"
        />
        <CardEntry
            link="/animazione-angoli-eulero/index.html"
            :img="imgEulero"
            :lefty="false"
            topLeft="Mecc. Raz."
            center="Animazione angoli di Eulero"
            bottomRight="cap 6.2.3 le matrici si invertono"
        />
        <CardEntry
            link="/easter-egg"
            :img="imgEasterEgg"
            topLeft="Molto divertenti"
            center="Easter egg del sito"
            bottomRight="solo poco fastidiosi"
        />
        <CardEntry :disabled="true" />
    </NuxtLayout>
</template>
