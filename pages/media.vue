<script setup>
import { ref, computed } from 'vue'
import wow from '~/assets/wow.mp3'

const { params } = useRoute()

const mediaType = ref('T')
const examsList = ref([])
const mediaValue = ref('')
const accesso = ref('')
const encoded = ref('')

const creditiEsclusi = computed(() => {
    return mediaType.value == 'T' ? 15 : 9
})
const sogliaLode = computed(() => {
    return mediaType.value == 'T' ? 7 : 8
})
const maxLode = computed(() => {
    return mediaType.value == 'T' ? 1.5 : 2
})
const linkRegolamento = computed(() => {
    const cdl = mediaType == 'T' ? 'MAT-L' : 'WMA-LM'
    return `https://www.dm.unipi.it/wp-content/uploads/2023/01/Report-Corso-di-Studi_${cdl}_23-24.pdf`
})

const removeExam = i => {
    examsList.value.splice(i, 1)
}
const addExam = () => {
    examsList.value.push({
        name: '',
        crediti: undefined,
        voto: undefined,
        lode: false,
    })
}

function calculate() {
    let bonusLode = 0
    let votiPerCredito = []
    let encodedString = ''
    examsList.value.forEach((exam, i) => {
        let crediti = parseInt(exam.crediti)
        let voto = parseInt(exam.voto)

        if (isNaN(crediti) || crediti <= 0 || crediti > 30) {
            alert(`Il ${i + 1}° esame ha un numero di crediti non valido.`)
            return
        }

        if (isNaN(voto) || voto < 18 || voto > 30) {
            alert(`Il ${i + 1}° esame ha un voto non valido`)
            return
        }

        if (exam.name.length >= 5) {
            encodedString += exam.name.substring(0, 5)
        } else {
            encodedString += exam.name + '!'
        }
        if (crediti < 10) encodedString += '0'
        encodedString += crediti
        if (voto == 30 && exam.lode) encodedString += '31'
        else encodedString += voto

        for (let j = 0; j < crediti; j++) {
            votiPerCredito.push(voto)
        }

        if (voto == 30 && exam.lode) {
            if (crediti < sogliaLode.value) {
                bonusLode += 0.25
            } else {
                bonusLode += 0.5
            }
        }
    })

    encoded.value = `exams=${encodedString}&type=${mediaType.value}`
    window.history.pushState(null, null, '?' + encoded.value)

    votiPerCredito.sort()

    if (votiPerCredito.length > creditiEsclusi.value) {
        votiPerCredito = votiPerCredito.slice(creditiEsclusi.value)
        let sum = votiPerCredito.reduce((a, b) => a + b, 0)
        mediaValue.value = sum / votiPerCredito.length

        if (bonusLode > maxLode.value) bonusLode = maxLode.value

        accesso.value =
            Math.ceil(((mediaValue.value * 11) / 3) * 100) / 100 + bonusLode

        const audio = new Audio(wow)
        audio.play()
    } else {
        alert(
            `Non hai abbastanza crediti per calcolare una media (ne servono più di ${creditiEsclusi.value})`,
        )
    }
}

