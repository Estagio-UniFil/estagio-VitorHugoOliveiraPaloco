<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useForm } from '@inertiajs/vue3'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Professor {
  id: number
  user: { name: string }
}

interface FormData {
  nome: string
  codigo: string
  curso: string
  tipo: string
  professor_id: string
}

// Props recebidos
const props = defineProps<{
  lista_professores: Professor[]
  form: FormData
  onSubmit: () => void
}>()

const emit = defineEmits<{
  (e: 'update:form', value: FormData): void
}>()
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <!-- Nome -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Nome</label>
      <Input v-model="props.form.nome" placeholder="Nome da matéria" required />
    </div>

    <!-- Código -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Código</label>
      <Input v-model="props.form.codigo" placeholder="Código da matéria" required />
    </div>

    <!-- Curso -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Curso</label>
      <Select v-model="props.form.curso" required>
        <SelectTrigger>
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="CC"><SelectItemText>Ciência da Computação</SelectItemText></SelectItem>
            <SelectItem value="ES"><SelectItemText>Engenharia de Software</SelectItemText></SelectItem>
            <SelectItem value="ADS"><SelectItemText>Análise e Desenvolvimento de Sistemas</SelectItemText></SelectItem>
            <SelectItem value="Todas"><SelectItemText>Todas</SelectItemText></SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <!-- Tipo -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Tipo</label>
      <Select v-model="props.form.tipo" required>
        <SelectTrigger>
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Core"><SelectItemText>Core</SelectItemText></SelectItem>
            <SelectItem value="Flex"><SelectItemText>Flex</SelectItemText></SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <!-- Professor -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Professor</label>
      <Select v-model="props.form.professor_id" required>
        <SelectTrigger>
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Professores</SelectLabel>
            <SelectItem
              v-for="professor in props.lista_professores"
              :key="professor.id"
              :value="String(professor.id)"
            >
              {{ professor.user.name }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="pt-4 text-right">
      <Button type="submit">Salvar</Button>
    </div>
  </form>
</template>
