<script setup>
const props = defineProps(['page'])
</script>

<template>
    <div class="navbar">
        <NavbarEntry :page="page" name="Home" link="/" />
        <NavbarEntry :page="page" name="Università" link="/universita" />
        <NavbarEntry :page="page" name="Progetti" link="/progetti" />
        <NavbarEntry :page="page" name="Appunti" link="/appunti" />
        <NavbarEntry :page="page" name="Contatti" link="/contatti" />
        <NavbarEntry :page="page" name="Varie" link="/varie" />
        <NavbarEntry :page="page" name="¿?¿" link="/puzzles" />
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
