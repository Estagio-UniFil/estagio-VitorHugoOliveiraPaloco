<script setup lang="ts">
import { defineProps } from 'vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from "@/components/ui/tags-input"

interface FormData {
  nome: string
  codigo_entradas: string[]
}

// Props recebidos
const props = defineProps<{
  form: FormData
  onSubmit: () => void
}>()
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div class="space-y-2">
      <label class="text-sm font-medium">Nome</label>
      <Input v-model="props.form.nome" placeholder="Nome da turma" required />
    </div>
    
    <div class="space-y-2">
        <label class="text-sm font-medium">Entradas</label>
        <TagsInput v-model="props.form.codigo_entradas">
            <TagsInputItem 
                v-for="entrada in props.form.codigo_entradas" 
                :key="entrada" 
                :value="entrada"
            >
                <TagsInputItemText />
                <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="Digite os códigos das entradas"/>
        </TagsInput>

    </div>

    <div class="pt-4 text-right">
      <Button type="submit">Salvar</Button>
    </div>
  </form>
</template>