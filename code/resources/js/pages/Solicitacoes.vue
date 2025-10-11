<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { solicitacoesIndex, solicitacoesStore, solicitacoesUpdate, solicitacoesDestroy } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import { toast } from 'vue-sonner'

import DataTable from '@/components/DataTable.vue'
import TableDropDown from '@/components/ui/table/TableDropDown.vue'
import SolicitacaoForm from '@/components/forms/SolicitacaoForm.vue'

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Solicitações', href: solicitacoesIndex().url },
]

// Props
const props = defineProps<{
  lista_solicitacoes: Array<{
    id: number
    descricao: string
    status: string
    professor: { user: { name: string } }
    professor_id: string
  }>
}>()

// Dados da tabela
const solicitacaoData = props.lista_solicitacoes.map(s => ({
    id: s.id,
    descricao: s.descricao,
    status: s.status,
    professor: s.professor?.user?.name ?? '—',
    professor_id: s.professor_id
}))

const columns = [
  { key: 'descricao', label: 'Descrição' },
  { key: 'status', label: 'Status' },
  { key: 'professor', label: 'Professor' },
]

// useForm
const form = useForm({
    descricao: '',
    status: ''
})

const editingSolicitacaoId = ref<number | null>(null)

// Funções
function saveSolicitacao() {
  if (editingSolicitacaoId.value) {
    form.put(solicitacoesUpdate(editingSolicitacaoId.value).url, {
      onSuccess: () => {
        toast.success('Solicitação atualizada com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_solicitacoes'] }), 1000)
        editingSolicitacaoId.value = null
        form.reset()
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao atualizar solicitação', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  } else {
    form.post(solicitacoesStore().url, {
      onSuccess: () => {
        toast.success('Solicitação criada com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_solicitacoes'] }), 1000)
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao criar solicitação', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  }
}

function deleteSolicitacao(id: number) {
  form.delete(solicitacoesDestroy(id).url, {
    onSuccess: () => {
      toast.success('Solicitação excluída com sucesso!')
      setTimeout(() => Inertia.reload({ only: ['lista_solicitacoes'] }), 1000)
    },
    onError: (errors) => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao excluir solicitação', { description: msg, class: 'whitespace-pre-line' })
    }
  })
}

function editSolicitacao(row: any) {
  form.descricao = row.descricao
  form.status = row.status
  
  editingSolicitacaoId.value = row.id
}
</script>

<template>
  <Head title="Solicitações" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <DataTable
      :columns="columns"
      :data="solicitacaoData"
      button-label="Adicionar Solicitação"
      form-title="Nova solicitação"
      form-desc="Preencha os dados da solicitação."
      @edit="editSolicitacao"
    >
      <template #actions="{ row, openModal }">
        <TableDropDown
          :row="row"
          @delete="deleteSolicitacao(row.id)"
          @edit="openModal"
        />
      </template>

      <template #form>
        <SolicitacaoForm
          :form="form"
          :onSubmit="saveSolicitacao"
        />
      </template>
    </DataTable>
  </AppLayout>
</template>
