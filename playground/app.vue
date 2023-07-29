<template>
  <div>
    {{ resultQ }}
  </div>
</template>

<script setup>
import { gql } from "graphql-tag"
import { useQuery, useSubscription } from "@vue/apollo-composable"
const query = gql`
subscription {
  book_mutated {
    data {
      name
      author
    }
  }
}
`
const { result } = useSubscription(query)

const { result: resultQ } = useQuery(gql`
query {
  book {
    id
    name
    author
  }
}
`)
</script>