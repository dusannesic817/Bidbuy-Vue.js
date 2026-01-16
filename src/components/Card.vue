<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        width:{
            type:String,
            default:'lg:w-1/5'
        },
        p:{
            type:String,
            default:'p-4'
        }
    });
</script>

<template>
<div :class="`w-full ${props.width} rounded-2xl bg-white ${props.p} shadow-lg`">
    <slot></slot>
</div>
</template>
