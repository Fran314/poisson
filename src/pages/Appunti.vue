<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue';
import CardEntry from '@/components/CardEntry.vue'
import CardHref from '@/components/CardHref.vue';
import { rebaseUrl } from '@/utils';
</script>

<template>
    <FinalFantasy title="Appunti">
        <CardHref :link="rebaseUrl('/res/appunti/algoritmi-e-strutture-dati.pdf')"
            img="/res/img/algoritmi-e-strutture-dati.png" topLeft="LaTeX" center="Algoritmi e Strutture Dati"
            center_short="Alg. e Strut. Dati" bottomRight="Pagli-Grossi, a.a 19/20" />
        <CardHref :link="rebaseUrl('/res/appunti/calcolo-scientifico.pdf')" img="/res/img/calcolo-scientifico.png"
            :lefty="false" topLeft="LaTeX" center="Calcolo Scientifico" bottomRight="Aceto, a.a 20/21" />
        <CardHref :link="rebaseUrl('/res/appunti/metodi-numerici-per-la-grafica.pdf')"
            img="/res/img/metodi-numerici-per-la-grafica.png" topLeft="Tablet" center="Metodi Numerici per la Grafica"
            center_short="M.Num. per la Grafica" bottomRight="Boito, a.a 22/23" />
        <CardHref :link="rebaseUrl('/res/appunti/aspetti-matematici-della-computazione-quantistica-latex.pdf')"
            img="/res/img/aspetti-matematici-della-computazione-quantistica.png" :lefty="false" topLeft="LaTeX"
            topRight="ENG" center="Asp.Mat. della comp. Quantistica" center_short="Asp.Mat. Comp.Quant."
            bottomRight="Boito-Trevisan, a.a 22/23" />
        <CardHref :link="rebaseUrl('/res/appunti/aspetti-matematici-della-computazione-quantistica-tablet.pdf')"
            img="/res/img/aspetti-matematici-della-computazione-quantistica.png" :lefty="false" topLeft="Tablet"
            topRight="ENG" center="Asp.Mat. della comp. Quantistica" center_short="Asp.Mat. Comp.Quant."
            bottomRight="Boito-Trevisan, a.a 22/23" />
    </FinalFantasy>
</template>
