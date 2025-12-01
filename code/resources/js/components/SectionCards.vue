<script setup lang="ts">

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
</script>

<template>
  <div class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
    <Card class="@container/card py-5">
      <CardHeader>
        <CardDescription>Desenvolvedor</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Vitor Hugo Oliveira Paloco
        </CardTitle>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
          3º Ano - Engenharia de Software
        </div>
        <div class="text-muted-foreground">
          UniFil - Centro Universitário Filadélfia
        </div>
      </CardFooter>
    </Card>

    <Card class="@container/card py-5">
      <CardHeader>
        <CardDescription>Orientador</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Marcelo Yukio Yamamoto
        </CardTitle>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
            Professor / Especialista
        </div>
        <div class="text-muted-foreground">
          UniFil - Centro Universitário Filadélfia
        </div>
      </CardFooter>
    </Card>

    <Card class="@container/card py-5">
      <CardHeader>
        <CardDescription>Linguagens</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Laravel & Vue.js
        </CardTitle>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
            PHP & JavaScript
        </div>
        <div class="text-muted-foreground">
          Banco de dados PostgreSQL
        </div>
      </CardFooter>
    </Card>

     <Card class="@container/card py-5">
      <CardHeader>
        <CardDescription>Stakeholder</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            João Vitor da Costa
        </CardTitle>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
            NPI - Núcleo de Práticas Interdisciplinares
        </div>
        <div class="text-muted-foreground">
          Fevereiro de 2025
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
