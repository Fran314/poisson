<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue';
import CardEntry from '@/components/CardEntry.vue';
import CardHref from '@/components/CardHref.vue';
</script>
<template>
    <FinalFantasy title="Contatti">
        <CardHref link="https://github.com/Fran314/poisson" img="/img/vue.png" center="Questo bellissimo sito!"
            topLeft="GitHub" bottomRight="built in Vue3">
        </CardHref>
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
    </FinalFantasy>
</template>
