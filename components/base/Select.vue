<template>
    <div class="relative w-full">
        <select class="w-full appearance-none relative bg-white border border-[#E8EFFF] rounded-[46px] px-4 h-[2.6rem] lg:h-[3.8rem] text-[0.6rem] lg:text-base text-[#8C8FAB]">
            <option class="text-[#8C8FAB]" value="" disabled selected>{{ palceholder }}</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 z-10 inset-y-0 my-auto" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.83351 10.7227C8.16751 10.3887 8.70903 10.3887 9.04303 10.7227L12.9997 14.6793L16.9563 10.7227C17.2903 10.3887 17.8318 10.3887 18.1658 10.7227C18.4998 11.0567 18.4998 11.5982 18.1658 11.9322L13.6044 16.4936C13.2704 16.8276 12.7289 16.8276 12.3949 16.4936L7.83351 11.9322C7.49951 11.5982 7.49951 11.0567 7.83351 10.7227Z"
                fill="#53566D" />
        </svg>
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