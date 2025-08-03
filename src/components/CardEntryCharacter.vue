<script setup>
import CardEntryModular from './CardEntryModular.vue';
const {
    img = null,
    lefty = true,
    name = '',
    lv = '25',
    hp = '1300/1300',
    mp = '255/255',
    ap = '6/28',
} = defineProps(['img', 'lefty', 'name', 'lv', 'hp', 'mp', 'ap'])
</script>

<template>
    <CardEntryModular :compressible="false" :img="img" :lefty="lefty">
        <template #topLeft>
            <div class="top-left">
                {{ name }}
                <span class="render-long-text">Lv {{ lv }}</span>
            </div>
        </template>
        <template #topRight>
            <div class="top-right render-short-text">Lv {{ lv }}</div>
        </template>
        <template #main>
            <div class="main">
                <div class="stats">
                    <div class="hp">HP {{ hp }}</div>
                    <div class="mp">MP {{ mp }}</div>
                </div>
                <div class="ap">
                    <img class="magic-stone" src="@/assets/img/magic-stone.png" />
                    {{ ap }}
                </div>
            </div>
        </template>
    </CardEntryModular>
</template>

<style scoped>
.top-left {
    width: 100%;
    padding-left: 1rem;
    padding-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-left span {
    font-size: smaller;
}

.main {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem 1rem;
}

.stats {
    display: flex;
    flex-direction: column;
    font-size: smaller;
    align-self: center;
}

@media (width <=465px) {
    .render-long-text {
        display: none;
    }

    .main {
        display: flex;
        justify-content: space-between;
    }
}

@media (width > 465px) {
    .render-short-text {
        display: none;
    }
}

@media (width <=720px) {
    .stats {
        font-size: medium;
    }
}

.ap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.magic-stone {
    width: 1.5rem;
}
</style>
