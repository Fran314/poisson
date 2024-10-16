<script setup>
import imgASD from '~/assets/img/algoritmi-e-strutture-dati.png'
import imgCS from '~/assets/img/calcolo-scientifico.png'
import imgMetGraf from '~/assets/img/metodi-numerici-per-la-grafica.png'
import imgAMCQ from '~/assets/img/aspetti-matematici-della-computazione-quantistica.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Appunti" page="Appunti">
        <CardEntry
            link="/appunti/algoritmi-e-strutture-dati.pdf"
            :img="imgASD"
            topLeft="LaTeX"
            center="Algoritmi e Strutture Dati"
            center_short="Alg. e Strut. Dati"
            bottomRight="Pagli-Grossi, a.a 19/20"
        />
        <CardEntry
            link="/appunti/calcolo-scientifico.pdf"
            :img="imgCS"
            :lefty="false"
            topLeft="LaTeX"
            center="Calcolo Scientifico"
            bottomRight="Aceto, a.a 20/21"
        />
        <CardEntry
            link="/appunti/metodi-numerici-per-la-grafica.pdf"
            :img="imgMetGraf"
            topLeft="Tablet"
            center="Metodi Numerici per la Grafica"
            center_short="M.Num. per la Grafica"
            bottomRight="Boito, a.a 22/23"
        />
        <CardEntry
            link="/appunti/aspetti-matematici-della-computazione-quantistica-latex.pdf"
            :img="imgAMCQ"
            :lefty="false"
            topLeft="LaTeX"
            topRight="ENG"
            center="Asp.Mat. della comp. Quantistica"
            center_short="Asp.Mat. Comp.Quant."
            bottomRight="Boito-Trevisan, a.a 22/23"
        />
        <CardEntry
            link="/appunti/aspetti-matematici-della-computazione-quantistica-tablet.pdf"
            :img="imgAMCQ"
            :lefty="false"
            topLeft="Tablet"
            topRight="ENG"
            center="Asp.Mat. della comp. Quantistica"
            center_short="Asp.Mat. Comp.Quant."
            bottomRight="Boito-Trevisan, a.a 22/23"
        />
    </NuxtLayout>
</template>
