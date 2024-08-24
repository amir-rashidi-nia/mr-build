<template>
    <div
        class="relative lg:container mx-auto lg:rounded-3xl flex flex-col-reverse lg:flex-row justify-btween gap-8 px-6 lg:px-16 pt-36 lg:pt-0 xl:pt-16 pb-16 lg:mt-28 bg-gradient-to-b from-[#002585] to-[#084FDD]">
        <div class="relative w-full pt-10 lg:pt-36">
            <div class="mx-auto max-w-2xl text-white space-y-4">
                <h1 class="text-3xl font-semibold text-center lg:text-5xl lg:leading-[4rem] lg:text-start">
                    اولین سوپراپلیکیشن یکپارچه در حوزه ساختمان!
                </h1>
                <p class="text-center leading-6 text-white/75 lg:text-lg lg:text-start">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <div class="pt-4 flex justify-center items-center gap-x-6 lg:justify-start">
                    <BaseLink class="bg-[#00FBEC] text-[#125BE3] gap-3 px-4">
                        دانلود اپلیکیشن
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                            <path d="M7 13.5L1 7.5L7 1.5" stroke="#125BE3" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </BaseLink>
                    <BaseLink class="bg-black/15 gap-2 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.4998 29.7001C20.0007 29.7001 23.3581 28.3093 25.8336 25.8339C28.3091 23.3584 29.6998 20.0009 29.6998 16.5C29.6998 12.9992 28.3091 9.64172 25.8336 7.16624C23.3581 4.69076 20.0007 3.30005 16.4998 3.30005C12.9989 3.30005 9.64148 4.69076 7.166 7.16624C4.69052 9.64172 3.2998 12.9992 3.2998 16.5C3.2998 20.0009 4.69052 23.3584 7.166 25.8339C9.64148 28.3093 12.9989 29.7001 16.4998 29.7001ZM15.7656 11.8272C15.5171 11.6615 15.2282 11.5662 14.9299 11.5517C14.6315 11.5373 14.3348 11.604 14.0714 11.745C13.808 11.8859 13.5878 12.0957 13.4343 12.3519C13.2808 12.6082 13.1998 12.9013 13.1998 13.2V19.8C13.1998 20.0988 13.2808 20.3919 13.4343 20.6482C13.5878 20.9044 13.808 21.1142 14.0714 21.2551C14.3348 21.3961 14.6315 21.4628 14.9299 21.4484C15.2282 21.4339 15.5171 21.3386 15.7656 21.1728L20.7156 17.8728C20.9415 17.7222 21.1268 17.518 21.255 17.2785C21.3831 17.0391 21.4502 16.7717 21.4502 16.5C21.4502 16.2284 21.3831 15.961 21.255 15.7215C21.1268 15.4821 20.9415 15.2779 20.7156 15.1272L15.7656 11.8272Z"
                                fill="white" />
                        </svg>
                        مشاهده تیزر
                    </BaseLink>
                </div>
                <div class="hidden pt-20 lg:flex items-center justify-center gap-x-10 lg:justify-start">
                    <div class="flex flex-col items-center justify-center">
                        <span class="font-semibold text-4xl">
                            ۱۰۰+
                        </span>
                        <p class="text-white/75">
                            کاربر فعال
                        </p>
                    </div>
                    <span class="h-12 w-[1.5px] bg-black/15 rounded-lg">
                    </span>
                    <div class="flex flex-col items-center justify-center">
                        <span class="font-semibold text-4xl">
                            ۲۰+
                        </span>
                        <p class="text-white/75">
                            سال سابقه تخصصی
                        </p>
                    </div>
                    <span class="h-12 w-[1.5px] bg-black/15 rounded-lg">
                    </span>
                    <div class="flex flex-col items-center justify-center">
                        <span class="font-semibold text-4xl">
                            ۱۵+
                        </span>
                        <p class="text-white/75">
                            خدمت متنوع
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <img src="~/assets/img/hero.png" alt="" class="object-cover" />
        </div>
        <div class="flex lg:hidden absolute -bottom-6 inset-x-0 mx-auto items-center justify-center">
            <svg class="absolute -top-2" xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                <path
                    d="M1 7.66667C1 5.89856 1.7375 4.20286 3.05025 2.95262C4.36301 1.70238 6.14348 1 8 1C9.85652 1 11.637 1.70238 12.9497 2.95262C14.2625 4.20286 15 5.89856 15 7.66667V14.3333C15 16.1014 14.2625 17.7971 12.9497 19.0474C11.637 20.2976 9.85652 21 8 21C6.14348 21 4.36301 20.2976 3.05025 19.0474C1.7375 17.7971 1 16.1014 1 14.3333V7.66667Z"
                    stroke="white" stroke-width="1.8" stroke-linejoin="round" />
                <path d="M8 7L8 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img src="~/assets/img/vector.png" />
        </div>
    </div>
</template>