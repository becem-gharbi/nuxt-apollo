<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
import { useQuery, gql } from '#imports'

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

const { result: data } = useQuery(query)
</script>
