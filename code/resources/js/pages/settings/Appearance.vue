<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import AppearanceTabs from '@/components/AppearanceTabs.vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { appearance } from '@/routes';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Configrações de aparência',
        href: appearance().url,
    },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Configrações de aparência" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall title="Configrações de aparência" description="Atualizar as configurações de aparência da sua conta" />
                <AppearanceTabs />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
