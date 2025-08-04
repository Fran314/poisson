<script setup>
import FinalFantasy from '@/layouts/FinalFantasy.vue';
import CardHref from '@/components/CardHref.vue';
import TextblockEntry from '@/components/TextblockEntry.vue';
import { rebaseUrl } from '@/utils';
</script>
<template>
    <FinalFantasy title="Università">
        <CardHref :link="rebaseUrl('/res/universita/tesi-triennale.pdf')" img="/res/img/tesi-triennale.png"
            center="Tesi Triennale" topLeft="16 Dic. 2022" topRight="PQ key exchange"
            bottomRight="relatori: A. Bernasconi, S. Chessa" />
        <TextblockEntry>
            <h4>Tesi triennale</h4>
            <p>
                Il titolo completo della mia tesi triennale è "Protocollo di
                scambio di chiavi Post-Quantistico in contesti IoT", nella quale
                ho specializzato un protocollo di scambio di chiavi basato su
                LWE già esistente in un contesto di <i>Internet of Things</i>,
                nel quale supporre che i due dispositivi comunicanti abbiano a
                disposizione un dato aggiuntivo noto a loro e difficilmente
                stimabile da un avversario (quale la qualità del canale di
                comunicazione).
            </p>
            <p>
                Questo dato aggiuntivo permette di diminuire la dimensione dei
                parametri in gioco.
            </p>
            <br />
            <p>
                Sostanzialmente abbiamo preso un protocollo che già funzionava,
                ci abbiamo aggiunto un'ipotesi MOLTO forte e ottenuto un
                risultato molto debole. Qui sotto potete trovare l'abstract!
            </p>
            <p>
                Per il pdf della tesi invece, cliccate sulla scheda in cima alla
                pagina.
            </p>
            <br />
            <h5>Abstract</h5>
            <p>
                Lo scopo di questa tesi è di studiare la specializzazione di un
                protocollo crittografico di scambio di chiavi per contesti di
                Internet of Things (IoT) garantendo sicurezza rispetto ad
                attacchi post-quantistici. La sicurezza di questo protocollo è
                garantita da una riduzione al problema Ring-Learning With
                Errors. Aggiungendo come ipotesi la possibilità di sfruttare
                piccoli valori fisici casuali rilevabili dagli interlocutori ma
                difficilmente stimabili da avversari, quali ad esempio la
                qualità del canale di comunicazione, abbassiamo anche se di poco
                le stime per i parametri richiesti in funzione del livello di
                sicurezza necessario per rendere il protocollo
                computazionalmente più efficiente per dispositivi IoT a bassa
                potenza di calcolo.
            </p>
        </TextblockEntry>
    </FinalFantasy>
</template>
