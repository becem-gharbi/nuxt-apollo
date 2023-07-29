<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup>
import { gql } from "graphql-tag"
import { useSubscription } from "@vue/apollo-composable"

const query = gql`
subscription {
  book_mutated {
    data {
      name
    }
  }
}
`

const { result } = useSubscription(query)
</script>
