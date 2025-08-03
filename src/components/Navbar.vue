<script setup>
import NavbarEntry from './NavbarEntry.vue';

const props = defineProps(['page'])
</script>

<template>
    <div class="navbar">
        <NavbarEntry name="Home" routeTo="/" />
        <NavbarEntry name="Università" routeTo="/universita" />
        <NavbarEntry name="Progetti" routeTo="/progetti" />
        <NavbarEntry name="Appunti" routeTo="/appunti" />
        <NavbarEntry name="Contatti" routeTo="/contatti" />
        <NavbarEntry name="Varie" routeTo="/varie" />
        <NavbarEntry name="¿?¿" routeTo="/puzzles" />
    </div>
</template>

<style scoped>
.navbar {
    border-radius: 10px;
    border: 2px #fff solid;
    height: fit-content;
    width: 10rem;
}
</style>
