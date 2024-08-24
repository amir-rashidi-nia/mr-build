<template>
    <div class="container mx-auto flex flex-col justify-btween items-center gap-2 py-20">
        <div class="flex w-full flex-col gap-6 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41" fill="none">
                <path
                    d="M3.88281 20.4998C3.88281 12.4467 3.88281 8.4201 6.46279 5.9183C9.04277 3.4165 13.1952 3.4165 21.5 3.4165C29.8048 3.4165 33.9572 3.4165 36.5372 5.9183C39.1172 8.4201 39.1172 12.4467 39.1172 20.4998C39.1172 28.553 39.1172 32.5796 36.5372 35.0814C33.9572 37.5832 29.8048 37.5832 21.5 37.5832C13.1952 37.5832 9.04277 37.5832 6.46279 35.0814C3.88281 32.5796 3.88281 28.553 3.88281 20.4998Z"
                    stroke="#3275F2" stroke-width="3.3" />
                <path
                    d="M17.4907 14.8877C17.4907 12.7406 19.2857 11 21.4999 11C23.7141 11 25.5091 12.7406 25.5091 14.8877C25.5091 16.313 24.718 17.5593 23.5384 18.236C22.522 18.8191 21.4999 19.7037 21.4999 20.8488V21.8855"
                    stroke="#3275F2" stroke-width="3.3" stroke-linecap="round" />
                <ellipse cx="21.5" cy="27.3333" rx="1.76172" ry="1.70833" fill="#3275F2" />
            </svg>
            <h3 class="font-medium text-lg lg:text-2xl">
                سوالات پرتکرار شما
            </h3>
        </div>
        <div class="gap-8 pt-6 flex flex-col w-full">
            <ModuleAccordin v-for="_ in 4" />
        </div>
    </div>
</template>
<script setup>
</script>