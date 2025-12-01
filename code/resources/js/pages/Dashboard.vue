<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import SectionCards from "@/components/SectionCards.vue"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { Github } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Home',
    href: dashboard().url,
  },
]

</script>

<template>
  <Head title="Dashboard" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex justify-center mt-5">
      <Carousel :plugins="[Autoplay({ delay: 3000 })]" class="w-full max-w-full px-6">
        <CarouselContent>
          <CarouselItem>
            <a href="https://portal.unifil.br/" target="blank" class="block">
              <Card class="shadow-xl rounded-2xl">
                <CardContent class="flex flex-col gap-4 items-center justify-center text-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                  <img src="/unifil_logo.png" class="size-16 text-white opacity-90" />
                  <h1 class="text-xl font-semibold tracking-wide"> Acesse o portal da UniFil para ver suas notas e outras informações </h1>
                  <p class="text-sm text-muted-foreground"> Clique para abrir em nova aba </p>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>

          <CarouselItem>
            <a href="https://github.com/Estagio-UniFil/estagio-VitorHugoOliveiraPaloco" target="blank" class="block">
              <Card class="bg-black text-white shadow-xl rounded-2xl">
                <CardContent class="flex flex-col gap-4 items-center justify-center text-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                  <Github class="size-16 text-white opacity-90" />
                  <h1 class="text-xl font-semibold tracking-wide"> Visite o repositório do projeto no Github </h1>
                  <p class="text-sm text-muted-foreground"> Clique para abrir em nova aba </p>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>






      <div class="@container/main flex flex-1 flex-col gap-78 py-8">
        <SectionCards />
      </div>

  </AppLayout>
</template>
