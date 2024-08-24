<template>
    <div class="relative w-full min-h-24">
        <textarea class="w-full min-h-full appearance-none bg-white border border-[#E8EFFF] rounded-3xl p-4 lg:h-[3.8rem]  placeholder:text-[0.6rem] lg:placeholder:text-base placeholder:text-[#8C8FAB]" :placeholder="palceholder"></textarea>
    </div>
</template>
<script setup>
defineProps({
    palceholder: {
        type: String,
        required: true
    }
})
</script>