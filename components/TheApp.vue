<template>
    <div class="container mx-auto pt-24  px-6">
        <div
            class="container rounded-3xl max-w-md max-h-[32rem] sm:max-h-[37rem] xl:max-w-none xl:max-h-64 mx-auto flex flex-col xl:flex-row justify-btween items-center bg-gradient-to-b from-[#3275F2] to-[#004CDB] mt-20">
            <div class="w-full mx-auto max-w-2xl py-10 px-8 xl:pr-16 text-white flex flex-col justify-center xl:items-start xl:justify-start">
                <div class="w-full xl:w-auto">
                    <div class="flex flex-col xl:flex-row gap-6 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" viewBox="0 0 40 31" fill="none">
                            <path opacity="0.5"
                                d="M29.1665 5.54395C33.154 5.56595 35.3137 5.74378 36.7217 7.15178C38.3332 8.76328 38.3332 11.3556 38.3332 16.5403V18.3736C38.3332 23.5601 38.3332 26.1524 36.7217 27.7639C35.112 29.3736 32.5178 29.3736 27.3332 29.3736H12.6665C7.48184 29.3736 4.88767 29.3736 3.278 27.7639C1.6665 26.1506 1.6665 23.5601 1.6665 18.3736V16.5403C1.6665 11.3556 1.6665 8.76328 3.278 7.15178C4.686 5.74378 6.84567 5.56595 10.8332 5.54395"
                                stroke="white" stroke-width="3.22826" stroke-linecap="round" />
                            <path d="M20 1.87378V22.0404M20 22.0404L14.5 15.6238M20 22.0404L25.5 15.6238" stroke="white"
                                stroke-width="3.22826" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 class="font-semibold text-xl xl:text-2xl text-center">
                            دانلود اپلیکیشن آقای ساختمان
                        </h3>
                    </div>
                    <p class=" xl:text-lg text-center pt-4">
                        همین حالا اپلیکیشن آقای ساختمان را دریافت کنید و به مابپیوندید!
                    </p>
                </div>
                <div class="mt-8 flex flex-col xl:flex-row-reverse items-center xl:items-start xl:justify-end gap-y-2 xl:gap-x-6">
                    <BaseLink class="bg-[#0045C6] text-base font-medium w-64 xl:w-auto  gap-3 xl:text-xl xl:px-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path
                                d="M22.0096 8.02276C21.6725 7.77884 21.0181 7.44668 19.7608 7.14705C19.3847 7.05737 18.9535 6.97133 18.4619 6.89427C17.8427 6.7933 17.1243 6.70361 16.2945 6.62898L16.1778 6.61866C16.0099 6.21807 15.8355 5.80873 15.6514 5.37767C15.5536 5.14649 15.4595 4.91409 15.3605 4.66761C15.3492 4.63849 15.3366 4.60815 15.3241 4.57902C14.9618 3.67309 14.5719 2.74277 13.9149 1.91645C13.1803 1.00021 12.2151 0.496094 11.1985 0.496094C10.1816 0.496094 9.21755 1.00142 8.48177 1.91645C7.81989 2.74156 7.43628 3.67164 7.07403 4.57647L7.03629 4.66761C6.93872 4.91409 6.84454 5.14649 6.74564 5.37767C6.56118 5.80873 6.38825 6.21807 6.21907 6.61866L6.10366 6.62898C5.27128 6.70349 4.55285 6.7933 3.93247 6.8956C3.44098 6.97388 3.01222 7.06101 2.63735 7.14839C1.38374 7.44777 0.724291 7.78017 0.388255 8.0241C0.328911 8.06754 0.282552 8.12664 0.253912 8.1946C0.225268 8.26276 0.215459 8.33737 0.225513 8.41062L0.334613 9.2282C0.500022 10.4516 0.676719 11.8883 0.967611 13.3695C1.18205 14.5096 1.4824 15.6318 1.8665 16.7259C2.02062 17.1567 2.19234 17.5801 2.38433 17.9896C3.2047 19.657 4.47385 21.0584 6.04675 22.0333C7.61953 23.0084 9.43284 23.518 11.279 23.5036C13.1256 23.4894 14.9308 22.9521 16.4886 21.9528C18.0464 20.9536 19.2943 19.533 20.0892 17.853C20.2372 17.5244 20.3737 17.1882 20.4992 16.842C21.3942 14.4156 21.739 11.7379 22.0236 9.6112L22.1815 8.39933C22.1891 8.3268 22.1771 8.25355 22.1469 8.1872C22.1168 8.121 22.0694 8.06414 22.0098 8.02264L22.0096 8.02276ZM11.1907 6.42801C10.1703 6.42801 9.24146 6.44694 8.39767 6.48092C8.44269 6.37364 8.48917 6.26612 8.53674 6.15508C8.64329 5.9023 8.74608 5.64951 8.84523 5.39672C9.05141 4.84613 9.29292 4.30949 9.56864 3.79057C9.6938 3.5653 9.83715 3.35063 9.99727 3.14871C10.2028 2.89592 10.6329 2.45989 11.1906 2.45989C11.7486 2.45989 12.1785 2.89095 12.3854 3.14871C12.5454 3.35053 12.6888 3.56533 12.8141 3.79057C13.0891 4.30973 13.3307 4.84637 13.5375 5.39672C13.6365 5.64951 13.7381 5.9023 13.8457 6.15508C13.8935 6.26612 13.9387 6.37364 13.985 6.48092C13.1411 6.44694 12.2123 6.42801 11.1904 6.42801H11.1907Z"
                                fill="url(#paint0_linear_567_426)" />
                            <defs>
                                <linearGradient id="paint0_linear_567_426" x1="11.2031" y1="0.496215" x2="11.2031"
                                    y2="23.4902" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#97D700" />
                                    <stop offset="0.631" stop-color="#50BC25" />
                                    <stop offset="1" stop-color="#009F64" />
                                </linearGradient>
                            </defs>
                        </svg>
                        دانلود از بازار
                    </BaseLink>
                    <BaseLink class="bg-[#0045C6] text-base font-medium w-64 xl:w-auto gap-3 xl:text-xl xl:px-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                            <g clip-path="url(#clip0_567_429)">
                                <path
                                    d="M12.914 6.72328L1.31879 0.103683C1.17308 0.0191777 0.989779 0.0238724 0.848775 0.108378C0.703072 0.192883 0.61377 0.343115 0.61377 0.512127C0.61377 0.512127 0.61847 1.12244 0.62317 2.12712L9.06928 10.5636L12.914 6.72328Z"
                                    fill="url(#paint0_linear_567_429)" />
                                <path
                                    d="M0.623535 2.12683C0.637636 5.75118 0.679937 14.5491 0.698737 18.9293L9.07434 10.5633L0.623535 2.12683Z"
                                    fill="#00FFF0" />
                                <path
                                    d="M19.5509 10.5118L12.9143 6.72314L9.06494 10.5635L13.4078 14.9014L19.5556 11.324C19.7013 11.2395 19.7906 11.0846 19.7906 10.9203C19.7906 10.7512 19.6966 10.5963 19.5509 10.5118Z"
                                    fill="url(#paint1_linear_567_429)" />
                                <path
                                    d="M0.693359 18.9296C0.70276 20.4929 0.70746 21.4929 0.70746 21.4929C0.70746 21.6619 0.796762 21.8169 0.942465 21.8967C1.08817 21.9812 1.26677 21.9812 1.41248 21.8967L13.4119 14.9062L9.06896 10.5682L0.693359 18.9296Z"
                                    fill="url(#paint2_linear_567_429)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_567_429" x1="0.61377" y1="5.30519" x2="12.9161"
                                    y2="5.30519" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#63BE6B" />
                                    <stop offset="0.506" stop-color="#5BBC6A" />
                                    <stop offset="1" stop-color="#4AB96A" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_567_429" x1="9.06945" y1="10.8153" x2="19.7895"
                                    y2="10.8153" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FAA51A" />
                                    <stop offset="0.387" stop-color="#FAB716" />
                                    <stop offset="0.741" stop-color="#FAC412" />
                                    <stop offset="1" stop-color="#FAC80F" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_567_429" x1="0.695427" y1="16.264" x2="13.4117"
                                    y2="16.264" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EC3B50" />
                                    <stop offset="1" stop-color="#E7515B" />
                                </linearGradient>
                                <clipPath id="clip0_567_429">
                                    <rect width="19.2168" height="21.962" fill="white"
                                        transform="translate(0.594238 0.0189209)" />
                                </clipPath>
                            </defs>
                        </svg>
                        دانلود از گوگل‌پلی
                    </BaseLink>
                </div>
            </div>
            <div class="w-full  flex items-center justify-center">
                <img src="~/assets/img/app.png" alt="" class="object-cover" />
            </div>
        </div>
    </div>
</template>