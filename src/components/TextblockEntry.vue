<template>
    <div class="textblock-wrapper">
        <div class="textblock">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
:slotted(a) {
    text-decoration: none;
    color: #73cccf;
}

.textblock-wrapper {
    background: var(--gray-2);
    border-radius: 10px;
    border: 2px #fff solid;
    margin: 1rem 0;
}

.textblock {
    min-height: 12rem;
    padding: 1rem;
    border-top: 2px var(--gray-1) solid;
    border-left: 2px var(--gray-1) solid;
    border-bottom: 2px var(--gray-4) solid;
    border-right: 2px var(--gray-4) solid;
    border-radius: 8px;

    font-size: smaller;
}
</style>
