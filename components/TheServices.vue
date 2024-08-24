<template>
    <div class="container mx-auto flex flex-col justify-btween items-center px-6 gap-2 py-20">
        <BaseHeading title="چرا آقای ساختمان؟" caption="پلتفرم جامع مناسب فعالان حوزه ساختمان" class="self-start"/>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
            <ServiceCard v-for="_ in 6" />
        </div>
    </div>
</template>
<script setup>
</script>