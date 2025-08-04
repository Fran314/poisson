<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue'
import CardEntry from '@/components/CardEntry.vue'
import CardRouterLink from '@/components/CardRouterLink.vue'
</script>
<template>
    <FinalFantasy title="Università">
        <CardRouterLink routeTo="/universita/tesi-triennale" img="/res/img/tesi-triennale.png" center="Tesi Triennale"
            topLeft="16 Dic. 2022" topRight="PQ key exchange" bottomRight="relatori: A. Bernasconi, S. Chessa" />
        <CardRouterLink routeTo="/universita/semester-project" img="/res/img/semester-project.png" :lefty="false"
            center="Semester Project @ EPFL" topLeft="Giugno 2022" topRight="Preimage-sampling"
            bottomRight="supervisors: A. Chiesa, G. Fenzi" />
        <CardRouterLink routeTo="/universita/laboratorio-computazionale" img="/res/img/laboratorio-computazionale.png"
            center="Laboratorio Computazionale" topLeft="Ottobre 2022" topRight="FHE vs MPC"
            bottomRight="relatori: A. Bernasconi, S. Chessa" />
        <CardEntry :disabled="true" />
    </FinalFantasy>
</template>
