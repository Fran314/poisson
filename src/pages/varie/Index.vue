<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue'
import CardEntry from '@/components/CardEntry.vue'
import CardHref from '@/components/CardHref.vue'
import CardRouterLink from '@/components/CardRouterLink.vue'
import { rebaseUrl } from '@/utils'
</script>
<template>
    <FinalFantasy title="Varie">
        <CardRouterLink routeTo="/media" img="/res/img/calcolatore-media-3000.png" topLeft="[unofficial]"
            center="Calcolatore Media Unipi 300" bottomRight="graphics design is my passion" />
        <CardHref :link="rebaseUrl('/animazione-angoli-eulero/index.html')" img="/res/img/angoli-di-eulero.png"
            :lefty="false" topLeft="Mecc. Raz." center="Animazione angoli di Eulero"
            bottomRight="cap 6.2.3 le matrici si invertono" />
        <CardRouterLink routeTo="/varie/easter-egg" img="/res/img/decorations/easter-egg.png" topLeft="Molto divertenti"
            center="Easter egg del sito" bottomRight="solo poco fastidiosi" />
        <CardEntry :disabled="true" />
    </FinalFantasy>
</template>
