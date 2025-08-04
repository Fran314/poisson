<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue'
import CardRouterLink from '@/components/CardRouterLink.vue'
</script>
<template>
    <FinalFantasy title="Easter Egg">
        <CardRouterLink :route-to="{ path: '/', query: { decoration: 'winter-solstice' } }"
            img="/res/img/decorations/winter-snowflake-mugshot.png" center="Solstizio d'Inverno"
            bottomRight="prima settimana di Inverno" />
        <CardRouterLink :route-to="{ path: '/', query: { decoration: 'autumn-equinox' } }"
            img="/res/img/decorations/autumn-leaf-mugshot.png" :lefty="false" center="Equinozio d'Autunno"
            bottomRight="prima settimana di Autunno" />
        <CardRouterLink :route-to="{ path: '/', query: { decoration: 'spring-equinox' } }"
            img="/res/img/decorations/spring-petal-mugshot.png" center="Equinozio di Primavera"
            bottomRight="prima settimana di Primavera" />
        <CardRouterLink :route-to="{ path: '/', query: { decoration: 'chocobo-run' } }" center="Chocobo run"
            bottomRight="random con probabilità 1/20" />
    </FinalFantasy>
</template>
