<template>
    <div class="container mx-auto flex flex-col justify-btween items-center px-6 gap-2 py-20 pt-40">
        <div class="flex w-full  justify-between items-end">
            <BaseHeading title="بلاگ آقای ساختمان" caption="مطالب و رویدادهای مهم حوزه ساختمان" class="self-start" />
            <div class="hidden xl:flex items-center gap-4">
                <span @click="swiperRef.slideNext()" class="w-14 h-14 bg-[#D9DFF3] rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.563156 0.488693C0.100693 0.951156 0.100693 1.70096 0.563156 2.16342L6.04158 7.64185L0.563156 13.1203C0.100693 13.5827 0.100693 14.3325 0.563156 14.795C1.02562 15.2575 1.77542 15.2575 2.23788 14.795L8.55367 8.47921C9.01613 8.01675 9.01613 7.26695 8.55367 6.80448L2.23788 0.488693C1.77542 0.0262299 1.02562 0.0262299 0.563156 0.488693Z"
                            fill="#53566D" />
                    </svg>
                </span>
                <span @click="swiperRef.slidePrev()"  class="w-14 h-14 bg-[#D9DFF3] rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"
                        class="rotate-180">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.563156 0.488693C0.100693 0.951156 0.100693 1.70096 0.563156 2.16342L6.04158 7.64185L0.563156 13.1203C0.100693 13.5827 0.100693 14.3325 0.563156 14.795C1.02562 15.2575 1.77542 15.2575 2.23788 14.795L8.55367 8.47921C9.01613 8.01675 9.01613 7.26695 8.55367 6.80448L2.23788 0.488693C1.77542 0.0262299 1.02562 0.0262299 0.563156 0.488693Z"
                            fill="#53566D" />
                    </svg>
                </span>
            </div>
        </div>
        <Swiper @swiper="setSwiperRef" :modules="modules" class="pt-6 w-full" :space-between="30" :breakpoints="{
            '450': {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            '640': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }">
            <SwiperSlide v-for="_ in 6" class="w-full">
                <BlogCard />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const modules = ref([Pagination]);
let swiperRef = null;
function setSwiperRef(el) {
    swiperRef = el
}
</script>