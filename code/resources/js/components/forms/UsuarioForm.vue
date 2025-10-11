<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
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

interface FormData {
  name: string
  matricula: string
  email: string
  role_id: string
}

const props = defineProps<{
  form: FormData
  onSubmit: () => void
}>()

const emit = defineEmits<{
  (e: 'update:form', value: FormData): void
}>()
</script>

<template>
    <form @submit.prevent="props.onSubmit" class="space-y-4">
        <div class="space-y-2">
        <label class="text-sm font-medium">Nome</label>
        <Input v-model="props.form.name" placeholder="Nome do usuário" required />
        </div>

        <div class="space-y-2">
        <label class="text-sm font-medium">Matrícula</label>
        <Input v-model="props.form.matricula" placeholder="Matrícula" required />
        </div>

        <div class="space-y-2">
        <label class="text-sm font-medium">Email</label>
        <Input v-model="props.form.email" type="email" placeholder="Email" required />
        </div>

        <div class="space-y-2">
        <label class="text-sm font-medium">Role</label>
        <Select v-model="props.form.role_id" required>
            <SelectTrigger>
            <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="1"><SelectItemText>Aluno</SelectItemText></SelectItem>
                <SelectItem value="2"><SelectItemText>Professor</SelectItemText></SelectItem>
                <SelectItem value="3"><SelectItemText>Coordenador</SelectItemText></SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
        </div>

        <div class="pt-4 text-right">
        <Button type="submit">Salvar</Button>
        </div>
    </form>
</template>