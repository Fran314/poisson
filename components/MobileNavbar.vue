<script setup>
const props = defineProps(['page'])

const active = ref(false)

const toggleActive = e => {
    e.stopPropagation()
    active.value = !active.value
}
</script>
<template>
    <div
        class="mobile-navbar-wrapper"
        :class="{ active }"
        @click="toggleActive"
    >
        <div class="menu-wrapper">
            <div class="menu" @click="toggleActive">Menu</div>
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
    pointer-events: auto;
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

    pointer-events: auto;

    box-shadow: 0 0 5px 0px #1a1a1a;

    cursor: pointer;
}
.mobile-navbar-wrapper.active .menu-wrapper {
    position: initial;
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
