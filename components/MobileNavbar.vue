<script setup>
const props = defineProps(['page'])

const active = ref(false)
</script>
<template>
    <div class="mobile-navbar-wrapper" :class="{ active }">
        <div class="main-navbar">
            <Navbar :page="page" />
        </div>
        <div class="footer">
            <!-- <div class="mobile-time-and-gil"> -->
            <!--     <TimeAndGil /> -->
            <!-- </div> -->
            <div class="menu-wrapper">
                <div class="menu" @click="active = !active">Menu</div>
            </div>
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
    flex-direction: column;
    align-items: end;
    justify-content: end;

    gap: 2rem;

    pointer-events: none;
}

.mobile-navbar-wrapper.active {
    background: rgba(0, 0, 0, 0.6);

    pointer-events: auto;
}
.main-navbar {
    width: 10rem;

    pointer-events: auto;

    display: none;

    z-index: 10000;
}
.mobile-navbar-wrapper.active .main-navbar {
    display: block;
}

.footer {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: end;
    /* box-shadow: 0 0 30px 40px #1a1a1a; */
    /* background: #1a1a1a; */
}
.mobile-time-and-gil {
    border-radius: 10px;
    /* box-shadow: 0 0 30px 50px #1a1a1a; */
    /* background: #1a1a1a; */
}
.menu-wrapper {
    border-radius: 10px;
    border: 2px #fff solid;
    height: fit-content;

    pointer-events: auto;

    display: flex;
    flex-direction: row-reverse;

    box-shadow: 0 0 5px 0px #1a1a1a;
    /* box-shadow: 0 0 30px 50px #1a1a1a; */
    /* background: #1a1a1a; */
}
.menu {
    position: relative;
    padding: 0.5rem 2rem;
    background-color: var(--gray-2);
    border-top: 2px var(--gray-1) solid;
    border-left: 2px var(--gray-1) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-right: 2px var(--gray-4) solid;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    /* font-size: smaller; */
}
</style>
