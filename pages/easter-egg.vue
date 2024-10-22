<script setup>
import imgWS from '~/assets/img/decorations/winter-snowflake-mugshot.png'
import imgAE from '~/assets/img/decorations/autumn-leaf-mugshot.png'
import imgSE from '~/assets/img/decorations/spring-petal-mugshot.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Varie" page="Varie">
        <CardEntry
            link="/?decoration=winter-solstice"
            :img="imgWS"
            center="Solstizio d'Inverno"
            bottomRight="prima settimana di Inverno"
        />
        <CardEntry
            link="/?decoration=autumn-equinox"
            :img="imgAE"
            :lefty="false"
            center="Equinozio d'Autunno"
            bottomRight="prima settimana di Autunno"
        />
        <CardEntry
            link="/?decoration=spring-equinox"
            :img="imgSE"
            center="Equinozio di Primavera"
            bottomRight="prima settimana di Primavera"
        />
        <CardEntry
            link="/?decoration=chocobo-run"
            center="Chocobo run"
            bottomRight="random con probabilità 1/20"
        />
    </NuxtLayout>
</template>
