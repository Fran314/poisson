<script setup>
const props = defineProps(['page'])

const active = ref(false)
</script>
<template>
    <div class="mobile-navbar-wrapper" :class="{ active }">
        <div class="menu-wrapper">
            <div class="hitbox" @click="active = !active" />
            <div class="menu">Menu</div>
        </div>
        <div class="main-navbar">
            <Navbar :page="page" />
        </div>
    </div>
</template>

<style scoped>
.mobile-navbar-wrapper {
    background: transparent;
    width: 100%;
    height: 100%;

    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    justify-content: end;

    gap: 2rem;

    pointer-events: none;

    position: relative;
}

.mobile-navbar-wrapper.active {
    background: rgba(0, 0, 0, 0.6);
}
.main-navbar {
    width: 10rem;
    pointer-events: auto;
    display: none;
}
.mobile-navbar-wrapper.active .main-navbar {
    display: block;
}

.menu-wrapper {
    border-radius: 10px;
    border: 2px #fff solid;
    height: fit-content;

    /* pointer-events: auto; */

    box-shadow: 0 0 5px 0px #1a1a1a;

    position: relative;
}
.mobile-navbar-wrapper.active .menu-wrapper {
    position: initial;
}
.hitbox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    pointer-events: auto;
    cursor: pointer;
}

.menu {
    padding: 0.5rem 2rem;
    background-color: var(--gray-2);
    border-top: 2px var(--gray-1) solid;
    border-left: 2px var(--gray-1) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-right: 2px var(--gray-4) solid;
    border-radius: 8px;
    display: flex;
    justify-content: center;
}
</style>
