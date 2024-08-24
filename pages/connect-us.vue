<template>
    <section class="pb-20 pt-20 lg:mt-12">
        <div
            class="lg:container mx-auto lg:rounded-3xl lg:bg-[#F3F7FF] flex flex-col lg:flex-row justify-btween gap-16 px-8 lg:px-14 py-8 space-y-10">
            <div class="relative w-full">
                <div class="mx-auto space-y-8">
                    <ModuleBreadcrumbs />
                    <h1 class="text-2lg font-semibold lg:text-4xl lg:leading-[4rem]">
                        تماس با تیم ما
                    </h1>
                    <p class="font-medium lg:text-lg">
                        انتقادات، پیشنهادات و سوالات خود را از طریق فرم تماس یا راه‌های ارتباطی زیر برای ما ارسال
                        کنید!
                    </p>
                    <div class="pt-10 flex flex-col gap-y-10 items-start">
                        <div v-for="_ in 3" class="flex items-center justify-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"
                                fill="none">
                                <path d="M6 6.5L8.94202 8.23943C10.6572 9.25352 11.3428 9.25352 13.058 8.23943L16 6.5"
                                    stroke="#2058E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C10.0393 18.5122 11.9607 18.5122 13.9012 18.4634C17.0497 18.3843 18.6239 18.3448 19.7551 17.2094C20.8862 16.0739 20.9189 14.5412 20.9842 11.4756C21.0053 10.4899 21.0053 9.51008 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756Z"
                                    stroke="#2058E7" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                            <div class="flex flex-col gap-2">
                                <p class="text-[#8C8FAB]  lg:text-lg">
                                    ایمیل
                                </p>
                                <p class="lg:text-lg">
                                    Info@PersianGulfHolding.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col items-center justify-center gap-4">
                <BaseInput palceholder="نام و نام خانوادگی" />
                <BaseInput palceholder="ایمیل" />
                <BaseSelect palceholder="انتخاب موضوع" />
                <BaseTextarea palceholder="متن پیام" class="h-72"/>
                <BaseButton>
                    ارسال
                </BaseButton>
            </div>
        </div>
    </section>
</template>