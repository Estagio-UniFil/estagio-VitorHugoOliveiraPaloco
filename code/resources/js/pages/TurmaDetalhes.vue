<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { turmasShow, turmasUpdate, turmasDestroy, turmasIndex } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Head, router, useForm } from '@inertiajs/vue3'
import { Inertia } from '@inertiajs/inertia'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'

import ClassCard from '@/components/ClassCards.vue'
import TurmaForm from '@/components/forms/TurmaForm.vue'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

// Props
const props = defineProps<{
  turma: { id: number; nome: string; codigo_entradas?: string[] }
  aulas: Array<{ id: number; dia: string; turno: string; materia: string; professor: string }>
  materias: Array<{ id: number; nome: string }>
  professores: Array<{ id: number; nome: string }>
}>()

const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta']
const turnos = ['primeiro', 'segundo']

const breadcrumbs: BreadcrumbItem[] = [
  { title: props.turma.nome, href: turmasShow(props.turma.id).url },
]

// useForm
const form = useForm({
  nome: props.turma.nome,
  codigo_entradas: props.turma.codigo_entradas || [],
})

const isEditOpen = ref(false)

// Função auxiliar para buscar aula pelo dia/turno
function getAula(dia: string, turno: string) {
  return props.aulas.find(a => a.dia === dia && a.turno === turno) || null
}

// Atualizar turma
function updateTurma() {
  form.put(turmasUpdate(props.turma.id).url, {
    onSuccess: () => {
      toast.success('Turma atualizada com sucesso!')
      isEditOpen.value = false
      setTimeout(() => Inertia.reload(), 1000)
    },
    onError: errors => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao atualizar turma', {
        description: msg,
        class: 'whitespace-pre-line',
      })
    },
  })
}

// Excluir turma
function deleteTurma() {
  form.delete(turmasDestroy(props.turma.id).url, {
    onSuccess: () => {
      setTimeout(() => toast.success('Turma excluída com sucesso!'), 500)
    },
    onError: errors => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao excluir turma', {
        description: msg,
        class: 'whitespace-pre-line',
      })
    },
  })
}
</script>

<template>
  <Head title="Turma" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex flex-1 flex-col gap-4 p-4">
      <!-- Tabela de aulas -->
      <div class="grid auto-rows-min gap-4 md:grid-cols-5">
        <template v-for="turno in turnos" :key="turno">
          <ClassCard
            v-for="dia in dias"
            :key="dia + turno"
            :dia="dia"
            :turno="turno"
            :aula="getAula(dia, turno)"
            :turma-id="props.turma.id"
            :materias="props.materias"
            :professores="props.professores"
          />
        </template>
      </div>

      <!-- Cards adicionais -->
      <div class="grid auto-rows-min gap-4 md:grid-cols-2">
        <ClassCard
          dia="sabado"
          turno="sem_turno"
          :aula="getAula('sabado', 'sem_turno')"
          :turma-id="props.turma.id"
          :materias="props.materias"
          :professores="props.professores"
        />
        <ClassCard
          dia="contra_turno"
          turno="sem_turno"
          :aula="getAula('contra_turno', 'sem_turno')"
          :turma-id="props.turma.id"
          :materias="props.materias"
          :professores="props.professores"
        />
      </div>
    </div>

    <!-- Botões fixos -->
    <div class="fixed bottom-0 left-0 w-full p-4 flex justify-end gap-4 bg-background/70 backdrop-blur">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="destructive">Excluir</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir turma?</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não poderá ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction @click="deleteTurma">Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog v-model:open="isEditOpen">
        <DialogTrigger as-child>
          <Button>Editar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Turma</DialogTitle>
            <DialogDescription>Atualize as informações da turma abaixo.</DialogDescription>
          </DialogHeader>

          <TurmaForm :form="form" :onSubmit="updateTurma" />
        </DialogContent>
      </Dialog>
    </div>
  </AppLayout>
</template>
