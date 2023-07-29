<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup>
import { gql } from "graphql-tag"
import { useApolloQuery } from "#imports"

const { result } = useApolloQuery(gql`
query {
  book{
    id
    name
    author
  }
}
`)
</script>
