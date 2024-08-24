<template>
    <div class="relative lg:hidden w-11 h-11 rounded-full bg-white flex justify-center items-center overflow-hidden">
        <button 
            @click="showMenu = !showMenu" 
            type="button"
            class="flex justify-center items-center z-100 w-11 h-11 rounded-full bg-white"
            :class="[showMenu ? 'fixed top-6' : '']">
            <Transition mode="out-in">
                <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17"
                    fill="none">
                    <path d="M1.84961 1.96484H21.4585M1.84961 8.50116H21.4585M7.67366 15.0375H21.4585" stroke="#3275F2"
                        stroke-width="2.06983" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else data-v-da32f6e8="" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                    viewBox="0 0 13 13">
                    <path data-v-da32f6e8="" d="M11.6604 11.6893L1.28186 1.31073" stroke="#8C8FAB" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    <path data-v-da32f6e8="" d="M11.6603 1.31079L1.28186 11.6893" stroke="#8C8FAB" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </Transition>
        </button>
        <div class="w-11 h-11 rounded-full bg-white transition-all duration-500 overflow-hidden"
            :class="[showMenu ? 'fixed w-[200rem] h-[200rem] overflow-clip' : 'absolute']">
            <div class=" w-full inset-0 mx-auto flex flex-col justify-center items-center gap-8 text-black z-10 delay-200 transition-all duration-100"
                :class="[showMenu ? 'fixed opacity-100' : 'absolute opacity-0']">
                <NuxtLink>بلاگ</NuxtLink>
                <NuxtLink>صفحه اصلی</NuxtLink>
                <NuxtLink>درباره ما</NuxtLink>
                <NuxtLink>تماس با ما</NuxtLink>
                <NuxtLink>دانلود اپلیکیشن</NuxtLink>
                <NuxtLink>آگهی ها</NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>
const showMenu = ref(false)
</script>