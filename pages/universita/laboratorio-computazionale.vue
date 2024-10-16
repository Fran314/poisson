<script setup>
import imgLC from '~/assets/img/laboratorio-computazionale.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Università" page="Università">
        <CardEntry
            link="/universita/laboratorio-computazionale.pdf"
            :img="imgLC"
            center="Laboratorio Computazionale"
            topLeft="Ottobre 2022"
            topRight="FHE vs MPC"
            bottomRight="relatori: A. Bernasconi, S. Chessa"
        />

        <TextblockEntry>
            <h4>Laboratorio Computazionale</h4>
            <p>
                L'esame di Laboratorio Computazionale è un esame obbligatorio
                per il curriculum Computazionale di Matematica a Pisa. Consiste
                nella produzione di un piccolo progetto con sperimentazione
                numerica e conseguente relazione su una qualsiasi branca della
                matematica che si presti a tale scopo a scelta dallo studente.
            </p>
            <p>
                Ho svolto il mio progetto seguito dai professori di Informatica
                Anna Bernasconi e Stefano Chessa, che sono poi diventati i miei
                relatori per la tesi triennale.
            </p>
            <br />
            <p>
                Il titolo del progetto è "Metodi di aggregazione di dati
                mediante Crittografia Post-Quantistica per l’IoT" ed è un
                progettino giocattolo in cui è stata svolta un'analisi di due
                metodi per ottenere la media di dati sensibili, uno tramite
                <i>Fully Homomorphic Encryption</i> e l'altro tramite
                <i>Multi-Party Computation</i>.
            </p>
            <p>
                Il progetto ha anche previsto la sperimentazione in "caso d'uso
                reale" dei protocolli, sperimentando il protocollo FHE tramite
                la libreria PALISADE su un Raspberry Pi, e il protocollo MPC
                tramite un'implementazione manuale su un Rasperry Pi Pico.
            </p>
        </TextblockEntry>
    </NuxtLayout>
</template>
