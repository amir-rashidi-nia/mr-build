<template>
    <div class="container mx-auto flex flex-col justify-btween items-center gap-2 py-20 px-6">
        <h3 class="relative w-full font-semibold text-2xl">
            آگهی های مشاورین املاک
        </h3>
        <div class="relative w-full flex items-center justify-between border-b border-gray-200">
            <nav class="-mb-px flex gap-8" aria-label="Tabs">
                <span v-for="tab in tabs" :key="tab.name"
                    :class="[tab.current ? 'border-brand text-brand' : 'border-transparent text-[#8C8FAB]', 'whitespace-nowrap border-b-4 py-2 lg:py-4 px-1 lg:text-lg font-medium text-xs']"
                    :aria-current="tab.current ? 'page' : undefined">
                    {{ tab.name }}
                </span>
            </nav>
            <div class="hidden lg:flex items-center gap-2 text-brand font-medium">
                هرمزگان، بندرعباس
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M11.9996 13.5104C12.4324 13.5104 12.8608 13.4251 13.2606 13.2596C13.6604 13.094 14.0236 12.8513 14.3296 12.5453C14.6356 12.2393 14.8783 11.8761 15.0439 11.4763C15.2095 11.0765 15.2947 10.648 15.2947 10.2153C15.2947 9.78261 15.2095 9.35414 15.0439 8.95436C14.8783 8.55459 14.6356 8.19134 14.3296 7.88537C14.0236 7.5794 13.6604 7.33669 13.2606 7.17109C12.8608 7.0055 12.4324 6.92027 11.9996 6.92027C11.1257 6.92027 10.2876 7.26743 9.66969 7.88537C9.05175 8.50331 8.70459 9.34142 8.70459 10.2153C8.70459 11.0892 9.05175 11.9273 9.66969 12.5453C10.2876 13.1632 11.1257 13.5104 11.9996 13.5104Z"
                        stroke="#3275F2" stroke-width="1.9" />
                    <path
                        d="M3.14895 8.2932C5.22948 -0.852676 18.7793 -0.842115 20.8493 8.30376C22.0638 13.6688 18.7265 18.21 15.8011 21.0193C14.7789 22.0052 13.414 22.5561 11.9938 22.5561C10.5736 22.5561 9.20881 22.0052 8.18658 21.0193C5.27173 18.21 1.93443 13.6582 3.14895 8.2932Z"
                        stroke="#3275F2" stroke-width="1.9" />
                </svg>
            </div>
        </div>
        <div class="hidden lg:grid grid-cols-3 gap-8 pt-6">
            <AdvertisemntCard v-for="_ in 6" />
        </div>
        <Swiper :modules="modules" class="block lg:!hidden w-full" :space-between="30" :breakpoints="{
            '768': {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }">
            <SwiperSlide v-for="_ in 6" class="w-full">
                <AdvertisemntCard />
            </SwiperSlide>
        </Swiper>
        <div class="mt-8 flex items-center gap-x-6">
            <BaseLink class="bg-brand text-white gap-3">
                مطالعه بیشتر
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </BaseLink>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const tabs = [
    { name: 'جدیدترین', href: '#', current: false },
    { name: 'قدیمی ترین', href: '#', current: false },
    { name: 'ارزانترین', href: '#', current: true },
    { name: 'گرانترین', href: '#', current: false },
];
const modules = ref([Pagination])
const breakpoints = {
    breakpoints: {
        '320': {
            slidesPerView: 3,
            spaceBetween: 20
        },
        '480': {
            slidesPerView: 3,
            spaceBetween: 30
        },
        '640': {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
}
</script>