<script setup>
import CardEntryCharacter from '@/components/CardEntryCharacter.vue';
import TextblockEntry from '@/components/TextblockEntry.vue';
import FinalFantasy from '@/layouts/FinalFantasy.vue';

import { rebaseUrl } from '@/utils';
</script>
<template>
    <FinalFantasy title="Home">
        <CardEntryCharacter img="/res/img/baldo.png" :lefty="false" name="Francesco" />
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
                <a href="https://vuejs.org/">Vue</a> e lo stile è fortemente
                ispirato al menu di
                <a href="https://it.wikipedia.org/wiki/Final_Fantasy_IX">Final Fantasy IX</a>.
            </p>
        </TextblockEntry>
    </FinalFantasy>
</template>
