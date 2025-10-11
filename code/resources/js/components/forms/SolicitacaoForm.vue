<script setup lang="ts">
import { defineProps } from 'vue'
import { useForm } from '@inertiajs/vue3'
import { Textarea } from '@/components/ui/textarea'
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
  descricao: string
  status: string
}

// Props recebidos
const props = defineProps<{
  form: FormData
  onSubmit: () => void
}>()
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <!-- Status -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Status</label>
      <Select v-model="props.form.status">
        <SelectTrigger>
          <SelectValue placeholder="Selecione o Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="em_analise"><SelectItemText>Em análise</SelectItemText></SelectItem>
            <SelectItem value="aprovada"><SelectItemText>Aprovada</SelectItemText></SelectItem>
            <SelectItem value="reprovada"><SelectItemText>Reprovada</SelectItemText></SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <!-- Descrição -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Descrição</label>
      <Textarea v-model="props.form.descricao" placeholder="Descrição" required />
    </div>

    <div class="pt-4 text-right">
      <Button type="submit">Salvar</Button>
    </div>
  </form>
</template>