onMounted(() => {
    if (process.client) {
        let url = new URL(window.location.href)
        if (url.searchParams.has('type')) {
            mediaType.value = url.searchParams.get('type')
        }
        if (url.searchParams.has('exams')) {
            let encodedString = url.searchParams.get('exams')
            let name = ''
            for (let i = 0; i < encodedString.length; i++) {
                if (encodedString.charAt(i) != '!' && name.length < 5) {
                    name += encodedString.charAt(i)
                } else {
                    if (encodedString.charAt(i) == '!') i++
                    let crediti = parseInt(encodedString.substr(i, 2))
                    let voto = parseInt(encodedString.substr(i + 2, 2))
                    i += 3
                    let lode = false
                    if (voto == 31) {
                        voto = 30
                        lode = true
                    }
                    examsList.value.push({
                        name,
                        voto,
                        crediti,
                        lode,
                    })
                    name = ''
                }
            }

            calculate()
        }

        if (examsList.value.length == 0) addExam()
    }
})
</script>
<template>
    <NuxtLayout name="media">
        <a :href="rebaseUrl('/')">&lt;&lt;&lt; Torna al sito</a>
        <h1 class="html-rainbow-text">
            <b>[unofficial] Calcolatore-media-Unipi-inator 3000</b>
        </h1>
        <div class="form">
            <select v-model="mediaType">
                <option value="T">Triennale</option>
                <option value="M">Magistrale</option>
            </select>
            <div class="exams-list">
                <div />
                <div>Esame (max 5 caratteri alfanumerici)</div>
                <div>Crediti</div>
                <div>Voto</div>
                <div>Lode</div>
                <template v-for="(exam, i) in examsList">
                    <button @click="removeExam(i)">-</button>
                    <input v-model="exam.name" />
                    <input v-model="exam.crediti" type="number" />
                    <input v-model="exam.voto" type="number" />
                    <input
                        v-model="exam.lode"
                        :disabled="exam.voto != 30"
                        type="checkbox"
                    />
                </template>
            </div>
            <button class="add-exam" @click="addExam">+</button>
        </div>

        <br />

        <button @click="calculate">Calcola Media</button>

        <br /><br />

        <div class="output">
            <div>Media:</div>
            <div>{{ mediaValue }}</div>
            <div>Voto di accesso alla laurea:</div>
            <div>{{ accesso }}</div>
        </div>
        <div v-if="encoded != ''">
            Salva <a :href="rebaseUrl(`/media?${encoded}`)">questo link</a> per
            non dover inserire manualmente gli esami ogni volta!
        </div>

        <br /><br /><br />

        La media e il voto di accesso alla laurea
        {{ mediaType == 'T' ? 'triennale' : 'magistrale' }} sono calcolati come
        specificato nel regolamento del corso di laurea
        <a :href="linkRegolamento" target="_blank">{{
            mediaType == 'T' ? 'triennale' : 'magistrale'
        }}</a>
        2023/2024 (punti [a] e [b] della sezione "Modalità determinazione voto
        di Laurea"), riportato di seguito:<br />
        [a] Il punteggio di base è calcolato a partire dal curriculum del
        candidato con la seguente procedura:<br />
        &emsp;&emsp;- a ogni credito acquisito dal candidato tramite un'attività
        formativa presente sul suo piano di studio che preveda un voto è
        attribuito un valore corrispondente a questo voto (espresso in
        trentesimi);

        <br />

        &emsp;&emsp;- sono poi scartati i {{ creditiEsclusi }} crediti a cui è
        stato attribuito il valore inferiore;

        <br />

        &emsp;&emsp;- infine, viene calcolata la media dei valori attribuiti ai
        crediti rimanenti.

        <br />

        &emsp;&ensp;Il punteggio di base è questa media espressa in centodecimi,
        approssimata per eccesso al secondo decimale.

        <br />

        [b] Il punteggio di lodi, espresso in centodecimi, è ottenuto sommando
        0.25 punti per ogni lode ottenuta in un'attività formativa di al più
        {{ sogliaLode - 1 }} crediti, e 0.50 punti per ogni lode ottenuta in
        un'attività formativa di almeno {{ sogliaLode }} crediti, fino a un
        massimo di {{ maxLode }} punti.

        <br /><br /><br />

        Se avete suggerimenti su come rendere questa pagina ancora più brutta vi
        prego fatevi avanti.
    </NuxtLayout>
</template>

<style scoped>
.html-rainbow-text {
    padding-left: 30px;
    margin-top: 0px;
    margin-bottom: 50px;
    text-align: center;
    line-height: 4rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    color: #ef3550;

    text-shadow:
        -4px 4px #f9a825,
        -8px 8px #eeff41,
        -12px 12px #43a047,
        -16px 16px #26c6da,
        -20px 20px #2196f3,
        -24px 24px #7e57c2,
        -28px 28px #f48fb1,
        -32px 32px #ff5722,
        -36px 36px #f9a825;
}

.form {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.exams-list {
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 2fr 1fr;
    /* gap: 1rem; */
}

.exams-list * {
    align-self: center;
    justify-self: center;
}
.exams-list button {
    width: 1.5rem;
    height: 1.5rem;
    margin: auto;
}

.exams-list input {
    width: 100%;
}

.add-exam {
    margin: auto;
}

.output {
    display: grid;
    grid-template-column: auto auto;
}
</style>
