<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue';
import CardEntry from '@/components/CardEntry.vue';
import CardHref from '@/components/CardHref.vue';
</script>
<template>
    <FinalFantasy title="Contatti">
        <CardEntry img="/res/img/mail.png" :lefty="false" topLeft="Mail 󰊫" center="[n.cognome]@studenti.unipi.it"
            bottomRight="senza parentesi" />
        <CardHref link="https://github.com/Fran314" img="/res/img/github.png" topLeft="GitHub " center="Fran314"
            bottomRight="https://github.com/Fran314" />
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
    </FinalFantasy>
</template>
