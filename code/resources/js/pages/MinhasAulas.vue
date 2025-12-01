<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { minhasAulas } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/vue3'

import ClassCard from '@/components/ClassCards.vue'

// Props vindas do controller
const props = defineProps<{
  aulas: Array<{ 
    id?: number
    dia: string
    turno: string
    sala: string
    classroom: string
    materia: string
    professor: string
    turma: string
  }>
}>()

// Dias e turnos
const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta']
const turnos = ['primeiro', 'segundo']

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Minhas Aulas', href: minhasAulas().url },
]

// Função auxiliar: busca uma aula por dia/turno
function getAula(dia: string, turno: string) {
  return props.aulas.find(a => a.dia === dia && a.turno === turno) || null
}
</script>

<template>
  <Head title="Minhas Aulas" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex flex-1 flex-col gap-4 p-4">
      <!-- Grade de aulas -->
      <div class="grid auto-rows-min gap-4 md:grid-cols-5">
        <template v-for="turno in turnos" :key="turno">
          <ClassCard
            v-for="dia in dias"
            :key="dia + turno"
            :dia="dia"
            :turno="turno"
            :aula="getAula(dia, turno)"
            :turma-id="null"
            :materias="[]"
            :professores="[]"
            :botoes="false"
          />
        </template>
      </div>
    </div>
  </AppLayout>
</template>
