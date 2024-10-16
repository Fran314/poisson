<script setup>
import img from '~/assets/img/baldo.png'
</script>
<template>
    <NuxtLayout name="final-fantasy" title="Home" page="Home">
        <CardEntryCharacter :img="img" :lefty="false" name="Francesco" />
        <TextblockEntry>
            <h4>Francesco Baldino</h4>
            <p>
                Sono uno studente di Matematica Magistrale all'Università di
                Pisa.
            </p>
            <p>
                Sono interessato allo studio della Crittografia, e potete
                trovare i lavori che ho svolto durante il mio percorso
                universitario in questo ambito nella sezione
                <a :href="rebaseUrl('/universita')">Università</a>.
            </p>
            <br />
            <p>
                Questa è la mia pagina personale, dove potrete trovare progetti
                a cui ho lavorato, appunti dei corsi che ho seguito e... altre
                cose.
            </p>
            <br />
            <p>
                La pagina è realizzata in
                <a href="https://nuxt.com/">Nuxt</a> e lo stile è fortemente
                ispirato al menu di
                <a href="https://it.wikipedia.org/wiki/Final_Fantasy_IX"
                    >Final Fantasy IX</a
                >. Consiglio caldamente di esplorarla con l'audio acceso e (se
                su Firefox) autorizzando la riproduzione automatica di audio
                (giuro non ci sono audio fastidiosi).
            </p>
        </TextblockEntry>
    </NuxtLayout>
</template>
