<template>
    <div class="flex flex-col gap-3">
        <h3 class="text-xl xl:text-2xl font-semibold">
            {{ title }}
        </h3>
        <p class="text-sm xl:text-xl font-medium">
            {{ caption }}
        </p>
        <span class="bg-brand h-1 w-14 rounded-xl mt-4">
        </span>
    </div>
</template>
<script setup>
defineProps({
    title: {
        required: true,
        type: String
    },
    caption: {
        required: false,
        type: String
    }
})
</script>