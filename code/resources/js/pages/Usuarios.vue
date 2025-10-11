<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { usuariosIndex, usuariosStore, usuariosDestroy, usuariosUpdate } from '@/routes'
import { type BreadcrumbItem } from '@/types'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import { toast } from 'vue-sonner'

import DataTable from '@/components/DataTable.vue'
import TableDropDown from '@/components/ui/table/TableDropDown.vue'
import UsuarioForm from '@/components/forms/UsuarioForm.vue' // Componente de formulário

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Usuários', href: usuariosIndex().url },
]

// Props
const props = defineProps<{
  lista_usuarios: Array<{
    id: number
    name: string
    email: string
    matricula: string
    role?: { nome: string; id: number }
  }>
}>()

// Dados para a tabela
const usuariosData = props.lista_usuarios.map(usuario => ({
  id: usuario.id,
  matricula: usuario.matricula,
  name: usuario.name,
  email: usuario.email,
  role: usuario.role?.nome ?? '—',
  role_id: usuario.role?.id ?? null,
}))

// useForm do Inertia
const form = useForm({
  name: '',
  matricula: '',
  email: '',
  role_id: ''
})

// Ref para rastrear se estamos editando
const editingUsuarioId = ref<number | null>(null)

// Função para criar ou atualizar
function saveUsuario() {
  if (editingUsuarioId.value) {
    // Lógica de Atualização (PUT)
    form.put(usuariosUpdate(editingUsuarioId.value).url, {
      onSuccess: () => {
        toast.success('Usuário atualizado com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_usuarios'] }), 1000)
        editingUsuarioId.value = null
        form.reset()
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao atualizar usuário', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  } else {
    // Lógica de Criação (POST)
    form.post(usuariosStore().url, {
      onSuccess: () => {
        toast.success('Usuário criado com sucesso!')
        setTimeout(() => Inertia.reload({ only: ['lista_usuarios'] }), 1000)
        form.reset()
      },
      onError: (errors) => {
        const msg = Object.values(errors).flat().join('\n')
        toast.error('Erro ao criar usuário', { description: msg, class: 'whitespace-pre-line' })
      }
    })
  }
}

// Função para deletar
function deleteUsuario(id: number) {
  if (!id) return

  form.delete(usuariosDestroy(id).url, {
    onSuccess: () => {
      toast.success('Usuário excluído com sucesso!')
      setTimeout(() => Inertia.reload({ only: ['lista_usuarios'] }), 1000)
    },
    onError: (errors) => {
      const msg = Object.values(errors).flat().join('\n')
      toast.error('Erro ao excluir usuário', {
        description: msg,
        class: 'whitespace-pre-line'
      })
    }
  })
}

function editUsuario(row: any) {
  form.name = row.name
  form.matricula = row.matricula
  form.email = row.email
  form.role_id = row.role_id ? String(row.role_id) : '' 
  
  editingUsuarioId.value = row.id
}
</script>

<template>
  <Head title="Usuários" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <DataTable
      :columns="[
        { key: 'matricula', label: 'Matrícula' },
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Tipo' }
      ]"
      :data="usuariosData"
      button-label="Adicionar Usuário"
      form-title="Novo usuário"
      form-desc="Preencha os dados do usuário."
      @edit="editUsuario"
    >
      <template #actions="{ row, openModal }">
        <TableDropDown 
          :row="row" 
          @delete="deleteUsuario(row.id)" 
          @edit="openModal" 
        />
      </template>

      <template #form>
        <UsuarioForm
          :form="form"
          :onSubmit="saveUsuario"
        />
      </template>

    </DataTable>
  </AppLayout>
</template>