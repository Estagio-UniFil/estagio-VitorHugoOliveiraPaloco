<script setup lang="ts">
import Sidebar from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItemType } from '@/types';
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <Sidebar :breadcrumbs="breadcrumbs">
        <slot />
    </Sidebar>

    <Toaster class="pointer-events-auto" />
</template>
