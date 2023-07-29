<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup>
import gql from 'graphql-tag';

const { result } = useQuery(gql`
query {
  book {
    name
    author
  }
}
`)
</script>
