<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { materiasIndex, materiasStore, materiasDestroy, materiasUpdate } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import { toast } from 'vue-sonner'

import DataTable from '@/components/DataTable.vue'
import TableDropDown from '@/components/ui/table/TableDropDown.vue'
import MateriaForm from '@/components/forms/MateriaForm.vue'

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Matérias', href: materiasIndex().url },
]

// Props
const props = defineProps<{
  lista_materias: Array<{
    id: number
    nome: string
    codigo: string
    curso: string
    tipo: string
    professor?: { name: string }
    professor_id?: string
  }>
  lista_professores: Array<{
    id: number
    user: { name: string }
  }>
}>()

// Dados da tabela
const materiaData = props.lista_materias.map(m => ({
  id: m.id,
  nome: m.nome,
  codigo: m.codigo,
  curso: m.curso,
  tipo: m.tipo,
  professor: m.professor?.user?.name ?? '—',
  professor_id: m.professor_id ?? null
}))

const columns = [
  { key: 'nome', label: 'Nome' },
  { key: 'codigo', label: 'Código' },
  { key: 'curso', label: 'Curso' },
  { key: 'tipo', label: 'Tipo' },
  { key: 'professor', label: 'Professor' },
]

// useForm
const form = useForm({
  nome: '',
  codigo: '',
  curso: '',
  tipo: '',
  professor_id: ''
})

const editingMateriaId = ref<number | null>(null)

// Funções
function saveMateria() {
  if (editingMateriaId.value) {
    form.put(materiasUpdate(editingMateriaId.value).url, {
      onSuccess: () => {
        toast.success('Matéria atualizada com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_materias'] }), 1000)
        editingMateriaId.value = null
        form.reset()
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao atualizar matéria', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  } else {
    form.post(materiasStore().url, {
      onSuccess: () => {
        toast.success('Matéria criada com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_materias'] }), 1000)
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao criar matéria', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  }
}

function deleteMateria(id: number) {
  form.delete(materiasDestroy(id).url, {
    onSuccess: () => {
      toast.success('Matéria excluída com sucesso!')
      setTimeout(() => Inertia.reload({ only: ['lista_materias'] }), 1000)
    },
    onError: (errors) => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao excluir matéria', { description: msg, class: 'whitespace-pre-line' })
    }
  })
}

function editMateria(row: any) {
  form.nome = row.nome
  form.codigo = row.codigo
  form.curso = row.curso
  form.tipo = row.tipo
  form.professor_id = row.professor_id ? String(row.professor_id) : '' 
  
  editingMateriaId.value = row.id
}
</script>

<template>
  <Head title="Matérias" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <DataTable
      :columns="columns"
      :data="materiaData"
      button-label="Adicionar Matéria"
      form-title="Nova matéria"
      form-desc="Preencha os dados da matéria."
      @edit="editMateria"
    >
      <template #actions="{ row, openModal }">
        <TableDropDown
          :row="row"
          @delete="deleteMateria(row.id)"
          @edit="openModal"
        />
      </template>

      <template #form>
        <MateriaForm
          :form="form"
          :lista_professores="props.lista_professores"
          :onSubmit="saveMateria"
        />
      </template>
    </DataTable>
  </AppLayout>
</template>
