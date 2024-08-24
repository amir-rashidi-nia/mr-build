<template>
    <div class="relative w-full">
        <input class="w-full appearance-none border bg-white border-[#E8EFFF] rounded-[46px] px-4 h-[2.6rem] lg:h-[3.8rem] placeholder:text-[0.6rem] lg:placeholder:text-base placeholder:text-[#8C8FAB]" :placeholder="palceholder"/>
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