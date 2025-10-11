<script setup lang="ts">
import { ref } from 'vue'

import {
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger
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

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from "@/components/ui/separator"
import { toast } from 'vue-sonner'
import AulaForm from '@/components/forms/AulaForm.vue'

import { User, MapPin, NotepadText, SquarePen, Trash, ClipboardPen } from 'lucide-vue-next'
import { aulasDestroy, aulasUpdate } from '@/routes/index'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/vue3'

// Props
const props = defineProps<{
  dia: string 
  turno: string
  turmaId: number
  aula: null | {
    id: number
    materia: string
    professor: string
    sala: string
    classroom: string
    materia_id?: number
    professor_id?: number
  }
  materias: Array<{ id: number; nome: string }>
  professores: Array<{ id: number; nome: string }>
}>()

const isCreateOpen = ref(false)
const isEditOpen = ref(false)

const form = useForm({
  dia: props.dia,
  turno: props.turno,
  turma_id: props.turmaId,
  materia_id: null as number | null,
  professor_id: null as number | null,
  sala: '',
  classroom: ''
})

// Função para excluir aula
function deleteAula(id: number) {
  form.delete(aulasDestroy({ turma: props.turmaId, aula: props.aula!.id }).url, {
    onSuccess: () => toast.success('Aula excluída com sucesso!'),
    onError: (errors) => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao excluir aula', { description: msg, class: 'whitespace-pre-line' })
    },
  })
}

// Função para salvar aula (criação ou edição)
function saveAula() {
  if (props.aula) {
    // Edição
    form.put(aulasUpdate({ turma: props.turmaId, aula: props.aula!.id }).url, {
      onSuccess: () => {
        toast.success('Aula atualizada!')
        form.reset()
        isEditOpen.value = false
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao atualizar aula', { description: msg })
      },
    })
  } else {
    // Criação
    form.post(`/turmas/${props.turmaId}/aulas`, {
      onSuccess: () => {
        toast.success('Aula criada!')
        form.reset()
        isCreateOpen.value = false
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao criar aula', { description: msg })
      },
    })
  }
}

function openEditDialog() {
  if (!props.aula) return
  form.dia = props.dia
  form.turno = props.turno
  form.turma_id = props.turmaId
  form.materia_id = props.aula.materia_id ? String(props.aula.materia_id) : null
  form.professor_id = props.aula.professor_id ? String(props.aula.professor_id) : null
  form.sala = props.aula.sala
  form.classroom = props.aula.classroom
  isEditOpen.value = true
}
</script>

<template>
  <div class="rounded-xl bg-muted/50 text-card-foreground shadow-md h-auto min-h-[10rem] flex flex-col justify-center">
    <!-- Caso ainda não exista aula -->
    <Dialog v-if="!props.aula" v-model:open="isCreateOpen">
     <DialogTrigger as-child>
        <div class="flex justify-center">
          <Button class="bg-[#F29400] text-white rounded-xl capitalize">
            + {{ props.dia }} ({{ props.turno }})
          </Button>
        </div>
      </DialogTrigger>


      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Aula</DialogTitle>
          <DialogDescription>
            Adicione uma aula para {{ props.dia }} ({{ props.turno }} turno)
          </DialogDescription>
        </DialogHeader>
        <AulaForm 
          :form="form" 
          :onSubmit="saveAula"
          :materias="props.materias"
          :professores="props.professores"
        />
      </DialogContent>
    </Dialog>

    <!-- Caso já exista aula -->
    <div v-else>
      <div class="bg-[#F29400] text-white rounded-t-xl p-4">
        <h3 class="font-semibold text-lg leading-tight">
          {{ props.aula.materia }}
        </h3>
      </div>

      <div class="p-4 space-y-3">
        <div class="flex items-center gap-2 text-sm">
          <NotepadText class="w-4 h-4" />
          <span><strong>Código:</strong> {{ props.aula.classroom }}</span>
        </div>

        <div class="flex items-center gap-2 text-sm">
          <User class="w-4 h-4" />
          <span><strong>Professor:</strong> {{ props.aula.professor }}</span>
        </div>

        <div class="flex items-center gap-2 text-sm">
          <MapPin class="w-4 h-4" />
          <span><strong>Sala:</strong> {{ props.aula.sala }}</span>
        </div>
      </div>

      <Separator />

      <div class="flex justify-center gap-3 p-3">
        <Dialog v-model:open="isEditOpen">
          <DialogTrigger as-child>
            <Button variant="outline" @click.stop="openEditDialog">
              <SquarePen class="w-4 h-4" /> Editar
            </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar Aula</DialogTitle>
              <DialogDescription>
                Atualize as informações da aula da aula
              </DialogDescription>
            </DialogHeader>
            <AulaForm 
              :form="form" 
              :onSubmit="saveAula"
              :materias="props.materias"
              :professores="props.professores"
            />
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger as-child>
            <Button variant="outline" class="text-red-500" @click.stop>
              <Trash class="w-4 h-4" /> Excluir
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Excluir aula?</AlertDialogTitle>
              <AlertDialogDescription>Essa ação não pode ser desfeita.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction @click="deleteAula(props.aula.id)">
                Sim, excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  </div>
</template>
