<template>
  <div>
    {{ result }}

    <button @click="load()">Load</button>
  </div>
</template>

<script setup>
import { gql } from "graphql-tag"
import { useQuery, useLazyQuery } from "@vue/apollo-composable"

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

const { result, onResult, load } = useLazyQuery(query)

onResult(({ data, error }) => { console.log({ data, error }) })
</script>