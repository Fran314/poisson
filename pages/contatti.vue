<script setup>
import imgMail from '~/assets/img/mail.png'
import imgGitHub from '~/assets/img/github.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Contatti" page="Contatti">
        <CardEntry
            :img="imgMail"
            :lefty="false"
            topLeft="Mail 󰊫"
            center="[n.cognome]@studenti.unipi.it"
            bottomRight="senza parentesi"
        />
        <CardEntry
            link="https://github.com/Fran314"
            :absoluteLink="true"
            :img="imgGitHub"
            topLeft="GitHub "
            center="Fran314"
            bottomRight="https://github.com/Fran314"
        />
        <CardEntry :disabled="true" />
        <CardEntry :disabled="true" />
    </NuxtLayout>
</template>
