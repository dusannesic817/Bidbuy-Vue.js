<script setup>
    defineProps({
        category: {
            type:Object,
            required:true
        }
        
    })
</script>

<template>
        <ul class="mt-2 space-y-1">
          <li><a :href="`/categories/${category.id}`" class="text-blue-900 hover:underline">{{
            category.name }}</a></li>
        </ul>
   
</template>