<script setup>
import imgPoly from '~/assets/puzzles/poligono-mugshot.png'
import imgMappa from '~/assets/puzzles/mappa-mugshot.png'
import imgSpartito from '~/assets/puzzles/spartito.png'
import imgTesto from '~/assets/puzzles/testo.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="¿?¿" page="¿?¿">
        <CardEntryModular
            :compressible="false"
            link="/puzzles/poligono"
            :img="imgPoly"
        >
            <template #main>
                <div class="main">Un poligono</div>
            </template>
        </CardEntryModular>
        <CardEntryModular
            :compressible="false"
            link="/puzzles/mappa"
            :img="imgMappa"
            :lefty="false"
        >
            <template #main>
                <div class="main">Una mappa</div>
            </template>
        </CardEntryModular>
        <CardEntryModular
            :compressible="false"
            link="/puzzles/spartito"
            :img="imgSpartito"
        >
            <template #main>
                <div class="main">Uno spartito</div>
            </template>
        </CardEntryModular>
        <CardEntryModular
            :compressible="false"
            link="/puzzles/testo"
            :img="imgTesto"
            :lefty="false"
        >
            <template #main>
                <div class="main">Un testo</div>
            </template>
        </CardEntryModular>
        <TextblockEntry>
            <h4>Che è sta roba?¿?</h4>
            <p>
                A cavallo tra il liceo e i primi anni di università mi divertiva
                l'idea di nascondere testo dove testo non sembra esserci. Più o
                meno l'idea è inventare metodi per creare cimeli di famiglia
                passati di generazione in generazione che poi si scoprano avere
                degli indizi per la quest della vita o le coordinate per un
                tesoro segreto fra 200 anni.
            </p>
            <p>
                Questa cosa però funziona solo se questi metodi risultano
                difficili, ma non impossibili, da decodificare.
            </p>
            <p>
                E quindi eccoci qua! Questi sono 4 metodi di offuscamento di
                testo che siete liberi di provare a risolvere.
            </p>
            <p>
                Tutti i metodi hanno come "soluzione" del testo (che può essere
                una parola o una frase breve) il quale può essere sottomesso in
                una casella di testo per controllare che sia la soluzione
                giusta. Divertitevi a capire i messaggi nascosti e fatemi sapere
                se ci riuscite!
            </p>
            <br />
            <p class="smaller">
                NB: chiaramente tutti questi puzzle sono facilmente risolvibili
                con un attacco a dizionario, ma toglierebbe un po' il
                divertimento del puzzle.
            </p>
        </TextblockEntry>
    </NuxtLayout>
</template>

<style scoped>
.main {
    padding: 0.5rem 1rem;
}
.smaller {
    font-size: smaller;
}
</style>
