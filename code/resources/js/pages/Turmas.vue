<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { turmasIndex, turmasStore, turmasDestroy, turmasShow } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/vue3'
import { Head, Link } from '@inertiajs/vue3'
import { toast } from 'vue-sonner'

import DataTable from '@/components/DataTable.vue'
import TableDropDown from '@/components/ui/table/TableDropDown.vue'
import TurmaForm from '@/components/forms/TurmaForm.vue'

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Turmas', href: turmasIndex().url },
]

// Props
const props = defineProps<{
  lista_turmas: Array<{
    id: number
    nome: string
    codigo_entradas: Array<string>
  }>
}>()

// Dados da tabela
const turmaData = props.lista_turmas.map(t => ({
  id: t.id,
  nome: t.nome,
  codigo_entradas: t.codigo_entradas.join(', '), 
}))

const columns = [
  { key: 'nome', label: 'Nome' },
  { key: 'codigo_entradas', label: 'Entradas' }
]

const form = useForm({
  nome: '',
  codigo_entradas: [] as string[]
})

// Funções
function saveTurma() {
  form.post(turmasStore().url, {
    onSuccess: () => {
      toast.success('Turma criada com sucesso!')
      setTimeout(() => Inertia.reload({ only: ['lista_turmas'] }), 1000)
      form.reset() 
    },
    onError: (errors) => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao criar turma', { description: msg, class: 'whitespace-pre-line' })
    }
  })
}

function deleteTurma(id: number) {
  form.delete(turmasDestroy(id).url, {
    onSuccess: () => {
        toast.success('Turma excluída com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_turmas'] }), 1000)
    },
    onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao excluir turma', { description: msg, class: 'whitespace-pre-line' })
    }
  })
}

function editTurma(id: number) {
  Inertia.visit(turmasShow(id).url)
}
</script>

<template>
  <Head title="Turmas" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <DataTable
      :columns="columns"
      :data="turmaData"
      button-label="Adicionar Turma"
      form-title="Nova turma"
      form-desc="Preencha os dados da turma."
    >
      <template #actions="{ row }">
        <TableDropDown
          :row="row"
          @delete="deleteTurma(row.id)"
          @edit="editTurma(row.id)"
        >
          <template #extra-actions>
            <Link :href="turmasShow(row.id).url" class="block w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded-sm">
              Visualizar/Editar
            </Link>
          </template>
        </TableDropDown>
      </template>

      <template #form>
        <TurmaForm
          :form="form"
          :onSubmit="saveTurma"
        />
      </template>
    </DataTable>
  </AppLayout>
</template>