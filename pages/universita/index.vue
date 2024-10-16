<script setup>
import imgTesi from '~/assets/img/tesi-triennale.png'
import imgSP from '~/assets/img/semester-project.png'
import imgLC from '~/assets/img/laboratorio-computazionale.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Università" page="Università">
        <CardEntry
            link="/universita/tesi-triennale"
            :img="imgTesi"
            center="Tesi Triennale"
            topLeft="16 Dic. 2022"
            topRight="PQ key exchange"
            bottomRight="relatori: A. Bernasconi, S. Chessa"
        />
        <CardEntry
            link="/universita/semester-project"
            :img="imgSP"
            :lefty="false"
            center="Semester Project @ EPFL"
            topLeft="Giugno 2022"
            topRight="Preimage-sampling"
            bottomRight="supervisors: A. Chiesa, G. Fenzi"
        />
        <CardEntry
            link="/universita/laboratorio-computazionale"
            :img="imgLC"
            center="Laboratorio Computazionale"
            topLeft="Ottobre 2022"
            topRight="FHE vs MPC"
            bottomRight="relatori: A. Bernasconi, S. Chessa"
        />
        <CardEntry :disabled="true" />
    </NuxtLayout>
</template>
