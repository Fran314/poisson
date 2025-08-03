<script setup lang="ts">
import TextblockEntry from './TextblockEntry.vue'

const { solutionHash } = defineProps(['solutionHash'])
const model = defineModel({ default: '' })

const normalizeText = s => {
    return s.toLowerCase().replace(/ /g, '')
}
const hashCode = s => {
    return s.split('').reduce(function (a, b) {
        a = (a << 5) - a + b.charCodeAt(0)
        return a & a
    }, 0)
}

const checkSolution = () => {
    alert(
        'Ehi senti in realtà questa funzione non funziona ancora... Riprova in futuro!',
    )
    return

    const proposedSolution = hashCode(normalizeText(model.value))
    if (proposedSolution.toString() === solutionHash) {
        alert('Risposta corretta!')
    } else {
        alert('Risposta sbagliata...')
        // console.log(proposedSolution)
    }
}
</script>

<template>
    <TextblockEntry>
        <div class="solution-evaluator">
            <input v-on:keyup.enter="checkSolution()" v-model="model" />
            <div class="button-wrapper">
                <div class="submit-button" @click="checkSolution()">Submit</div>
            </div>
        </div>
        <slot />
    </TextblockEntry>
</template>

<style scoped>
.solution-evaluator {
    width: 100%;
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 0 1rem;
    padding-bottom: 2rem;
}

.button-wrapper {
    border: 2px #fff solid;
    border-radius: 10px;
}

.submit-button {
    padding: 0.3rem 1rem;
    border-top: 2px var(--gray-1) solid;
    border-left: 2px var(--gray-1) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-right: 2px var(--gray-4) solid;
    border-radius: 8px;

    position: relative;

    cursor: pointer;
}

@keyframes blink {
    0% {
        opacity: 100%;
    }

    75% {
        opacity: 50%;
    }

    100% {
        opacity: 0%;
    }
}

.submit-button:hover::before {
    background: url('@/assets/img/hand.png') no-repeat;
    background-size: 2rem 1rem;
    content: '';
    position: absolute;
    right: calc(100% - 1rem);
    top: calc(50% - 0.5rem);
    display: block;
    width: 2rem;
    height: 1rem;
    animation: blink 0.5s ease-in infinite alternate;
}

input {
    height: fit-content;
    align-self: center;
}
</style>
