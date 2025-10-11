<script setup lang="ts">
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// Props
const props = defineProps<{
  columns: { key: string; label: string }[]
  data: any[]
  buttonLabel?: string
  formTitle?: string
  formDesc?: string
}>()

const emit = defineEmits<{
  (e: 'edit', row: any): void
}>()

const search = ref('')
const page = ref(1)
const itemsPerPage = 16
const isOpen = ref(false)

// Computeds
const filteredData = computed(() => {
  if (!search.value) return props.data
  return props.data.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(search.value.toLowerCase())
    )
  )
})

const paginatedData = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  return filteredData.value.slice(start, start + itemsPerPage)
})

watch(search, () => (page.value = 1))

// Funções
function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

function handleEdit(row: any) {
  isOpen.value = true
  emit('edit', row)
}
</script>

<template>
  <!-- Search & Button -->
  <div class="pt-6 px-6 flex justify-end space-x-4">
    <Input v-model="search" placeholder="Pesquisar..." class="max-w-xs" />

    <!-- Dialog que recebe conteúdo do slot -->
    <Dialog v-model:open="isOpen">
      <DialogTrigger as-child>
        <Button v-if="props.buttonLabel" @click="openModal">{{ props.buttonLabel }}</Button>      
      </DialogTrigger>

      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{{ props.formTitle }}</DialogTitle>
          <DialogDescription>{{ props.formDesc }}</DialogDescription>
        </DialogHeader>
        <slot name="form" />
      </DialogContent>
    </Dialog>
  </div>

  <!-- Table -->
  <div class="pt-6 px-6">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-for="col in props.columns" :key="col.key">{{ col.label }}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in paginatedData" :key="row.id">
          <TableCell v-for="col in props.columns" :key="col.key">{{ row[col.key] }}</TableCell>
          <TableCell v-if="$slots.actions" class="text-right">
            <slot name="actions" :row="row" :openModal="() => handleEdit(row)" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <!-- Pagination -->
  <div class="p-6 flex justify-end">
    <Pagination v-model:page="page" :items-per-page="itemsPerPage" :total="filteredData.length">
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />
        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
            @click="page = item.value"
          >
            {{ item.value }}
          </PaginationItem>
        </template>
        <PaginationEllipsis :index="4" />
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  </div>
</template>
