<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        صفحه اصلی
                    </a>
                </div>
            </li>
            <li v-for="page in pages" :key="page.name">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_420_25679)">
                            <path d="M10 4.5L6 8.5L10 12.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_420_25679">
                                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                </div>
            </li>
        </ol>
    </nav>
</template>
<script setup>
const pages = [
    { name: 'تماس با ما', href: '#', current: false },
]
</script>