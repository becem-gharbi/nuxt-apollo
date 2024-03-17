<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
import { useAsyncQuery } from './composables/useAyncQuery'
import { gql } from '#imports'

const query = gql`
query ExampleQuery {
  company {
    ceo
  }
  roadster {
    apoapsis_au
  }
}
`

const { data } = await useAsyncQuery(query)
</script>
