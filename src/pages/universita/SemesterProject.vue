<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue';
import CardHref from '@/components/CardHref.vue';
import TextblockEntry from '@/components/TextblockEntry.vue';
import { rebaseUrl } from '@/utils';
</script>
<template>
    <FinalFantasy title="Università">
        <CardHref :link="rebaseUrl('/res/universita/semester-project.pdf')" img="/res/img/semester-project.png"
            :lefty="false" center="Semester Project @ EPFL" topLeft="Giugno 2022" topRight="Preimage-sampling"
            bottomRight="supervisors: A. Chiesa, G. Fenzi" />
        <TextblockEntry>
            <h4>Semester project</h4>
            <p>
                Questo è un progetto che ho svolto nel secondo semestre
                dell'a.a. 2023/2024 mentre ero in programma di scambio all'EPFL.
                Il titolo completo del progetto è "An overview on different
                preimage-sampling algorithms in lattice cryptography", e
                consiste in un confronto di tre metodi di preimage sampling a
                partire da quello proposto da Micciancio e Peikert nel 2012.
            </p>
            <p>
                Ad onor del vero non mi ritengo al 100% soddisfatto del
                risultato finale del progetto, poiché ha dovuto cambiare
                obiettivo nelle ultime settimane prima della consegna, e questo
                è quello che è stato possibile produrre con il tempo
                disponibile. L'obiettivo originale era molto più ambizioso,
                ovvero un tentativo di adattare i risultati di un altro articolo
                ad un protocollo di signature sul quale stava lavorando G. Fenzi
                per provare ad abbassare le dimensioni dei parametri. Abbiamo
                realizzato a poco tempo dalla consegna che questo adattamento
                non sarebbe stato possibile a meno di modificare radicalmente il
                protocollo, e quindi il progetto è stato reindirizzato ad un
                confronto degli strumenti utilizzati da questo protocollo.
            </p>
            <p>
                In ogni caso credo che questo progetto, assieme al resto degli
                esami svolti all'EPFL, mi abbiano aiutato ad approfondire le mie
                conoscenze prima solo basilari della crittografia. Mi ha anche
                aiutato a capire che non sono un fan della crittografia sui
                reticoli, di tutti i lemmi sulle gaussiane discrete e delle
                matrici di covarianze brutte.
            </p>
        </TextblockEntry>
    </FinalFantasy>
</template>
