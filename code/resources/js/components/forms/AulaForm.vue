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

interface AulaFormData {
  materia_id: number | null
  professor_id: number | null
  sala: string
  classroom: string
}

const props = defineProps<{
  form: AulaFormData
  onSubmit: () => void
  materias: Array<{ id: number; nome: string }>
  professores: Array<{ id: number; nome: string }>
}>()

const emit = defineEmits<{
  (e: 'update:form', value: FormData): void
}>()
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <!-- Matéria -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Matéria</label>
      <Select v-model="props.form.materia_id" required>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma matéria" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem 
              v-for="m in props.materias" 
              :key="m.id" 
              :value="m.id.toString()"
            >
              <SelectItemText>{{ m.nome }}</SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <!-- Professor -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Professor</label>
      <Select v-model="props.form.professor_id" required>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um professor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem 
              v-for="p in props.professores" 
              :key="p.id" 
              :value="p.id.toString()"
            >
              <SelectItemText>{{ p.nome }}</SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <!-- Sala -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Sala</label>
      <Input v-model="props.form.sala" placeholder="Sala de aula" required />
    </div>

    <!-- Classroom -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Classroom</label>
      <Input v-model="props.form.classroom" placeholder="Código do classroom" required />
    </div>

    <div class="pt-4 text-right">
      <Button type="submit">Salvar</Button>
    </div>
  </form>
</template>
